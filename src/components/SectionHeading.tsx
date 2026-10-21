interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  as: HeadingTag = 'h2',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <div className="mb-4 flex justify-center" style={align === 'left' ? { justifyContent: 'flex-start' } : {}}>
          <span className="nm-chip">{eyebrow}</span>
        </div>
      )}
      <HeadingTag
        className="text-2xl font-semibold tracking-tight sm:text-3xl"
        style={{ color: 'var(--nm-text-primary)' }}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: 'var(--nm-text-secondary)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
