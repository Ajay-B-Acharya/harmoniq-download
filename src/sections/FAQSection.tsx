import SectionHeading from '@/components/SectionHeading';
import FAQItem from '@/components/FAQItem';
import { faqItems } from '@/data/faq';

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="section-py"
      aria-label="Frequently asked questions"
    >
      {/* Inset background band */}
      <div
        className="nm-inset mx-4 sm:mx-8 lg:mx-12 px-4 py-12 sm:py-16"
        style={{ borderRadius: '2rem' }}
      >
        <div className="container-px">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Find answers to common questions about Harmoniq."
          />

          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={item.id} item={item} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
