import type { Feature } from '@/data/features';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article
      className="nm-card group flex h-full flex-col p-6 transition-all duration-300"
      style={{ borderRadius: '1.25rem' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          '10px 10px 22px rgba(0,0,0,0.6), -6px -6px 14px rgba(255,255,255,0.065)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--nm-card)';
      }}
    >
      {/* Neumorphic icon container */}
      <div
        className="nm-icon-wrap h-12 w-12 shrink-0"
        style={{ color: 'var(--nm-accent)' }}
      >
        <Icon size={22} aria-hidden="true" />
      </div>

      <h3
        className="mt-5 text-base font-semibold"
        style={{ color: 'var(--nm-text-primary)' }}
      >
        {feature.title}
      </h3>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: 'var(--nm-text-secondary)' }}
      >
        {feature.description}
      </p>
    </article>
  );
}
