"use client"

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

// Platform Icons with original brand colors
const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'google':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      );
    case 'trustpilot':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="2" fill="#00B67A"/>
          <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="white"/>
        </svg>
      );
    case 'yelp':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="#D32323"/>
          <path d="M12 7L13.5 11H17.5L14.25 13.5L15.5 17.5L12 15L8.5 17.5L9.75 13.5L6.5 11H10.5L12 7Z" fill="white"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#1877F2"/>
          <path d="M16.5 12.75H13.5V21H10.5V12.75H8.25V10.125H10.5V8.25C10.5 6.18 11.7975 4.5 14.25 4.5H16.5V7.125H15C14.3775 7.125 13.5 7.4625 13.5 8.25V10.125H16.5V12.75Z" fill="white"/>
        </svg>
      );
    default:
      return null;
  }
};

const testimonials = [
  {
    name: "Anna Torop",
    role: "Hair Salon Owner",
    content: "Honestly, I didn't believe they could do it in 24 hours. But they did! The site is gorgeous, my clients keep complimenting it. I'm getting way more bookings now — like 40% more in just the first month. Worth every penny.",
    rating: 5,
    platform: "google"
  },
  {
    name: "Igor Markevich",
    role: "Epoxy Flooring",
    content: "No BS, no complicated jargon. Just straight to the point. I sent them what I needed, they sent me options, I picked one, done. My customers actually use the contact form now instead of just calling. Super happy with it.",
    rating: 5,
    platform: "trustpilot"
  },
  {
    name: "Jennifer Park",
    role: "Food Catering",
    content: "This was the smartest move for my business this year. People can finally order online instead of texting me at midnight. The site already paid for itself in like 2 weeks. Can't recommend them enough!",
    rating: 5,
    platform: "yelp"
  },
  {
    name: "Mohammed Torres",
    role: "Contractor",
    content: "I've been burned before by web designers who overpromise. These guys? They did exactly what they said they'd do. On time. Fair price. No drama. That's rare nowadays. Really solid work.",
    rating: 5,
    platform: "google"
  },
  {
    name: "Lisa Simonenko",
    role: "Fitness Coach",
    content: "I'll be real — I was nervous spending money on a website. But after seeing the designs they sent me, I knew they got it. Now my clients can book sessions directly online and I look way more legit. Booking rate literally doubled.",
    rating: 5,
    platform: "facebook"
  },
  {
    name: "James Wilson",
    role: "Lawyer",
    content: "I almost hired a big agency that quoted me $8k. Then I found Dream Digital. Got the same quality for a fraction of the cost. My colleagues thought I spent way more than I did. Smart investment for any professional.",
    rating: 5,
    platform: "trustpilot"
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-bg" style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' } as any}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block px-4 py-2 border border-border bg-elevated mb-6">
            <span className="font-mono text-xs tracking-wider uppercase text-text-secondary">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6">
            What our clients say
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real results from real businesses just like yours
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="bg-elevated border-2 border-border p-6 hover:border-accent-dark transition-all duration-200 relative"
            >
              {/* Platform Icon - Bottom Right */}
              <div className="absolute bottom-4 right-4 opacity-30 hover:opacity-60 transition-opacity duration-200">
                <PlatformIcon platform={testimonial.platform} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-bold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}