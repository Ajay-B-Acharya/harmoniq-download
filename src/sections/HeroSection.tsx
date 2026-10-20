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
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 30% 0%, rgba(34, 211, 238, 0.06), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-px relative section-py">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              {appConfig.shortDescription}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary lg:mx-0">
              {appConfig.fullDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <DownloadButton size="lg" />

              <a
                href="#features"
                className="btn-secondary-lg"
              >
                Explore Features
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Product preview */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:ml-auto">
            <figure className="surface-elevated p-3 shadow-2xl shadow-black/40">
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
      </div>
    </section>
  );
}
