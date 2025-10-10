/**
 * Premium Square Background
 * Minimal grid pattern with subtle depth
 */

interface PremiumBackgroundProps {
  intensity?: 'hero' | 'normal';
}

export function DreamBackground({ intensity = 'normal' }: PremiumBackgroundProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: intensity === 'hero' 
            ? 'linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 100%)'
            : '#FAFAF9',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E5E5 1px, transparent 1px),
            linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Hero accent */}
      {intensity === 'hero' && (
        <>
          {/* Top accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, var(--brand) 50%, transparent 100%)',
            }}
          />
          
          {/* Subtle glow */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, var(--brand) 0%, transparent 70%)',
            }}
          />
        </>
      )}
    </div>
  );
}