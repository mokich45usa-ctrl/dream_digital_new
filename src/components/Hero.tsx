import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { Palette } from 'lucide-react';

interface AccentColor {
  name: string;
  primary: string;
  dark: string;
  light: string;
}

interface HeroProps {
  onGetStarted: () => void;
  selectedColor: AccentColor;
  setSelectedColor: (color: AccentColor) => void;
  accentColors: AccentColor[];
}

export function Hero({ onGetStarted, selectedColor, setSelectedColor, accentColors }: HeroProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('[data-section="packages"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false);
      }
    };

    if (showColorPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showColorPicker]);

  // Desktop-only subtle parallax for background blobs
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia('(pointer: fine)').matches === false) return; // desktop-ish only
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width; // 0..1
      const relY = (e.clientY - rect.top) / rect.height; // 0..1
      const target = { x: (relX - 0.5) * 8, y: (relY - 0.5) * 8 }; // max ~8px shift
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt(target));
    };
    const onLeave = () => { cancelAnimationFrame(raf); setTilt({ x: 0, y: 0 }); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); cancelAnimationFrame(raf); };
  }, []);

  // Mobile: subtle scroll-based parallax (very light)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches === false) return;
    let raf = 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const offset = Math.max(-6, Math.min(6, (y % 120) - 60)) / 2; // -3..3px
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt(t => ({ x: t.x, y: offset })));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        // Override CSS variables only for this section
        '--brand': selectedColor.primary,
        '--brand-dark': selectedColor.dark,
        '--brand-light': selectedColor.light,
      } as React.CSSProperties}
    >


      {/* Content */}
      <div ref={containerRef} className="max-w-[1080px] mx-auto px-4 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Overline with Color Picker */}
          <div ref={colorPickerRef} className="relative inline-flex items-center gap-3 px-4 py-2 border border-border bg-elevated">
            <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="font-mono text-xs tracking-wider uppercase text-text-secondary">
              Choose your Dream vibe → 
            </span>
            
            {/* Divider */}
            <div className="w-px h-4 bg-border" />
            
            {/* Color Picker Button */}
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="flex items-center gap-1.5 group"
              title="Change accent color"
            >
              <Palette className="w-3.5 h-3.5 text-text-tertiary group-hover:text-brand transition-colors" />
              <span className="font-mono text-xs tracking-wider uppercase text-text-tertiary group-hover:text-brand transition-colors">
                {selectedColor.name}
              </span>
            </button>
            
            {/* Color Picker Panel - Positioned below overline */}
            {showColorPicker && (
              <div className="absolute top-full left-0 mt-3 z-20 bg-elevated border-2 border-border p-4 shadow-xl min-w-[280px] animate-fade-in">
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-mono text-xs tracking-wider uppercase text-text-secondary">
                      Accent Color
                    </p>
                    <button
                      onClick={() => setShowColorPicker(false)}
                      className="text-text-tertiary hover:text-text-primary text-xl leading-none w-6 h-6 flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    {accentColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => {
                          setSelectedColor(color);
                          setShowColorPicker(false);
                        }}
                        className={`w-14 h-14 border-2 transition-all duration-200 relative group/color ${
                          selectedColor.name === color.name
                            ? 'border-accent-dark scale-105'
                            : 'border-border hover:border-accent-dark-soft hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.primary }}
                        title={color.name}
                      >
                        {selectedColor.name === color.name && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="font-mono text-xs text-text-tertiary text-center">
                      Click to select
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-text-primary max-w-[18ch] sm:max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '80ms', animationFillMode: 'both' }}>
            Get a professional website from{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-text-primary">$300</span>
              <div className="absolute bottom-1 left-0 right-0 h-3 bg-brand/20" />
            </span>
            {' '}and jumpstart your business.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '160ms', animationFillMode: 'both' }}>
            Fast. Affordable. Built by professionals.
            <br />No hassle, just results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '240ms', animationFillMode: 'both' }}>
            <button 
              data-cta="get-started"
              onClick={onGetStarted}
              className="fancy-black"
              aria-label="Get a professional website quote"
            >
              <span className="text">Get a Website Quote</span>
              <span className="top-key"></span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
            
            <button 
              onClick={scrollToPricing}
              className="fancy-white"
              aria-label="See website pricing packages"
            >
              <span className="text">See Website Pricing</span>
              <span className="top-key"></span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </div>

          {/* Micro trust under CTAs */}
          <div className="pt-2 text-sm text-text-tertiary text-center animate-fade-in" style={{ animationDelay: '320ms', animationFillMode: 'both' }}>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>SSL · Stripe · Basic SEO included</span>
            </span>
          </div>

          
          
          
        </div>
      </div>
      
      {/* Decorative elements with dynamic color */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] blur-3xl -z-10 transition-all duration-500 animate-breathe will-change-transform"
        style={{ backgroundColor: `${selectedColor.primary}0D`, transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] blur-3xl -z-10 transition-all duration-500 animate-breathe will-change-transform"
        style={{ backgroundColor: `${selectedColor.dark}0D`, transform: `translate(${-tilt.x}px, ${-tilt.y}px)` }}
      />
    </section>
  );
}
