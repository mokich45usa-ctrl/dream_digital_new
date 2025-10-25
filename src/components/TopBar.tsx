import { Button } from './ui/button';

interface TopBarProps {
  onGetOffer: () => void;
}

export function TopBar({ onGetOffer }: TopBarProps) {
  return (
    <div className="TopBar/Container sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo (avoid extra h1 for SEO) */}
          <div className="TopBar/Logo" aria-label="Dream Digital">
            <span className="text-xl font-medium text-gray-900">DREAM DIGITAL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="TopBar/Nav hidden lg:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-gray-900">About</button>
            <button className="text-gray-600 hover:text-gray-900">Services</button>
            <button className="text-gray-600 hover:text-gray-900">Cases</button>
            <button className="text-gray-600 hover:text-gray-900">Contact</button>
            <Button 
              onClick={onGetOffer}
              className="bg-gray-900 text-white hover:bg-gray-800 px-6"
            >
              Get Your Offer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              onClick={onGetOffer}
              className="bg-gray-900 text-white hover:bg-gray-800 px-4"
            >
              Get Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}