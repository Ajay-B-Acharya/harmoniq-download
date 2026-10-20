import SectionHeading from '@/components/SectionHeading';
import ScreenshotGallery from '@/components/ScreenshotGallery';

export default function PreviewSection() {
  return (
    <section
      id="preview"
      className="section-py bg-bg-surface/40"
      aria-label="Application preview"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Preview"
          title="See Harmoniq in action"
          description="A look at the Harmoniq interface. These are placeholder previews — actual screenshots will be added as the application develops."
        />

        <div className="mt-12">
          <ScreenshotGallery />
        </div>
      </div>
    </section>
  );
}
