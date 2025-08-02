import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: 'zh' | 'en';
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'zh' ? 'EN' : '中文'}
    </Button>
  );
};