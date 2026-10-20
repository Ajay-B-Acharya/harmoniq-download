import SectionHeading from '@/components/SectionHeading';
import FAQItem from '@/components/FAQItem';
import { faqItems } from '@/data/faq';

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="section-py bg-bg-surface/40"
      aria-label="Frequently asked questions"
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
    </section>
  );
}
