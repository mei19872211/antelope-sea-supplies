import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { Ship, Phone, Mail } from "lucide-react";

interface HeaderProps {
  language: 'zh' | 'en';
  onLanguageToggle: () => void;
}

export const Header = ({ language, onLanguageToggle }: HeaderProps) => {
  const content = {
    zh: {
      companyName: "林楊五金有限公司",
      companyNameEn: "Antelope Hardware Ltd.",
      nav: {
        home: "首頁",
        services: "服務項目",
        about: "關於我們",
        contact: "聯絡我們"
      }
    },
    en: {
      companyName: "Antelope Hardware Ltd.",
      companyNameEn: "林楊五金有限公司",
      nav: {
        home: "Home",
        services: "Services",
        about: "About Us",
        contact: "Contact"
      }
    }
  };

  const t = content[language];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Ship className="h-8 w-8 text-ocean-primary" />
            <div>
              <h1 className="text-xl font-bold text-ocean-primary">{t.companyName}</h1>
              <p className="text-sm text-muted-foreground">{t.companyNameEn}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-ocean-primary transition-colors">
              {t.nav.home}
            </a>
            <a href="#services" className="text-foreground hover:text-ocean-primary transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="text-foreground hover:text-ocean-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-foreground hover:text-ocean-primary transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-ocean-primary" />
                <span>0972-138-928</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-ocean-primary" />
                <span>antelopehw@outlook.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};