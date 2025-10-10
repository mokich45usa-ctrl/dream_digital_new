import { useState } from 'react';
import { Hero } from './components/Hero';
import { Header } from './components/Header';

export default function TestPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Hero onGetOffer={openDrawer} />
        <div className="p-8 text-center">
          <h2 className="heading-section">Test Section</h2>
          <p className="text-muted-foreground">This is a test to see if components are working</p>
        </div>
      </div>
    </div>
  );
}