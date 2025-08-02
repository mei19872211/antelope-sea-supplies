import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageToggle={toggleLanguage} />
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <AboutSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
