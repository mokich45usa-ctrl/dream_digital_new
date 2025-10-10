import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { InfiniteScrollGallery } from './components/InfiniteScrollGallery';
// import { TrustStrip } from './components/TrustStrip';
// import { PortfolioShowcase } from './components/PortfolioShowcase';
// import { OurWorksWithSteps } from './components/OurWorks';
// import { OurPromise } from './components/OurPromise';
import { TrustAndSecurity } from './components/TrustAndSecurity';
import { Stats } from './components/Stats';
import { ProfessionalWebsites } from './components/ProfessionalWebsites';
import { SimpleProcess } from './components/SimpleProcess';
import { BigReveal } from './components/BigReveal';
// import { HowItWorks } from './components/HowItWorks';
// import { PaymentProcess } from './components/PaymentProcess';
import { FeaturedWork } from './components/FeaturedWork';
import { AIAssistantDemo } from './components/AIAssistantDemo';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AIDrawer } from './components/AIDrawer';
import { Header } from './components/Header';
import { DreamBackground } from './components/DreamBackground';
import { FloatingChatButton } from './components/FloatingChatButton';
import { LoadingScreen } from './components/LoadingScreen';
import { Toaster } from './components/ui/sonner';

interface AccentColor {
  name: string;
  primary: string;
  dark: string;
  light: string;
}

export default function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
  const handleEnter = () => setShowLoadingScreen(false);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {showLoadingScreen && (
          <LoadingScreen onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {/* Main App */}
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Navigation Header - Always on top */}
      <Header onGetStarted={openDrawer} />

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
      <div className={`min-h-screen transition-all duration-300 pb-20 sm:pb-0 relative ${isDrawerOpen ? 'lg:mr-[450px]' : ''}`}>
        <div data-section="hero" className="relative z-10">
          <Hero 
            onGetStarted={openDrawer}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            accentColors={accentColors}
          />
        </div>

        {/* Infinite Scroll Gallery - Pure visual, no background */}
        <div data-section="infinite-gallery" className="relative py-8 lg:py-12 bg-white">
          <InfiniteScrollGallery />
        </div>

        {/* Simple Process - White background */}
        <div data-section="simple-process" className="relative bg-white">
          <SimpleProcess />
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
              <OurPromise onStartWithDremy={openDrawer} />
            </div> */}
            <div data-section="trust-security">
              <TrustAndSecurity onGetStarted={openDrawer} />
            </div>
            <div data-section="stats">
              <Stats />
            </div>
            {/* <div data-section="how-it-works">
              <HowItWorks />
            </div> */}
            {/* <div data-section="payment-process">
              <PaymentProcess onGetQuote={openDrawer} onSeePricing={openDrawer} />
            </div> */}
            {/* Professional Websites - Before pricing */}
            <div data-section="professional-websites">
              <ProfessionalWebsites />
            </div>
            {/* Big Reveal - Dramatic conversion block */}
            <div data-section="big-reveal">
              <BigReveal onGetStarted={openDrawer} />
            </div>
            <div data-section="packages">
              <Packages onGetQuote={openDrawer} />
            </div>
            <div data-section="work">
              <FeaturedWork />
            </div>
            <div data-section="testimonials">
              <Testimonials />
            </div>
            <div data-section="faq">
              <FAQ onGetStarted={openDrawer} />
            </div>
            <div data-section="ai-demo">
              <AIAssistantDemo onGetStarted={openDrawer} />
            </div>
            <div data-section="footer">
              <Footer onGetStarted={openDrawer} />
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Drawer */}
      <AIDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      
      {/* Floating Chat Button */}
      <FloatingChatButton onClick={openDrawer} isDrawerOpen={isDrawerOpen} />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
    </>
  );
}