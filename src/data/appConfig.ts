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

export const appConfig: AppConfig = {
  name: 'Harmoniq',
  shortDescription: 'Your Music. Your Space.',
  fullDescription:
    'Discover a music experience designed around you. Explore your library, find your favorite tracks, and enjoy a player built for a more personal listening experience.',

  // --- Release information (placeholders) ---
  version: null, // e.g. '1.0.0'
  apkSize: null, // e.g. '24 MB'
  minAndroid: null, // e.g. 'Android 8.0 (Oreo) or higher'
  releaseDate: null, // e.g. '2025-01-15'

  // --- Download ---
  // Set VITE_APK_DOWNLOAD_URL in .env or hardcode here once the APK is hosted.
  apkDownloadUrl: readEnv('VITE_APK_DOWNLOAD_URL'),

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
