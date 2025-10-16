"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onGetStarted?: () => void;
}

const navLinks = [
  { name: 'Home', section: 'hero' },
  { name: 'Gallery', section: 'infinite-gallery' },
  { name: 'Process', section: 'simple-process' },
  { name: 'Pricing', section: 'packages' },
  { name: 'Our Work', section: 'work' },
  { name: 'Reviews', section: 'testimonials' },
  { name: 'FAQ', section: 'faq' },
];

export function Header({ onGetStarted }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`[data-section="${section}"]`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleGetStarted = () => {
    setIsMobileMenuOpen(false);
    onGetStarted?.();
  };

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-elevated/90 backdrop-blur-md border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              {logoError ? (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent-dark flex items-center justify-center">
                    <span className="text-white font-black text-sm">DD</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-black text-sm tracking-tight text-text-primary">DREAM</span>
                    <span className="font-black text-sm tracking-tight text-text-primary">DIGITAL</span>
                  </div>
                </div>
              ) : (
                <img
                  src="https://lh3.googleusercontent.com/d/1VH4HwMqAtNxfNVMNKVfIuPUBwh0jt0pr"
                  alt="Dream Digital"
                  className="h-10 lg:h-12 w-auto"
                  onError={() => setLogoError(true)}
                  loading="eager"
                />
              )}
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button 
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-accent-dark text-white text-sm text-center hover:bg-accent-dark-soft transition-colors"
              data-cta="get-started">
                <span className="font-semibold">Get Started</span>
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-primary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-text-primary/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-16 right-0 bottom-0 w-full max-w-sm bg-elevated border-l border-border">
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className="text-left px-4 py-3 text-text-primary font-medium hover:bg-surface transition-colors"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border">
                <button
                  onClick={handleGetStarted}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-accent-dark text-white text-center hover:bg-accent-dark-soft transition-colors"
                data-cta="get-started">
                  <span className="font-semibold">Get Started</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}