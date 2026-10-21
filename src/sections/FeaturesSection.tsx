import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import { features } from '@/data/features';

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-py"
      aria-label="Features"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need for your music"
          description="Explore the core capabilities of Harmoniq, designed to give you a more personal and intuitive listening experience."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
