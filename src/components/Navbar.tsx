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

  // Close mobile menu when the viewport grows to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border-subtle bg-bg-base/80 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="container-px flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-text-primary transition-opacity hover:opacity-80"
          aria-label={`${appConfig.name} home`}
        >
          <img
            src="/logo.svg"
            alt={`${appConfig.name} logo`}
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-lg font-semibold tracking-tight">
            {appConfig.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop download button */}
        <div className="hidden md:block">
          <a
            href="#download"
            className="inline-flex items-center gap-2 border border-border-accent bg-accent-primary/10 px-4 py-2 text-sm font-medium text-accent-primary transition-colors hover:bg-accent-primary/20"
            aria-label="Download Harmoniq"
          >
            <Download size={16} aria-hidden="true" />
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center p-2 text-text-primary transition-colors hover:text-accent-primary md:hidden"
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
          className="border-t border-border-subtle bg-bg-base md:hidden"
        >
          <ul className="container-px flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-bg-surface hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#download"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 border border-border-accent bg-accent-primary/10 px-4 py-3 text-sm font-medium text-accent-primary transition-colors hover:bg-accent-primary/20"
              >
                <Download size={16} aria-hidden="true" />
                Download
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
