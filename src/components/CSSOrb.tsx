import { useState, useEffect } from 'react';

interface CSSOrbProps {
  hue?: number;
  size?: string;
  intensity?: number;
  animate?: boolean;
}

export default function CSSOrb({
  hue = 240,
  size = "w-96 h-96",
  intensity = 0.7,
  animate = true
}: CSSOrbProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative ${size} pointer-events-auto`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Orb */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-1000 ${
          animate ? 'animate-pulse' : ''
        } ${isHovered ? 'scale-110' : 'scale-100'}`}
        style={{
          background: `
            radial-gradient(circle at 30% 30%, 
              hsla(${hue}, 80%, 70%, ${intensity}) 0%,
              hsla(${hue + 30}, 70%, 60%, ${intensity * 0.8}) 30%,
              hsla(${hue + 60}, 60%, 50%, ${intensity * 0.6}) 60%,
              hsla(${hue}, 40%, 30%, ${intensity * 0.3}) 80%,
              transparent 100%
            )
          `,
          filter: `blur(2px) ${isHovered ? 'brightness(1.2)' : 'brightness(1)'}`,
          transform: `rotate(${isHovered ? '10deg' : '0deg'})`,
        }}
      />
      
      {/* Inner Glow */}
      <div 
        className={`absolute inset-4 rounded-full transition-all duration-700 ${
          animate ? 'animate-ping' : ''
        }`}
        style={{
          background: `
            radial-gradient(circle at 40% 40%, 
              hsla(${hue + 20}, 90%, 80%, ${intensity * 0.9}) 0%,
              hsla(${hue + 40}, 80%, 70%, ${intensity * 0.7}) 40%,
              transparent 70%
            )
          `,
          filter: 'blur(1px)',
          animationDelay: '0.5s',
          animationDuration: '3s'
        }}
      />
      
      {/* Core */}
      <div 
        className={`absolute inset-8 rounded-full transition-all duration-500 ${
          isHovered ? 'scale-125' : 'scale-100'
        }`}
        style={{
          background: `
            radial-gradient(circle at 50% 30%, 
              hsla(${hue + 40}, 95%, 85%, ${intensity}) 0%,
              hsla(${hue + 20}, 85%, 75%, ${intensity * 0.8}) 50%,
              hsla(${hue}, 70%, 60%, ${intensity * 0.5}) 100%
            )
          `,
          filter: 'blur(0.5px)',
          boxShadow: `
            0 0 20px hsla(${hue}, 70%, 60%, ${intensity * 0.5}),
            0 0 40px hsla(${hue + 20}, 80%, 70%, ${intensity * 0.3}),
            inset 0 0 20px hsla(${hue + 40}, 90%, 80%, ${intensity * 0.4})
          `
        }}
      />
      
      {/* Floating Particles */}
      {animate && (
        <>
          <div 
            className="absolute w-2 h-2 rounded-full animate-bounce"
            style={{
              background: `hsla(${hue + 60}, 90%, 80%, 0.8)`,
              top: '20%',
              left: '15%',
              animationDelay: '0s',
              animationDuration: '2s'
            }}
          />
          <div 
            className="absolute w-1 h-1 rounded-full animate-bounce"
            style={{
              background: `hsla(${hue + 80}, 85%, 75%, 0.7)`,
              top: '70%',
              right: '20%',
              animationDelay: '0.7s',
              animationDuration: '2.5s'
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 rounded-full animate-bounce"
            style={{
              background: `hsla(${hue + 100}, 80%, 70%, 0.6)`,
              bottom: '60%',
              left: '70%',
              animationDelay: '1.2s',
              animationDuration: '3s'
            }}
          />
        </>
      )}
      
      {/* Outer Ring Effect */}
      <div 
        className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${
          isHovered ? 'scale-125 opacity-100' : 'scale-100 opacity-50'
        }`}
        style={{
          borderColor: `hsla(${hue + 20}, 60%, 50%, 0.3)`,
          filter: 'blur(1px)'
        }}
      />
    </div>
  );
}