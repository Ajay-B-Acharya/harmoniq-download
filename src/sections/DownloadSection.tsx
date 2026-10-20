import { Smartphone, HardDrive, Calendar, Tag } from 'lucide-react';
import { appConfig, isDownloadAvailable } from '@/data/appConfig';
import DownloadButton from '@/components/DownloadButton';
import SectionHeading from '@/components/SectionHeading';

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Tag;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-base text-accent-primary">
        <Icon size={18} aria-hidden="true" />
      </div>
      <div>
        <dt className="text-xs uppercase tracking-wider text-text-muted">
          {label}
        </dt>
        <dd className="text-sm font-medium text-text-primary">{value}</dd>
      </div>
    </div>
  );
}

export default function DownloadSection() {
  const displayValue = (val: string | null): string =>
    val ?? 'Not available yet';

  return (
    <section
      id="download"
      className="section-py"
      aria-label="Download"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Download"
          title="Get Harmoniq for Android"
          description="Download the latest APK to install Harmoniq on your Android device. Release information will appear here once available."
        />

        <div className="mx-auto mt-12 max-w-2xl surface-elevated p-8 sm:p-10">
          {/* Release info grid */}
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InfoRow
              icon={Tag}
              label="Latest Version"
              value={displayValue(appConfig.version)}
            />
            <InfoRow
              icon={HardDrive}
              label="APK Size"
              value={displayValue(appConfig.apkSize)}
            />
            <InfoRow
              icon={Smartphone}
              label="Minimum Android"
              value={displayValue(appConfig.minAndroid)}
            />
            <InfoRow
              icon={Calendar}
              label="Release Date"
              value={displayValue(appConfig.releaseDate)}
            />
          </dl>

          {/* Divider */}
          <div className="my-8 border-t border-border-subtle" />

          {/* Download action */}
          <div className="flex flex-col items-center gap-4">
            <DownloadButton size="lg" fullWidth />

            {!isDownloadAvailable && (
              <p className="text-center text-xs text-text-muted">
                The download link is not configured yet. Please check back
                once Harmoniq is released.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
