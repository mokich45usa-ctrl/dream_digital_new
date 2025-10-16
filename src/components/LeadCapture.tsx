import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface LeadCaptureProps {
  onChatWithAI: () => void;
}

export function LeadCapture({ onChatWithAI }: LeadCaptureProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

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
          subject: 'New lead from DreamDigital',
          ...formData
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
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          message: ''
        });
      } else {
        const errorMessage = data?.message || 'Failed to send message. Please try again later.';
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };



  return (
    <section 
      className="Lead/Container py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1683231081951-1ac967265d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1c2luZXNzJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTg1MjQ5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Light overlay for better readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]" />
      
      {/* Soft white fade gradient at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-72 pointer-events-none z-5"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.1) 70%, transparent 100%)'
        }}
      />
      
      <div className="max-w-[1080px] mx-auto px-4 lg:px-0 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading-section" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.9), 0 1px 2px rgba(255,255,255,0.7)' }}>
              Let's build your dream website
            </h2>
            <p className="text-lg text-gray-600" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
              Share a few details — we'll reply within 24 hours with ideas and pricing
            </p>
          </div>

          {/* Form */}
          <motion.div 
            className="Lead/Form bg-white/95 backdrop-blur-sm rounded-soft p-8 shadow-elevated border border-white/50"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input 
                    placeholder="Alex Johnson" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="alex@studio.co" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input 
                    placeholder="Bright Studio" 
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5k</SelectItem>
                      <SelectItem value="5k-15k">$5k - $15k</SelectItem>
                      <SelectItem value="15k-plus">$15k+</SelectItem>
                      <SelectItem value="not-sure">Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="I run a studio and need a modern website with a booking system"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="bg-accent-dark text-white hover:bg-accent-dark-soft shadow-soft px-8" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>
              </div>

              {/* Trust note */}
              <div className="pt-2 text-sm text-gray-500 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Your info is secure. We'll never share your contact details.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}