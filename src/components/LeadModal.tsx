import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

interface LeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadModal({ open, onOpenChange }: LeadModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dream, setDream] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = name.trim() && email.trim() && dream.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
    if (!accessKey) {
      toast.error('Missing Web3Forms key. Please configure VITE_WEB3FORMS_KEY.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New lead from DreamDigital (LeadModal)',
          name,
          email,
          message: dream
        })
      });

      const data = await response.json();
      if (response.ok && (data?.success ?? true)) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        onOpenChange(false);
        setName('');
        setEmail('');
        setDream('');
      } else {
        const errorMessage = data?.message || 'Failed to send message. Please try again later.';
        toast.error(errorMessage);
      }
    } catch (err) {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:max-w-[16rem] lg:max-w-[16rem] xl:max-w-[16rem] 2xl:max-w-[16rem]">
        <DialogHeader>
          <DialogTitle>Get your quote</DialogTitle>
          <DialogDescription>
            Leave your contacts and tell us about your dream website. We'll get back within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Tell us about your dream</label>
            <Textarea value={dream} onChange={e => setDream(e.target.value)} placeholder="Business, goals, deadlines — anything important" rows={5} />
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send request'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}


