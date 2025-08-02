import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Wrench, Clock } from "lucide-react";

interface ServicesSectionProps {
  language: 'zh' | 'en';
}

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const content = {
    zh: {
      title: "服務項目",
      subtitle: "全方位船舶補給解決方案",
      services: [
        {
          icon: Package,
          title: "日常糧品供應",
          description: "新鮮食材、冷凍食品、乾貨及各式飲料，確保船員在航行期間的營養需求。"
        },
        {
          icon: ShoppingCart,
          title: "台灣本地採購配送",
          description: "香煙、酒類、化妝品等商品採購服務，提供台灣本地優質商品配送。"
        },
        {
          icon: Wrench,
          title: "甲板與機艙物料",
          description: "船舶維修零件、工具、清潔用品及各類技術物料的專業採購與配送。"
        },
        {
          icon: Clock,
          title: "24小時服務",
          description: "提供全天候緊急補給服務，確保您的航程不受延誤。"
        }
      ]
    },
    en: {
      title: "Our Services",
      subtitle: "Comprehensive Ship Supply Solutions",
      services: [
        {
          icon: Package,
          title: "Fresh Provisions",
          description: "Fresh produce, frozen foods, dry goods and beverages to meet nutritional needs during voyages."
        },
        {
          icon: ShoppingCart,
          title: "Local Taiwan Procurement",
          description: "Cigarettes, alcohol, cosmetics and other quality products procurement and delivery from Taiwan local sources."
        },
        {
          icon: Wrench,
          title: "Deck & Engine Supplies",
          description: "Professional procurement and delivery of ship repair parts, tools, cleaning supplies and various technical materials."
        },
        {
          icon: Clock,
          title: "24/7 Service",
          description: "Round-the-clock emergency supply services to ensure your voyage stays on schedule."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="services" className="py-20 bg-ocean-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean-primary mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-ocean-light rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-ocean-primary" />
                </div>
                <CardTitle className="text-xl text-ocean-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};