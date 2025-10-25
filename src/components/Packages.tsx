import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface PackagesProps {
  onGetQuote?: () => void;
}

interface Feature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  delivery: string;
  isPopular?: boolean;
  onGetStarted?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  delivery,
  isPopular = false,
  onGetStarted,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: isPopular ? -6 : -3, scale: isPopular ? 1.01 : 1.005 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative h-full"
    >
      {isPopular && (
        <div className="absolute -top-3 left-8">
          <div className="px-4 py-1.5 bg-accent-dark text-white font-mono text-xs tracking-wider uppercase">
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`h-full border-2 p-8 transition-all duration-200 ${
          isPopular 
            ? 'bg-accent-dark text-white border-accent-dark shadow-elevated' 
            : 'bg-elevated border-border hover:border-accent-dark hover:shadow-elevated'
        }`}
      >
        {isPopular && (
          <div
            className="pointer-events-none absolute -inset-2 -z-10 rounded-soft opacity-60 blur-[8px]"
            style={{
              background: 'radial-gradient(60% 60% at 50% 0%, var(--brand) 0%, transparent 70%)'
            }}
          />
        )}
        {/* Header */}
        <div className={`mb-8 pb-8 border-b-2 ${isPopular ? 'border-white/20' : 'border-border'}`}>
          <h3 className={`text-2xl font-bold mb-3 ${isPopular ? 'text-white' : 'text-text-primary'}`}>
            {title}
          </h3>
          
          <div className="mb-4">
            <span className="relative inline-block">
              <span className={`font-mono text-5xl font-black ${isPopular ? 'text-white' : 'text-text-primary'}`}>
                {price}
              </span>
              <span className={`absolute left-0 right-0 -bottom-1 h-2 ${isPopular ? 'bg-brand/20 animate-breathe' : 'bg-brand/10'}`} />
            </span>
          </div>

          <p className={`${isPopular ? 'text-white/85' : 'text-text-secondary'} leading-relaxed`}>
            {description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1 w-5 h-5 bg-success flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className={`${isPopular ? 'text-white/80' : 'text-text-secondary'} leading-relaxed`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Delivery */}
        <div className={`mb-6 p-4 border ${isPopular ? 'bg-white/5 border-white/20' : 'bg-surface border-border'}`}>
          <p className={`text-sm ${isPopular ? 'text-white/70' : 'text-text-secondary'}`}>
            <span className={`font-mono font-semibold ${isPopular ? 'text-white' : 'text-text-primary'}`}>⚡ {delivery}</span>
          </p>
        </div>

        {/* CTA */}
        {isPopular ? (
          <button
            type="button"
            onClick={onGetStarted}
            className={`w-full fancy-black-invert focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20`}
          >
            <span className="text">Get Quote</span>
            <span className="top-key"></span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onGetStarted}
            className={`w-full fancy-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20`}
          >
            <span className="text">Get Quote</span>
            <span className="top-key"></span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export function Packages({ onGetQuote }: PackagesProps) {
  const packages = [
    {
      title: 'Starter Website',
      price: '$300',
      description: 'For new businesses getting online.',
      delivery: '24 hours',
      features: [
        { text: 'One-page website: Home, About, Services, Contact' },
        { text: 'Custom layout designed for your brand' },
        { text: 'Responsive design (desktop + mobile)' },
        { text: 'Basic SEO setup for Google visibility' },
        { text: 'Contact form + call-to-action' },
      ],
    },
    {
      title: 'Smart Website',
      price: '$600',
      description: 'For growing businesses ready to attract more clients.',
      delivery: '3-5 days',
      isPopular: true,
      features: [
        { text: 'Everything in the Starter Website' },
        { text: 'Advanced SEO optimization for better Google ranking' },
        { text: 'Google Business Profile setup (Google Maps)' },
        { text: 'Integrated Google Analytics and performance tracking' },
        { text: 'Conversion-optimized layout' },
        { text: 'Up to 10 design variations' },
      ],
    },
    {
      title: 'Multi-Page Website',
      price: '$1200',
      description: 'A full website with all key sections your business needs.',
      delivery: '8-10 days',
      features: [
        { text: 'Up to 5 pages: Home, About, Services, Work, Contact' },
        { text: 'SEO-ready and responsive design' },
        { text: 'Integrated contact forms and analytics' },
        { text: 'Navigation menu and footer' },
        { text: '10 unique layout options to choose from' },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-bg cv-auto cis-1000">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: packages.map((p, i) => ({
              "@type": "Product",
              name: p.title,
              description: p.description,
              offers: {
                "@type": "Offer",
                price: p.price.replace(/[^0-9.]/g, ''),
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock'
              },
            }))
          })}
        </script>
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
              Pricing
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Simple, transparent pricing
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Choose the package that fits your needs. All prices are fixed — no hidden costs. Want to see results first? Browse our <a href="#work" className="underline">portfolio</a>.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              delivery={pkg.delivery}
              isPopular={pkg.isPopular}
              onGetStarted={onGetQuote}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6">
            Need a custom solution?{' '}
            <button 
              onClick={onGetQuote}
              className="font-semibold text-text-primary underline hover:no-underline"
            >
              Let's talk
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}