import React from 'react';
import { Award, Cpu, ShieldCheck, Heart, FileCheck, Smile } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  Award,
  Cpu,
  ShieldCheck,
  Heart,
  FileCheck,
  Smile,
};

export default function WhyChooseUs() {
  const { t, isHindi } = useLanguage();

  const getLocalizedWhyTitle = (item) => {
    if (!isHindi) return item.title;
    switch (item.id) {
      case 'experienced-specialists': return 'अनुभवी MDS विशेषज्ञ';
      case 'modern-technology': return 'आधुनिक 3D तकनीक';
      case 'strict-hygiene': return 'कठोर स्वच्छता मानक';
      case 'personalized-care': return 'व्यक्तिगत व आत्मीय देखभाल';
      case 'transparent-communication': return 'पारदर्शी व ईमानदार खर्च';
      case 'comfortable-environment': return 'तनाव-मुक्त आरामदायक माहौल';
      default: return item.title;
    }
  };

  const getLocalizedWhyDesc = (item) => {
    if (!isHindi) return item.desc;
    switch (item.id) {
      case 'experienced-specialists': return '10+ वर्षों के क्लिनिकल अनुभव वाले MDS योग्य सर्जन, इम्प्लांटोलॉजिस्ट और ऑर्थोडॉन्टिस्ट।';
      case 'modern-technology': return '3D CBCT स्कैन, डिजिटल इंट्राओरल कैमरे और दर्द-रहित रोटरी उपकरण।';
      case 'strict-hygiene': return 'अस्पताल स्तर का यूरोपीय Class-B स्टेरलाइजेशन और सीलबंद कीटाणुरहित उपकरण।';
      case 'personalized-care': return 'बिना किसी जल्दबाजी के आपकी बात सुनना और आपके अनुसार इलाज तय करना।';
      case 'transparent-communication': return 'इलाज से पहले स्पष्ट खर्च विवरण—कोई छिपा हुआ शुल्क या अनावश्यक प्रक्रिया नहीं।';
      case 'comfortable-environment': return 'प्राइवेट केबिन, मेमोरी-फोम कुर्सियां और कोमल एनेस्थीसिया तकनीक।';
      default: return item.desc;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#071322] dark:to-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            {t('why_badge', 'Why Patients Choose Us')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-4">
            {t('why_title', 'Why Patients Choose SmileCare')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('why_subtitle', 'We understand dental visits can sometimes feel intimidating. Here is how we ensure every visit is relaxing, gentle, and trustworthy.')}
          </p>
        </ScrollReveal>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            const titleText = getLocalizedWhyTitle(item);
            const descText = getLocalizedWhyDesc(item);

            return (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={index * 70}
                className="bg-white dark:bg-[#0c1e33] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500 shadow-xs hover:shadow-xl hover:shadow-blue-950/15 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-sky-950/60 group-hover:bg-[#0f2b48] text-blue-700 dark:text-sky-400 group-hover:text-white flex items-center justify-center transition-colors duration-200 shrink-0 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0b1f36] dark:text-white mb-2 font-heading group-hover:text-blue-700 dark:group-hover:text-sky-400 transition-colors">
                  {titleText}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {descText}
                </p>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
