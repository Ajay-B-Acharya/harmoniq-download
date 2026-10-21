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
      role="contentinfo"
      style={{
        backgroundColor: 'var(--nm-base)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.35)',
      }}
    >
      <div className="container-px py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <div className="nm-icon-wrap h-9 w-9">
                <img
                  src="/logo.svg"
                  alt={`${appConfig.name} logo`}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                />
              </div>
              <span
                className="text-lg font-semibold tracking-tight"
                style={{ color: 'var(--nm-text-primary)' }}
              >
                {appConfig.name}
              </span>
            </div>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: 'var(--nm-text-muted)' }}
            >
              A music player designed for a more personal listening experience on Android.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--nm-text-secondary)' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--nm-text-primary)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--nm-text-secondary)')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                {appConfig.privacyPolicyUrl ? (
                  <a
                    href={appConfig.privacyPolicyUrl}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--nm-text-secondary)' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--nm-text-primary)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--nm-text-secondary)')
                    }
                  >
                    Privacy Policy
                  </a>
                ) : (
                  <span className="text-sm" style={{ color: 'var(--nm-text-muted)' }}>
                    Privacy Policy
                  </span>
                )}
              </li>
              <li>
                {appConfig.contactEmail ? (
                  <a
                    href={`mailto:${appConfig.contactEmail}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--nm-text-secondary)' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--nm-text-primary)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = 'var(--nm-text-secondary)')
                    }
                  >
                    Contact
                  </a>
                ) : (
                  <span className="text-sm" style={{ color: 'var(--nm-text-muted)' }}>
                    Contact
                  </span>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <hr className="nm-divider mt-10 mb-6" />
        <p className="text-xs" style={{ color: 'var(--nm-text-muted)' }}>
          &copy; {year} {appConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
