import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

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
        // GTM event for successful form submit
        try {
          if (typeof window !== 'undefined') {
            // @ts-ignore
            window.dataLayer = window.dataLayer || [];
            // @ts-ignore
            window.dataLayer.push({ event: 'form_submit' });
          }
        } catch {}
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
          <DialogTitle>Let's build your dream website</DialogTitle>
          <DialogDescription>
            Share a few details — we'll reply within 24 hours with ideas and pricing
          </DialogDescription>
        </DialogHeader>
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input value={name} onChange={e => setName(e.target.value)} placeholder="Alex Johnson" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" inputMode="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="alex@studio.co" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Project details</label>
            <Textarea 
              value={dream} 
              onChange={e => setDream(e.target.value)} 
              placeholder="I run a studio and need a modern website with a booking system" 
              rows={5}
              required 
            />
          </div>
          <DialogFooter>
            <Button 
              type="submit" 
              disabled={!isValid || isSubmitting}
              className="bg-accent-dark text-white hover:bg-accent-dark-soft shadow-soft"
            >
              {isSubmitting ? 'Sending…' : 'Send request'}
            </Button>
          </DialogFooter>
          <div className="pt-1 text-xs text-text-secondary flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>
              By clicking this button, you agree to our{' '}
              <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="underline">Terms & Conditions</a>.
            </span>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}


