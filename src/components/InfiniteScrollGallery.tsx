import { ImageWithFallback } from './figma/ImageWithFallback';

function Card({ url, alt }: { url: string; alt: string }) {
  return (
    <div
      className="flex-shrink-0 w-[272px] h-[152px] lg:w-[400px] lg:h-[224px]
                 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden
                 transition-all duration-300 hover:scale-105 hover:shadow-elevated cursor-pointer"
      style={{ boxShadow: 'var(--shadow-soft)' }}
    >
      <ImageWithFallback
        src={url}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function InfiniteScrollGallery() {
  const topRowImages = [
    { url: 'https://lh3.googleusercontent.com/d/1JgexDtBSU_bcnzlpeJkx-ObutOGFccV2', alt: 'Modern website design' },
    { url: 'https://lh3.googleusercontent.com/d/1kpv6JTv-PtynUXE1_AbuzbFsH6NZgxik', alt: 'Mobile app interface' },
    { url: 'https://lh3.googleusercontent.com/d/1HSfU-qKFv-chH2RQK6fQ_8msBKil7yMi', alt: 'E-commerce store' },
    { url: 'https://lh3.googleusercontent.com/d/1S95CEASqXL0HGPiySZvpiPJH2Hie7tOR', alt: 'Creative website' },
    { url: 'https://lh3.googleusercontent.com/d/1HxoUd-laHA4s3SMWhDfIQ8mcAk0DN3LT', alt: 'Portfolio site' },
    { url: 'https://lh3.googleusercontent.com/d/1P4jwTLDs6QEO3ip290-kYXL1a-TCw1nq', alt: 'Restaurant website' },
  ];

  const bottomRowImages = [
    { url: 'https://lh3.googleusercontent.com/d/1Rqyh6-15TLfSL3OIUjtxrNNPkvdzY_Iu', alt: 'Creative portfolio' },
    { url: 'https://lh3.googleusercontent.com/d/111EDnZVx8rBh9N7rfxz5zRtECzpKAJWl', alt: 'Business landing page' },
    { url: 'https://lh3.googleusercontent.com/d/1-kBdwTweXolmWacRrjdCIn0utrQenM_8', alt: 'Agency showcase' },
    { url: 'https://lh3.googleusercontent.com/d/1xEhISTMdc83BtYrO3y0vtFecA52ad8vj', alt: 'Product site' },
    { url: 'https://lh3.googleusercontent.com/d/1-yKQK6KhLdkMsPNsHdlquMiFVe2Zl5hI', alt: 'Tech startup' },
    { url: 'https://lh3.googleusercontent.com/d/1ppDdKpddqfMlDDTWdnsxveNRTovFkWN9', alt: 'Fashion brand' },
  ];

  return (
    <section 
      data-section="infinite-gallery" 
      className="relative overflow-hidden py-0"
    >
      {/* TOP ROW */}
      <div className="overflow-hidden mb-4 lg:mb-6">
        <div 
          className="track track-left"
          style={{ ['--dur' as any]: '40s', ['--gap' as any]: '1.5rem' }}
        >
          <div className="group">
            {topRowImages.map((img, i) => (
              <Card key={`t1-${i}`} url={img.url} alt={img.alt} />
            ))}
          </div>
          <div className="group" aria-hidden="true">
            {topRowImages.map((img, i) => (
              <Card key={`t2-${i}`} url={img.url} alt={img.alt} />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="overflow-hidden">
        <div 
          className="track track-right"
          style={{ ['--dur' as any]: '50s', ['--gap' as any]: '1.5rem' }}
        >
          <div className="group">
            {bottomRowImages.map((img, i) => (
              <Card key={`b1-${i}`} url={img.url} alt={img.alt} />
            ))}
          </div>
          <div className="group" aria-hidden="true">
            {bottomRowImages.map((img, i) => (
              <Card key={`b2-${i}`} url={img.url} alt={img.alt} />
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .group {
          display: flex;
          gap: var(--gap);
          padding-right: var(--gap);
        }

        .track {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translateZ(0);
        }

        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .track-left {
          animation: marquee-left var(--dur, 30s) linear infinite;
        }

        .track-right {
          animation: marquee-right var(--dur, 30s) linear infinite;
        }

        .track-left:hover,
        .track-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
