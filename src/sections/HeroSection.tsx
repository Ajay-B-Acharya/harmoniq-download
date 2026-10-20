import { ArrowRight } from 'lucide-react';
import { appConfig } from '@/data/appConfig';
import DownloadButton from '@/components/DownloadButton';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle ambient accent — no heavy gradients */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34, 211, 238, 0.08), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-px relative section-py">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {appConfig.shortDescription}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {appConfig.fullDescription}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DownloadButton size="lg" />

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Explore Features
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Product preview — single screenshot placeholder */}
        <div className="mx-auto mt-16 max-w-sm sm:max-w-md">
          <figure className="surface-elevated p-3">
            <img
              src={appConfig.screenshots[0]?.src}
              alt={appConfig.screenshots[0]?.alt}
              className="w-full rounded-xl"
              loading="eager"
            />
          </figure>
          <figcaption className="mt-3 text-center text-xs text-text-muted">
            Product preview — placeholder screenshot
          </figcaption>
        </div>
      </div>
    </section>
  );
}
