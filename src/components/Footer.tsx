import { appConfig } from '@/data/appConfig';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Preview', href: '#preview' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Download', href: '#download' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border-subtle bg-bg-base"
      role="contentinfo"
    >
      <div className="container-px py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.svg"
                alt={`${appConfig.name} logo`}
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-lg font-semibold tracking-tight text-text-primary">
                {appConfig.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              A music player designed for a more personal listening experience
              on Android.
            </p>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                {appConfig.privacyPolicyUrl ? (
                  <a
                    href={appConfig.privacyPolicyUrl}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    Privacy Policy
                  </a>
                ) : (
                  <span className="text-sm text-text-muted">
                    Privacy Policy
                  </span>
                )}
              </li>
              <li>
                {appConfig.contactEmail ? (
                  <a
                    href={`mailto:${appConfig.contactEmail}`}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    Contact
                  </a>
                ) : (
                  <span className="text-sm text-text-muted">Contact</span>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border-subtle pt-6">
          <p className="text-xs text-text-muted">
            &copy; {year} {appConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
