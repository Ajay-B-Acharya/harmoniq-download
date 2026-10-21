import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem as FAQItemType } from '@/data/faq';

interface FAQItemProps {
  item: FAQItemType;
  defaultOpen?: boolean;
}

export default function FAQItem({ item, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const headingId = useId();
  const panelId = useId();

  return (
    <div
      className="nm-card overflow-hidden transition-all duration-300"
      style={{
        boxShadow: isOpen
          ? '10px 10px 22px rgba(0,0,0,0.6), -6px -6px 14px rgba(255,255,255,0.065)'
          : 'var(--nm-card)',
      }}
    >
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
          style={{ color: 'var(--nm-text-primary)' }}
        >
          <span className="text-[0.95rem] font-medium">{item.question}</span>
          <ChevronDown
            size={18}
            className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            style={{ color: 'var(--nm-accent)' }}
            aria-hidden="true"
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
      >
        {/* Inset answer panel */}
        <div
          className="nm-inset mx-4 mb-4 px-5 py-4"
          style={{ borderRadius: '0.75rem' }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--nm-text-secondary)' }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
