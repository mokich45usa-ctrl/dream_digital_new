import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

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

const PricingCard = ({
  title,
  price,
  description,
  features,
  delivery,
  isPopular = false,
  onGetStarted,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        className={`h-full bg-elevated border-2 p-8 transition-all duration-200 ${
          isPopular 
            ? 'border-accent-dark' 
            : 'border-border hover:border-accent-dark'
        }`}
      >
        {/* Header */}
        <div className="mb-8 pb-8 border-b-2 border-border">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            {title}
          </h3>
          
          <div className="mb-4">
            <span className="font-mono text-5xl font-black text-text-primary">
              {price}
            </span>
          </div>

          <p className="text-text-secondary leading-relaxed">
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
              <span className="text-text-secondary leading-relaxed">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Delivery */}
        <div className="mb-6 p-4 bg-surface border border-border">
          <p className="text-sm text-text-secondary">
            <span className="font-mono font-semibold text-text-primary">⚡ {delivery}</span>
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onGetStarted}
          className={`w-full ${isPopular ? 'fancy-black' : 'fancy-white'}`}
        >
          <span className="text">Get Quote</span>
          <span className="top-key"></span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </div>
    </motion.div>
  );
};

export function Packages({ onGetQuote }: PackagesProps) {
  const packages = [
    {
      title: 'Business Card Website',
      price: '$250',
      description: 'A simple, fast way to get your business online.',
      delivery: '24 hours',
      features: [
        { text: '1 page: Home, About, Services, Contact' },
        { text: 'Custom design tailored to your business' },
        { text: 'Responsive layout (desktop + mobile)' },
        { text: 'Basic SEO setup' },
        { text: 'Contact form + call-to-action' },
        { text: 'Up to 5 design options' },
      ],
    },
    {
      title: 'Landing Page',
      price: '$600',
      description: 'A one-page site designed to convert visitors into clients.',
      delivery: '3-5 days',
      isPopular: true,
      features: [
        { text: 'Custom structure built around your goal' },
        { text: 'Conversion-optimized layout' },
        { text: 'Lead capture form + analytics' },
        { text: 'SEO-ready and mobile responsive' },
        { text: 'Up to 10 design variations' },
      ],
    },
    {
      title: 'Multi-Page Website',
      price: '$1200',
      description: 'A full website with all key sections your business needs.',
      delivery: '7-10 days',
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
    <section className="py-20 lg:py-32 bg-bg">
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
              Pricing
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Simple, transparent pricing
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Choose the package that fits your needs. All prices are fixed — no hidden costs.
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