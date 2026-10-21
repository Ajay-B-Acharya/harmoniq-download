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
    <div className="flex items-center gap-4">
      {/* Neumorphic icon badge */}
      <div
        className="nm-icon-wrap h-11 w-11 shrink-0"
        style={{ color: 'var(--nm-accent)' }}
      >
        <Icon size={18} aria-hidden="true" />
      </div>
      <div>
        <dt
          className="text-[0.68rem] font-semibold uppercase tracking-widest"
          style={{ color: 'var(--nm-text-muted)' }}
        >
          {label}
        </dt>
        <dd
          className="text-sm font-medium"
          style={{ color: 'var(--nm-text-primary)' }}
        >
          {value}
        </dd>
      </div>
    </div>
  );
}

export default function DownloadSection() {
  const displayValue = (val: string | null): string => val ?? 'Not available yet';

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
          description="Download the latest APK and install it directly on your Android device."
        />

        {/* Main card */}
        <div
          className="nm-card mx-auto mt-12 max-w-2xl p-8 sm:p-10"
        >
          {/* Release info grid */}
          <dl className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <InfoRow icon={Tag} label="Latest Version" value={displayValue(appConfig.version)} />
            <InfoRow icon={HardDrive} label="APK Size" value={displayValue(appConfig.apkSize)} />
            <InfoRow icon={Smartphone} label="Minimum Android" value={displayValue(appConfig.minAndroid)} />
            <InfoRow icon={Calendar} label="Release Date" value={displayValue(appConfig.releaseDate)} />
          </dl>

          {/* Neumorphic divider */}
          <hr className="nm-divider my-8" />

          {/* Download action */}
          <div className="flex flex-col items-center gap-4">
            <DownloadButton size="lg" fullWidth />
            {!isDownloadAvailable && (
              <p
                className="text-center text-xs"
                style={{ color: 'var(--nm-text-muted)' }}
              >
                The download link will be available once Harmoniq is released.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
