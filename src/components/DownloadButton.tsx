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
  const baseClass = size === 'lg' ? 'btn-primary-lg' : 'btn-primary';
  const disabledClass = size === 'lg' ? 'btn-disabled-lg' : 'btn-disabled';
  const widthClass = fullWidth ? ' w-full' : '';

  if (isDownloadAvailable && appConfig.apkDownloadUrl) {
    return (
      <a
        href={appConfig.apkDownloadUrl}
        download
        className={`${baseClass}${widthClass}`}
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
      className={`${disabledClass}${widthClass}`}
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
