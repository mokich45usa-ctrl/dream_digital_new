import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { Sparkles, Palette } from 'lucide-react';

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
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-24 lg:py-32 relative z-10">
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-text-primary max-w-4xl mx-auto">
            Get a professional website from{' '}
            <span className="relative inline-block">
              <span className="relative z-10">$250</span>
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-brand/20" />
            </span>
            {' '}and jumpstart your business.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Fast. Affordable. Built by professionals.
            <br />No hassle, just results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              onClick={onGetStarted}
              className="fancy-black"
            >
              <span className="text">Get Started</span>
              <span className="top-key"></span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
            
            <button 
              onClick={scrollToPricing}
              className="fancy-white"
            >
              <span className="text">See Pricing</span>
              <span className="top-key"></span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-text-tertiary">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>2-minute setup</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>24h delivery</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Professional quality</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements with dynamic color */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] blur-3xl -z-10 transition-all duration-500"
        style={{ backgroundColor: `${selectedColor.primary}0D` }} // 0D = 5% opacity in hex
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] blur-3xl -z-10 transition-all duration-500"
        style={{ backgroundColor: `${selectedColor.dark}0D` }}
      />
    </section>
  );
}
