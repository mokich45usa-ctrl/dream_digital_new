import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Suspense, lazy } from 'react';
const InfiniteScrollGallery = lazy(() => import('./components/InfiniteScrollGallery').then(m => ({ default: m.InfiniteScrollGallery })));
// import { TrustStrip } from './components/TrustStrip';
// import { PortfolioShowcase } from './components/PortfolioShowcase';
// import { OurWorksWithSteps } from './components/OurWorks';
// import { OurPromise } from './components/OurPromise';
const TrustAndSecurity = lazy(() => import('./components/TrustAndSecurity').then(m => ({ default: m.TrustAndSecurity })));
const Stats = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const ProfessionalWebsites = lazy(() => import('./components/ProfessionalWebsites').then(m => ({ default: m.ProfessionalWebsites })));
const SimpleProcess = lazy(() => import('./components/SimpleProcess').then(m => ({ default: m.SimpleProcess })));
const BigReveal = lazy(() => import('./components/BigReveal').then(m => ({ default: m.BigReveal })));
// import { HowItWorks } from './components/HowItWorks';
// import { PaymentProcess } from './components/PaymentProcess';
const FeaturedWork = lazy(() => import('./components/FeaturedWork').then(m => ({ default: m.FeaturedWork })));
const AIAssistantDemo = lazy(() => import('./components/AIAssistantDemo').then(m => ({ default: m.AIAssistantDemo })));
const Packages = lazy(() => import('./components/Packages').then(m => ({ default: m.Packages })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
import { AIDrawer } from './components/AIDrawer';
import { Header } from './components/Header';
import { DreamBackground } from './components/DreamBackground';
import { FloatingChatButton } from './components/FloatingChatButton';
import { Toaster } from './components/ui/sonner';
import { LeadModal } from './components/LeadModal';

interface AccentColor {
  name: string;
  primary: string;
  dark: string;
  light: string;
}

export default function App() {
  // Removed loading screen
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  // Accent colors for user customization
  const accentColors: AccentColor[] = [
    { name: 'Indigo', primary: '#6366F1', dark: '#4F46E5', light: '#818CF8' },
    { name: 'Purple', primary: '#A855F7', dark: '#9333EA', light: '#C084FC' },
    { name: 'Pink', primary: '#EC4899', dark: '#DB2777', light: '#F472B6' },
    { name: 'Rose', primary: '#F43F5E', dark: '#E11D48', light: '#FB7185' },
    { name: 'Orange', primary: '#F97316', dark: '#EA580C', light: '#FB923C' },
    { name: 'Emerald', primary: '#10B981', dark: '#059669', light: '#34D399' },
    { name: 'Cyan', primary: '#06B6D4', dark: '#0891B2', light: '#22D3EE' },
    { name: 'Blue', primary: '#3B82F6', dark: '#2563EB', light: '#60A5FA' },
  ];

  const [selectedColor, setSelectedColor] = useState<AccentColor>(accentColors[0]);

  // Force light theme on app load
  useEffect(() => {
    // Remove dark class from html and body elements
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    
    // Ensure light theme is applied
    document.documentElement.classList.add('light');
    
    // Set color scheme via CSS property
    document.documentElement.style.colorScheme = 'light';
    document.body.style.colorScheme = 'light';
  }, []);

  // Apply selected color globally
  useEffect(() => {
    document.documentElement.style.setProperty('--brand', selectedColor.primary);
    document.documentElement.style.setProperty('--brand-dark', selectedColor.dark);
    document.documentElement.style.setProperty('--brand-light', selectedColor.light);
  }, [selectedColor]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const openLead = () => setIsLeadOpen(true);

  return (
    <>
      {/* Main App */}
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Navigation Header - Always on top */}
      <Header onGetStarted={openLead} />

      {/* Dream background - Hero intensity */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <DreamBackground intensity="hero" />
      </div>

      {/* Background overlay when drawer is open */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/15 z-50 cursor-pointer"
          onClick={closeDrawer}
        />
      )}

      {/* Main content */}
      <div className={`min-h-screen transition-all duration-300 pb-20 sm:pb-0 relative`}>
        <div data-section="hero" className="relative z-10">
          <Hero 
            onGetStarted={openLead}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            accentColors={accentColors}
          />
        </div>

        {/* Infinite Scroll Gallery - Pure visual, no background */}
        <div data-section="infinite-gallery" className="relative py-8 lg:py-12 bg-white">
          <Suspense fallback={null}><InfiniteScrollGallery /></Suspense>
        </div>

        {/* Simple Process - White background */}
        <div data-section="simple-process" className="relative bg-white">
          <Suspense fallback={null}><SimpleProcess /></Suspense>
        </div>
        
        {/* Normal intensity background for other sections */}
        <div className="relative">
          <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <DreamBackground intensity="normal" />
          </div>
          
          <div className="relative z-10">
            {/* <div data-section="trust">
              <TrustStrip />
            </div> */}
            {/* <div data-section="portfolio">
              <PortfolioShowcase onViewProject={openDrawer} />
            </div> */}
            {/* <div data-section="our-works">
              <OurWorksWithSteps onSeeMore={openDrawer} />
            </div> */}
            {/* <div data-section="promise">
              <OurPromise onStartWithDreamy={openDrawer} />
            </div> */}
            <div data-section="trust-security">
            <Suspense fallback={null}><TrustAndSecurity onGetStarted={openLead} /></Suspense>
            </div>
            <div data-section="stats">
              <Suspense fallback={null}><Stats /></Suspense>
            </div>
            {/* <div data-section="how-it-works">
              <HowItWorks />
            </div> */}
            {/* <div data-section="payment-process">
              <PaymentProcess onGetQuote={openDrawer} onSeePricing={openDrawer} />
            </div> */}
            {/* Professional Websites - Before pricing */}
            <div data-section="professional-websites">
              <Suspense fallback={null}><ProfessionalWebsites /></Suspense>
            </div>
            {/* Big Reveal - Dramatic conversion block */}
            <div data-section="big-reveal">
              <Suspense fallback={null}><BigReveal onGetStarted={openLead} /></Suspense>
            </div>
            <div data-section="packages">
              <Suspense fallback={null}><Packages onGetQuote={openLead} /></Suspense>
            </div>
            <div data-section="work">
              <Suspense fallback={null}><FeaturedWork /></Suspense>
            </div>
            <div data-section="testimonials">
              <Suspense fallback={null}><Testimonials /></Suspense>
            </div>
            <div data-section="faq">
              <Suspense fallback={null}><FAQ onGetStarted={openLead} /></Suspense>
            </div>
            <div data-section="ai-demo">
              <Suspense fallback={null}><AIAssistantDemo onGetStarted={openLead} /></Suspense>
            </div>
            <div data-section="footer">
              <Suspense fallback={null}><Footer onGetStarted={openDrawer} /></Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Drawer */}
      <AIDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      {/* Lead Modal */}
      <LeadModal open={isLeadOpen} onOpenChange={setIsLeadOpen} />
      
      {/* Floating Chat Button */}
      <FloatingChatButton onClick={openDrawer} isDrawerOpen={isDrawerOpen} ready={true} />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
    </>
  );
}