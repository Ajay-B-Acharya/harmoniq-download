import { useState, useRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem as FAQItemType } from '@/data/faq';

interface FAQItemProps {
  item: FAQItemType;
  /** Whether this item is initially expanded. */
  defaultOpen?: boolean;
}

export default function FAQItem({
  item,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const panelId = useId();

  return (
    <div className="surface-card overflow-hidden">
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-text-primary transition-colors hover:bg-bg-elevated"
        >
          <span className="text-base font-medium">{item.question}</span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-text-secondary transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>

      <div
        id={panelId}
        ref={contentRef}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
      >
        <div className="border-t border-border-subtle px-5 py-4">
          <p className="text-sm leading-relaxed text-text-secondary">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
