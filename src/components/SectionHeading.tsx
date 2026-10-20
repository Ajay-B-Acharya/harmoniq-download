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
  const alignmentClasses =
    align === 'center'
      ? 'text-center mx-auto'
      : 'text-left';

  return (
    <div className={`max-w-2xl ${alignmentClasses}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-accent-primary">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
