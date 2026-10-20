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
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent-primary">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
