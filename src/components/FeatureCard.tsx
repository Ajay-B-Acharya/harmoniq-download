import type { Feature } from '@/data/features';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="surface-card group flex h-full flex-col p-6 transition-colors duration-200 hover:border-border-strong">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-subtle bg-accent-primary/5 text-accent-primary">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-base font-medium text-text-primary">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {feature.description}
      </p>
    </article>
  );
}
