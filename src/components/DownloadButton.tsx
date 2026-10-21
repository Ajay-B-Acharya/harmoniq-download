import { Download, AlertCircle } from 'lucide-react';
import { appConfig, isDownloadAvailable } from '@/data/appConfig';

interface DownloadButtonProps {
  size?: 'md' | 'lg';
  fullWidth?: boolean;
}

export default function DownloadButton({
  size = 'md',
  fullWidth = false,
}: DownloadButtonProps) {
  const primaryClass = size === 'lg' ? 'nm-btn-primary-lg' : 'nm-btn-primary';
  const disabledClass = size === 'lg' ? 'nm-btn-disabled-lg' : 'nm-btn-disabled';
  const widthClass = fullWidth ? ' w-full' : '';

  if (isDownloadAvailable && appConfig.apkDownloadUrl) {
    return (
      <a
        href={appConfig.apkDownloadUrl}
        download
        className={`${primaryClass}${widthClass}`}
        aria-label={`Download ${appConfig.name} APK`}
      >
        <Download size={20} aria-hidden="true" />
        Download for Android
      </a>
    );
  }

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
