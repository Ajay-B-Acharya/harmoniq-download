import {
  Library,
  Search,
  DownloadCloud,
  LayoutGrid,
  SlidersHorizontal,
  SunMoon,
  type LucideIcon,
} from 'lucide-react';

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Feature cards displayed on the Features section.
 *
 * IMPORTANT: These are initial content placeholders. Update the
 * descriptions to match actual application capabilities once verified.
 * Do not claim a feature is fully supported unless it has been tested.
 */
export const features: Feature[] = [
  {
    id: 'personal-library',
    icon: Library,
    title: 'Personal Music Library',
    description: 'Organize and access your music in one place.',
  },
  {
    id: 'music-discovery',
    icon: Search,
    title: 'Music Discovery',
    description: 'Find tracks using the application\u2019s search functionality.',
  },
  {
    id: 'offline-downloads',
    icon: DownloadCloud,
    title: 'Offline Downloads',
    description: 'Access supported downloaded music when offline.',
  },
  {
    id: 'intuitive-navigation',
    icon: LayoutGrid,
    title: 'Intuitive Navigation',
    description: 'Navigate effortlessly between your library, search, and playlists with a clean tab-based layout.',
  },
  {
    id: 'personalized-experience',
    icon: SlidersHorizontal,
    title: 'Personalized Experience',
    description: 'Explore an interface designed around your listening preferences.',
  },
  {
    id: 'themes',
    icon: SunMoon,
    title: 'Light and Dark Themes',
    description: 'Choose the appearance that suits your preference.',
  },
];
