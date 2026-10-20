import { appConfig } from '@/data/appConfig';

/**
 * Renders the configured screenshots in a responsive grid.
 *
 * When real screenshots are added, update the `screenshots` array in
 * `src/data/appConfig.ts` — this component will pick up the new paths
 * automatically.
 */
export default function ScreenshotGallery() {
  const screenshots = appConfig.screenshots;

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {screenshots.map((screenshot, index) => (
        <figure
          key={index}
          className="surface-elevated group overflow-hidden p-2.5 transition-colors duration-200 hover:border-border-strong"
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              loading="lazy"
              className="w-full rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
