/**
 * Centralized application configuration for the Harmoniq website.
 *
 * ┌──────────────────────────────────────────────────────────────┐
 * │ FILES TO UPDATE WHEN REAL DATA IS AVAILABLE                 │
 * ├──────────────────────────────────────────────────────────────┤
 * │ • Real logo:  Replace public/logo.svg and public/favicon.svg │
 * │ • Screenshots: Add files to public/images/screenshots/ and   │
 * │               update the `screenshots` array below            │
 * │ • APK URL:    Set `apkDownloadUrl` or use VITE_APK_DOWNLOAD_  │
 * │               URL in .env — the download button activates    │
 * │               automatically once a non-empty URL is present   │
 * │ • Release info: Update `version`, `apkSize`, `minAndroid`,  │
 * │               `releaseDate`                                  │
 * │ • Privacy:    Set `privacyPolicyUrl`                         │
 * │ • Contact:    Set `contactEmail`                              │
 * └──────────────────────────────────────────────────────────────┘
 */

export interface ScreenshotConfig {
  src: string;
  alt: string;
}

export interface AppConfig {
  name: string;
  shortDescription: string;
  fullDescription: string;
  version: string | null;
  apkSize: string | null;
  minAndroid: string | null;
  releaseDate: string | null;
  apkDownloadUrl: string | null;
  privacyPolicyUrl: string | null;
  contactEmail: string | null;
  screenshots: ScreenshotConfig[];
}

/**
 * Read an environment variable set at build time via Vite.
 * Returns null when the variable is empty or not defined.
 */
function readEnv(key: string): string | null {
  const value = import.meta.env[key] as string | undefined;
  return value && value.trim().length > 0 ? value.trim() : null;
}

function resolveApkUrl(envUrl: string | null): string {
  const url = envUrl ?? 'https://pub-62ea8e4d6d7146b380084a625466968f.r2.dev/Harmoniq.apk';
  const trimmed = url.trim().replace(/\/+$/, '');
  if (trimmed === 'https://pub-62ea8e4d6d7146b380084a625466968f.r2.dev') {
    return `${trimmed}/Harmoniq.apk`;
  }
  return trimmed;
}

export const appConfig: AppConfig = {
  name: 'Harmoniq',
  shortDescription: 'Your Music. Your Space.',
  fullDescription:
    'A music experience designed around your library, your preferences, and the way you listen.',

  // --- Release information ---
  version: '1.0.0',
  apkSize: '108 MB',
  minAndroid: 'Android 8.0+',
  releaseDate: '2026-10-20',

  // --- Download ---
  // Set VITE_APK_DOWNLOAD_URL in .env or defaults to the hosted R2 APK.
  apkDownloadUrl: resolveApkUrl(readEnv('VITE_APK_DOWNLOAD_URL')),

  // --- Legal & Contact ---
  privacyPolicyUrl: readEnv('VITE_PRIVACY_POLICY_URL'),
  contactEmail: readEnv('VITE_CONTACT_EMAIL'),

  // --- Screenshots ---
  // Replace with real paths once screenshots are added to
  // public/images/screenshots/
  screenshots: [
    {
      src: '/images/screenshots/placeholder-1.svg',
      alt: 'Harmoniq home screen — placeholder',
    },
    {
      src: '/images/screenshots/placeholder-2.svg',
      alt: 'Harmoniq music library — placeholder',
    },
    {
      src: '/images/screenshots/placeholder-3.svg',
      alt: 'Harmoniq now playing screen — placeholder',
    },
    {
      src: '/images/screenshots/placeholder-4.svg',
      alt: 'Harmoniq settings screen — placeholder',
    },
  ],
};

/** Convenience flag: true when a valid APK download URL is configured. */
export const isDownloadAvailable: boolean =
  appConfig.apkDownloadUrl !== null && appConfig.apkDownloadUrl.length > 0;
