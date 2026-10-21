import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { appConfig } from '@/data/appConfig';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Preview', href: '#preview' },
  { label: 'FAQ', href: '#faq' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--nm-base)',
        boxShadow: '0 4px 14px rgba(0,0,0,0.45), 0 -1px 0 rgba(255,255,255,0.04) inset',
      }}
      role="banner"
    >
      <nav
        className="container-px flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          style={{ color: 'var(--nm-text-primary)' }}
          aria-label={`${appConfig.name} home`}
        >
          <div
            className="nm-icon-wrap h-9 w-9"
          >
            <img
              src="/logo.svg"
              alt={`${appConfig.name} logo`}
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
          </div>
          <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--nm-text-primary)' }}>
            {appConfig.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nm-nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop download CTA */}
        <div className="hidden md:block">
          <a href="#download" className="nm-btn-primary" aria-label="Download Harmoniq">
            <Download size={15} aria-hidden="true" />
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center p-2 transition-colors md:hidden"
          style={{ color: 'var(--nm-text-primary)' }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden"
          style={{
            backgroundColor: 'var(--nm-base)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
          }}
        >
          <ul className="container-px flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-xl px-4 py-3 text-sm transition-all"
                  style={{ color: 'var(--nm-text-secondary)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--nm-text-primary)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--nm-inset)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--nm-text-secondary)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#download"
                onClick={handleNavClick}
                className="nm-btn-primary w-full"
              >
                <Download size={15} aria-hidden="true" />
                Download
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
