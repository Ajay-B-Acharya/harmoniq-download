export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * FAQ content displayed in the FAQ section.
 *
 * Keep answers editable. Do not invent unsupported claims about pricing,
 * privacy, compatibility, or availability. Update as the application evolves.
 */
export const faqItems: FAQItem[] = [
  {
    id: 'what-is-harmoniq',
    question: 'What is Harmoniq?',
    answer:
      'Harmoniq is a music player application for Android devices, designed to offer a personal and intuitive listening experience with a focus on clean design and essential music features.',
  },
  {
    id: 'available-for-android',
    question: 'Is Harmoniq available for Android?',
    answer:
      'Harmoniq is being developed for Android. The download will be available on this page once the application is released. Please check back for updates.',
  },
  {
    id: 'install-apk',
    question: 'How do I install the APK?',
    answer:
      'Once the APK is available for download, you can install it by downloading the file, enabling \u201cInstall from unknown sources\u201d in your Android settings if prompted, and opening the downloaded APK. Detailed installation instructions will be provided with the release.',
  },
  {
    id: 'future-updates',
    question: 'How do I receive future updates?',
    answer:
      'Updates will be announced on this page. When a new version is released, you can download the updated APK and install it over your existing installation.',
  },
  {
    id: 'free-to-use',
    question: 'Is Harmoniq free to use?',
    answer:
      'Pricing details will be confirmed closer to the release. Please check back for the latest information.',
  },
];
