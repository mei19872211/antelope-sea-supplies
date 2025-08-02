import { Ship, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  language: 'zh' | 'en';
}

export const Footer = ({ language }: FooterProps) => {
  const content = {
    zh: {
      companyName: "林楊五金有限公司",
      companyNameEn: "Antelope Hardware Ltd.",
      rights: "版權所有",
      address: "臺中市清水區吳厝里和睦路三段250號1樓",
      motto: "細緻服務，由心出發。每一趟航程，我們都與您同行。"
    },
    en: {
      companyName: "Antelope Hardware Ltd.",
      companyNameEn: "林楊五金有限公司",
      rights: "All Rights Reserved",
      address: "1 F., No. 250, Sec. 3, Hemu Rd., Wucuo Vil., Qingshui Dist., Taichung City 436043, Taiwan (R.O.C.)",
      motto: "Meticulous service, from the heart. Every voyage, we sail with you."
    }
  };

  const t = content[language];

  return (
    <footer className="bg-ocean-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Ship className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">{t.companyName}</h3>
                <p className="text-ocean-light text-sm">{t.companyNameEn}</p>
              </div>
            </div>
            <p className="text-ocean-light leading-relaxed italic">
              "{t.motto}"
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'zh' ? '聯絡資訊' : 'Contact Information'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-ocean-light" />
                <span className="text-sm">0972-138-928</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-ocean-light" />
                <span className="text-sm">antelopehw@outlook.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'zh' ? '公司地址' : 'Company Address'}
            </h4>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-ocean-light mt-1 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{t.address}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-ocean-secondary mt-8 pt-8 text-center">
          <p className="text-ocean-light">
            © 2024 {t.companyName}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};