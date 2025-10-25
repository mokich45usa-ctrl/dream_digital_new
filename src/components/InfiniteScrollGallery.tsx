import { ImageWithFallback } from './figma/ImageWithFallback';
import img01 from '../../my materials/Our Work/Screenshot_2025-10-07_at_11.03.47_AM.webp';
import img02 from '../../my materials/Our Work/Screenshot_2025-10-07_at_11.08.28_AM.webp';
import img03 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.29.24_PM.webp';
import img04 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.34.11_PM.webp';
import img05 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.36.37_PM.webp';
import img06 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.54.23_PM.webp';
import img07 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.55.37_PM.webp';
import img08 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.56.46_PM.webp';
import img09 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.58.54_PM.webp';
import img10 from '../../my materials/Our Work/Screenshot_2025-10-08_at_4.59.44_PM.webp';
import img11 from '../../my materials/Our Work/Screenshot_2025-10-08_at_5.15.28_PM.webp';
import img12 from '../../my materials/Our Work/Screenshot_2025-10-08_at_8.58.57_AM.webp';

function Card({ url, alt }: { url: string; alt: string }) {
  return (
    <div
      className="flex-shrink-0 w-[272px] h-[152px] lg:w-[400px] lg:h-[224px]
                 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden
                 transition-all duration-300 hover:scale-105 hover:shadow-elevated cursor-pointer"
      style={{ boxShadow: 'var(--shadow-soft)', aspectRatio: '16 / 9' } as any}
    >
      <ImageWithFallback
        src={url}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        sizes="(max-width: 640px) 272px, (max-width: 1024px) 400px, 560px"
      />
    </div>
  );
}

export function InfiniteScrollGallery() {
  const topRowImages = [
    { url: img01, alt: 'Our work 1' },
    { url: img02, alt: 'Our work 2' },
    { url: img03, alt: 'Our work 3' },
    { url: img04, alt: 'Our work 4' },
    { url: img05, alt: 'Our work 5' },
    { url: img06, alt: 'Our work 6' },
  ];

  const bottomRowImages = [
    { url: img07, alt: 'Our work 7' },
    { url: img08, alt: 'Our work 8' },
    { url: img09, alt: 'Our work 9' },
    { url: img10, alt: 'Our work 10' },
    { url: img11, alt: 'Our work 11' },
    { url: img12, alt: 'Our work 12' },
  ];

  return (
    <section 
      data-section="infinite-gallery" 
      className="relative overflow-hidden py-0"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' } as any}
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
