import { Download, AlertCircle } from 'lucide-react';
import { appConfig, isDownloadAvailable } from '@/data/appConfig';

interface DownloadButtonProps {
  /** Size variant of the button. */
  size?: 'md' | 'lg';
  /** Render as a full-width block button (useful inside cards). */
  fullWidth?: boolean;
}

export default function DownloadButton({
  size = 'md',
  fullWidth = false,
}: DownloadButtonProps) {
  const sizeClasses =
    size === 'lg'
      ? 'px-8 py-3.5 text-base'
      : 'px-5 py-2.5 text-sm';

  const widthClass = fullWidth ? 'w-full justify-center' : 'inline-flex';

  if (isDownloadAvailable && appConfig.apkDownloadUrl) {
    return (
      <a
        href={appConfig.apkDownloadUrl}
        download
        className={`${widthClass} ${sizeClasses} inline-flex items-center gap-2 border border-border-accent bg-accent-primary/10 font-medium text-accent-primary transition-colors hover:bg-accent-primary/20`}
        aria-label={`Download ${appConfig.name} APK`}
      >
        <Download size={20} aria-hidden="true" />
        Download for Android
      </a>
    );
  }

  // Disabled / placeholder state — download is not yet configured.
  return (
    <span
      className={`${widthClass} ${sizeClasses} inline-flex cursor-not-allowed items-center gap-2 border border-border-subtle bg-bg-surface font-medium text-text-muted`}
      aria-disabled="true"
      role="button"
      tabIndex={0}
      title="Download link is not configured yet"
    >
      <AlertCircle size={20} aria-hidden="true" />
      Download coming soon
    </span>
  );
}
