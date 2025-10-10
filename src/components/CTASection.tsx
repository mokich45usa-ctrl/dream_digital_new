import { GradientBorderButton } from "./ui/gradient-border-button";

interface CTASectionProps {
  onGetOffer: () => void;
}

export function CTASection({ onGetOffer }: CTASectionProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <GradientBorderButton onClick={onGetOffer}>
          Get your offer now
        </GradientBorderButton>
      </div>
    </div>
  );
}