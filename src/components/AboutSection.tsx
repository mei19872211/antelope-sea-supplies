import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Heart } from "lucide-react";

interface AboutSectionProps {
  language: 'zh' | 'en';
}

export const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    zh: {
      title: "關於我們",
      subtitle: "細緻服務，由心出發",
      description: "我們的團隊擁有豐富的業界經驗，曾在高雄、基隆、台中等主要商港服務多艘船舶，是值得信賴的船舶補給服務。無論是日常糧品、免稅品，還是甲板與機艙物料，我們始終秉持專業與細緻，致力提供您穩定而貼心的補給支持。",
      motto: "不只是補給，更是一份默契與陪伴——我們始終在您航程中待命。",
      features: [
        {
          icon: MapPin,
          title: "服務港口",
          description: "高雄港、基隆港、台中港等主要商港"
        },
        {
          icon: Users,
          title: "專業團隊",
          description: "擁有豐富海事服務經驗的專業團隊"
        },
        {
          icon: Award,
          title: "品質保證",
          description: "嚴格的品質控制，確保每項服務的專業水準"
        },
        {
          icon: Heart,
          title: "用心服務",
          description: "以誠待人，提供貼心細緻的客戶服務"
        }
      ]
    },
    en: {
      title: "About Us",
      subtitle: "Meticulous Service, From the Heart",
      description: "Our team has extensive industry experience, having served numerous vessels at major commercial ports including Kaohsiung, Keelung, and Taichung. We are a trusted ship supply service provider. Whether it's daily provisions, duty-free items, or deck and engine supplies, we always maintain professionalism and attention to detail, committed to providing you with stable and caring supply support.",
      motto: "Every voyage, we sail with you.",
      features: [
        {
          icon: MapPin,
          title: "Service Ports",
          description: "Major commercial ports including Kaohsiung, Keelung, and Taichung"
        },
        {
          icon: Users,
          title: "Professional Team",
          description: "Experienced professionals with extensive maritime service background"
        },
        {
          icon: Award,
          title: "Quality Assurance",
          description: "Strict quality control ensuring professional standards in every service"
        },
        {
          icon: Heart,
          title: "Caring Service",
          description: "Treating customers with sincerity and providing thoughtful, meticulous service"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean-primary mb-4">{t.title}</h2>
          <p className="text-2xl text-ocean-secondary mb-8 font-medium">{t.subtitle}</p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {t.description}
            </p>
            <p className="text-xl text-ocean-primary font-medium italic">
              "{t.motto}"
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <Card key={index} className="border-ocean-light hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-ocean-secondary rounded-full w-fit">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ocean-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};