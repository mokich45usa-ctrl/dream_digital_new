import { ReactNode } from "react";
import { Button } from "./button";

interface CosmicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function CosmicButton({ children, onClick, className = "" }: CosmicButtonProps) {
  return (
    <Button 
      onClick={onClick}
      className={`bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 ${className}`}
    >
      {children}
    </Button>
  );
}