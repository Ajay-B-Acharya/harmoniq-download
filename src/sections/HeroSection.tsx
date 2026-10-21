import { ArrowRight } from 'lucide-react';
import { appConfig } from '@/data/appConfig';
import DownloadButton from '@/components/DownloadButton';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden section-py"
      aria-label="Introduction"
    >
      {/* Subtle ambient accent blob */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--nm-accent) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow chip */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="nm-chip">Android Music Player</span>
            </div>

            <h1
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: 'var(--nm-text-primary)' }}
            >
              {appConfig.shortDescription}
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed lg:mx-0"
              style={{ color: 'var(--nm-text-secondary)' }}
            >
              {appConfig.fullDescription}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <DownloadButton size="lg" />
              <a href="#features" className="nm-btn-ghost-lg">
                Explore Features
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: App screenshot in neumorphic phone frame */}
          <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[290px] lg:mx-0 lg:ml-auto">
            {/* Outer raised frame */}
            <div
              className="nm-card p-3"
              style={{ borderRadius: '2rem' }}
            >
              {/* Inner inset bezel */}
              <div
                className="nm-inset overflow-hidden"
                style={{ borderRadius: '1.5rem' }}
              >
                <img
                  src={appConfig.screenshots[0]?.src}
                  alt={appConfig.screenshots[0]?.alt ?? 'Harmoniq app screenshot'}
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>
            {/* Decorative accent ring */}
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, var(--nm-accent) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
