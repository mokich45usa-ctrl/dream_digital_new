"use client"

import { Mail, MessageCircle, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  onGetStarted?: () => void;
}

export function Footer({ onGetStarted }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-accent-dark text-white py-16 lg:py-20">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Brand */}
          <div>
            <div className="mb-6">
              {logoError ? (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <span className="text-accent-dark font-black text-base">DD</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-black tracking-tight">DREAM</span>
                    <span className="font-black tracking-tight">DIGITAL</span>
                  </div>
                </div>
              ) : (
                <img 
                  src="https://lh3.googleusercontent.com/d/1VH4HwMqAtNxfNVMNKVfIuPUBwh0jt0pr" 
                  alt="Dream Digital" 
                  className="h-12 w-auto"
                  onError={() => setLogoError(true)}
                  loading="eager"
                />
              )}
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Professional websites for modern businesses. Fast, affordable, and built to convert.
            </p>
            <div className="flex items-start gap-2 text-white/60">
              <svg 
                className="w-4 h-4 mt-1 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-white/70">Sacramento, California</p>
                <p className="text-xs text-white/50">Serving businesses nationwide</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="packages"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="work"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="testimonials"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.querySelector('[data-section="faq"]');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/16192072318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://t.me/dreamdigitalteam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a 
                href="mailto:dreamdigital72@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>dreamdigital72@gmail.com</span>
              </a>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/dreamdigital.team?igsh=MXQzZmwxbmR0eGk4NA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61579975773975&mibextid=wwXIfr&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Dream Digital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}