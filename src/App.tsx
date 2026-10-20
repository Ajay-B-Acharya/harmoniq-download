import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import FeaturesSection from '@/sections/FeaturesSection';
import PreviewSection from '@/sections/PreviewSection';
import DownloadSection from '@/sections/DownloadSection';
import FAQSection from '@/sections/FAQSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PreviewSection />
        <DownloadSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
