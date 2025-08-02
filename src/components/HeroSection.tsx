import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-shipping.jpg";

interface HeroSectionProps {
  language: 'zh' | 'en';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    zh: {
      title: "專業船舶補給服務",
      subtitle: "值得信賴的海上夥伴",
      description: "我們擁有豐富的業界經驗，曾在高雄、基隆、台中等主要商港服務多艘船舶，提供專業可靠的船舶補給服務。",
      cta: "立即聯絡",
      lineContact: "LINE 聯絡"
    },
    en: {
      title: "Professional Ship Supply Services",
      subtitle: "Your Trusted Maritime Partner",
      description: "With extensive industry experience serving vessels at major commercial ports including Kaohsiung, Keelung, and Taichung, we provide professional and reliable ship supply services.",
      cta: "Contact Now",
      lineContact: "LINE Contact"
    }
  };

  const t = content[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-ocean-light">
            {t.subtitle}
          </p>
          <p className="text-lg mb-8 leading-relaxed opacity-90">
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-ocean-secondary hover:bg-ocean-primary text-white px-8 py-3"
            >
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2 text-white bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">LINE ID: @602dlrjj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};