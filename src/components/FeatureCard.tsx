import type { Feature } from '@/data/features';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="surface-card group p-6 transition-colors hover:border-border-accent">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-accent-primary/5 text-accent-primary transition-colors group-hover:bg-accent-primary/10">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-medium text-text-primary">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {feature.description}
      </p>
    </article>
  );
}
