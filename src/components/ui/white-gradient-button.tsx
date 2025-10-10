import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface WhiteGradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function WhiteGradientButton({ 
  children, 
  onClick, 
  className = "" 
}: WhiteGradientButtonProps) {
  return (
    <div className={`relative group ${className}`}>
      <button
        onClick={onClick}
        className="relative inline-block p-px leading-6 text-gray-800 bg-white shadow-md cursor-pointer rounded-md shadow-zinc-400/30 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-teal-500/20"
      >
        {/* Subtle gradient border in normal state */}
        <span className="absolute inset-0 rounded-md bg-gradient-to-r from-teal-400/10 via-blue-500/10 to-purple-500/10 p-[1px] opacity-30 transition-all duration-500 group-hover:opacity-0"></span>
        
        {/* Bright gradient border that appears on hover */}
        <span className="absolute inset-0 rounded-md bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>

        {/* Button content */}
        <span className="relative z-10 block px-8 py-3 rounded-md bg-white transition-all duration-500 group-hover:bg-gray-50">
          <div className="relative z-10 flex items-center justify-center space-x-2">
            <span className="transition-all duration-500 group-hover:translate-x-1 text-sm font-medium group-hover:text-gray-900">
              {children}
            </span>
            <ChevronRight 
              className="w-4 h-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-teal-500" 
            />
          </div>
        </span>
      </button>
    </div>
  );
}