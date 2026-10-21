import { appConfig } from '@/data/appConfig';

/**
 * Renders the configured screenshots in a responsive neumorphic grid.
 * Update the `screenshots` array in `src/data/appConfig.ts` to swap images.
 */
export default function ScreenshotGallery() {
  const screenshots = appConfig.screenshots;

  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-5">
      {screenshots.map((screenshot, index) => (
        <figure
          key={index}
          className="nm-card group overflow-hidden transition-all duration-300"
          style={{ borderRadius: '1.25rem', padding: '0.6rem' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              '10px 10px 22px rgba(0,0,0,0.6), -6px -6px 14px rgba(255,255,255,0.065)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--nm-card)';
          }}
        >
          {/* Inner inset bezel for the image */}
          <div className="nm-inset overflow-hidden" style={{ borderRadius: '0.75rem' }}>
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              loading="lazy"
              className="w-full transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
