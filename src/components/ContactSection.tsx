import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Building } from "lucide-react";

interface ContactSectionProps {
  language: 'zh' | 'en';
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const content = {
    zh: {
      title: "聯絡我們",
      subtitle: "隨時為您提供專業服務",
      company: "林楊五金有限公司",
      companyEn: "Antelope Hardware Ltd.",
      taxId: "統一編號：89156878",
      contactInfo: [
        {
          icon: Phone,
          title: "聯絡電話",
          value: "0972-138-928",
          action: "tel:0972138928"
        },
        {
          icon: Mail,
          title: "電子郵件",
          value: "antelopehw@outlook.com",
          action: "mailto:antelopehw@outlook.com"
        },
        {
          icon: MessageCircle,
          title: "官方LINE",
          value: "@602dlrjj",
          action: "https://line.me/ti/p/@602dlrjj"
        },
        {
          icon: MapPin,
          title: "公司地址",
          value: "臺中市清水區吳厝里和睦路三段250號1樓",
          valueEn: "1 F., No. 250, Sec. 3, Hemu Rd., Wucuo Vil., Qingshui Dist., Taichung City 436043, Taiwan (R.O.C.)"
        },
        {
          icon: Clock,
          title: "辦公時間",
          value: "週一至週五 09:00-17:00 (GMT+8)"
        }
      ]
    },
    en: {
      title: "Contact Us",
      subtitle: "Professional Service Available Anytime",
      company: "Antelope Hardware Ltd.",
      companyEn: "林楊五金有限公司",
      taxId: "Tax ID: 89156878",
      contactInfo: [
        {
          icon: Phone,
          title: "Phone",
          value: "+886-972-138-928",
          action: "tel:+886972138928"
        },
        {
          icon: Mail,
          title: "Email",
          value: "antelopehw@outlook.com",
          action: "mailto:antelopehw@outlook.com"
        },
        {
          icon: MessageCircle,
          title: "Official LINE",
          value: "@602dlrjj",
          action: "https://line.me/ti/p/@602dlrjj"
        },
        {
          icon: MapPin,
          title: "Address",
          value: "1 F., No. 250, Sec. 3, Hemu Rd., Wucuo Vil., Qingshui Dist., Taichung City 436043, Taiwan (R.O.C.)",
          valueEn: "臺中市清水區吳厝里和睦路三段250號1樓"
        },
        {
          icon: Clock,
          title: "Business Hours",
          value: "Monday to Friday 09:00-17:00 (GMT+8)"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="py-20 bg-ocean-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean-primary mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center bg-ocean-primary text-white rounded-t-lg">
              <div className="flex items-center justify-center mb-2">
                <Building className="h-8 w-8 mr-3" />
                <div>
                  <CardTitle className="text-2xl">{t.company}</CardTitle>
                  <p className="text-ocean-light">{t.companyEn}</p>
                </div>
              </div>
              <p className="text-ocean-light">{t.taxId}</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {t.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-ocean-light rounded-lg">
                      <info.icon className="h-5 w-5 text-ocean-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-ocean-primary mb-1">{info.title}</h3>
                      <div className="text-muted-foreground">
                        {info.action ? (
                          <Button
                            variant="link"
                            className="p-0 h-auto text-left justify-start"
                            asChild
                          >
                            <a href={info.action} target="_blank" rel="noopener noreferrer">
                              {info.value}
                            </a>
                          </Button>
                        ) : (
                          <div>
                            <p>{info.value}</p>
                            {info.valueEn && (
                              <p className="text-sm mt-1 italic">{info.valueEn}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-lg text-ocean-primary font-medium mb-4">
              {language === 'zh' 
                ? "若您的船舶即將靠泊台灣，我們將以最大的誠意，提供高品質的服務" 
                : "If your vessel is approaching Taiwan, we will provide high-quality service with the utmost sincerity"
              }
            </p>
            <Button size="lg" className="bg-ocean-secondary hover:bg-ocean-primary">
              {language === 'zh' ? "立即聯絡我們" : "Contact Us Now"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};