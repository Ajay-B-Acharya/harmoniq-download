import SectionHeading from '@/components/SectionHeading';
import ScreenshotGallery from '@/components/ScreenshotGallery';

export default function PreviewSection() {
  return (
    <section
      id="preview"
      className="section-py"
      aria-label="Application preview"
    >
      {/* Inset background band */}
      <div
        className="nm-inset mx-4 sm:mx-8 lg:mx-12 rounded-3xl px-4 py-12 sm:py-16"
        style={{ borderRadius: '2rem' }}
      >
        <div className="container-px">
          <SectionHeading
            eyebrow="Preview"
            title="See Harmoniq in action"
            description="Real screenshots from the Harmoniq Android app."
          />

          <div className="mt-12">
            <ScreenshotGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
