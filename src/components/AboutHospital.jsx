import React from 'react';
import { UserCheck, Cpu, Sparkles, Heart, FileText, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function AboutHospital({ onOpenAboutModal }) {
  const { t, isHindi } = useLanguage();

  const highlights = [
    {
      title: isHindi ? "अनुभवी दंत विशेषज्ञ" : "Experienced Dental Professionals",
      desc: isHindi ? "जटिल मामलों में सफल परिणामों वाले अनुभवी MDS सर्जन और विशेषज्ञ।" : "Compassionate MDS dental surgeons and specialists with proven track records in complex treatments.",
      icon: UserCheck,
    },
    {
      title: isHindi ? "आधुनिक उपचार तकनीक" : "Modern Treatment Technology",
      desc: isHindi ? "सटीक और कोमल इलाज के लिए 3D CBCT डिजिटल इमेजिंग और रोटरी उपकरण।" : "3D CBCT digital imaging, rotary endodontics, and intraoral cameras for gentle, pinpoint accuracy.",
      icon: Cpu,
    },
    {
      title: isHindi ? "स्वच्छ व सुरक्षित वातावरण" : "Clean & Hygienic Environment",
      desc: isHindi ? "हर मरीज के लिए अस्पताल-ग्रेड यूरोपीय Class-B स्टेरलाइजेशन सुरक्षा।" : "Hospital-grade European Class-B autoclaves with strict sterilization between every patient visit.",
      icon: Sparkles,
    },
    {
      title: isHindi ? "आरामदायक अनुभव" : "Comfortable Patient Experience",
      desc: isHindi ? "मेमोरी-फोम डेंटल कुर्सियां और दर्द-रहित कोमल एनेस्थीसिया तकनीक।" : "Ergonomic memory-foam dental chairs, calm music, and painless local anesthesia protocols.",
      icon: Heart,
    },
    {
      title: isHindi ? "व्यक्तिगत उपचार योजना" : "Personalized Treatment Plans",
      desc: isHindi ? "आपकी सेहत और सुविधा के अनुसार तैयार की गई स्पष्ट उपचार योजना।" : "Tailored clinical roadmaps customized to your oral anatomy, medical background, and comfort.",
      icon: FileText,
    },
    {
      title: isHindi ? "पारदर्शी परामर्श" : "Transparent Consultation",
      desc: isHindi ? "शुरुआत में ही स्पष्ट खर्च और 4K स्क्रीन पर डिजिटल परामर्श।" : "Clear upfront fee estimates, transparent visual explanations on 4K screens, and zero surprises.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-24 bg-white dark:bg-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            {t('about_badge', 'About Our Hospital')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-3">
            {t('about_title', 'Where Modern Technology Meets Compassionate Care')}
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('about_desc_1', 'SmileCare Dental Hospital provides comprehensive dental care using modern technology, experienced dental professionals and a patient-first approach. We believe dental treatment should be comfortable, transparent, and completely anxiety-free.')}
          </p>
        </ScrollReveal>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Clinic Photo Frame */}
          <ScrollReveal animation="fade-right" delay={150} className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 group">
              <div className="aspect-4/3 sm:aspect-4/3 bg-slate-100 dark:bg-slate-800">
                <img
                  src="/images/clinic-interior.jpg"
                  alt="SmileCare Dental Hospital reception lounge and consultation suites"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f36]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-500/90 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase mb-1.5">
                  {isHindi ? 'अस्पताल परिसर' : 'Hospital Facility'}
                </span>
                <h3 className="text-base sm:text-xl font-bold font-heading text-white">
                  {isHindi ? 'मरीजों के सुकून और आराम के लिए विशेष निर्मित' : 'Designed for Patient Calm & Comfort'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-0.5 line-clamp-2">
                  {isHindi ? 'आधुनिक और स्वच्छ माहौल जो आपके डर को पूरी तरह दूर कर दे।' : 'Step into a clean, modern clinic environment engineered to eliminate healthcare stress.'}
                </p>
              </div>
            </div>

            {/* Quality Seal */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 bg-white dark:bg-[#0c1e33] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm sm:shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0b1f36] dark:text-white">{isHindi ? '100% स्टेरलाइज्ड मानक' : '100% Sterile Standards'}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">{isHindi ? 'NABH सुरक्षा मानकों के अनुरूप' : 'Exceeds NABH hospital safety guidelines'}</div>
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Value Highlights */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal
                    key={index}
                    animation="fade-up"
                    delay={100 + index * 70}
                    className="p-4 rounded-xl sm:rounded-2xl bg-slate-50/70 dark:bg-[#0c1e33] border border-slate-100/90 dark:border-slate-800 hover:bg-white dark:hover:bg-[#132a45] hover:border-blue-200 transition-all duration-300 flex items-start gap-3.5 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="w-9 h-9 rounded-lg sm:rounded-xl bg-white dark:bg-[#081729] text-blue-700 dark:text-sky-400 flex items-center justify-center shadow-xs border border-slate-100 dark:border-slate-700 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0b1f36] dark:text-white mb-1 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* CTA */}
            <ScrollReveal animation="fade-up" delay={500} className="pt-1">
              <button
                type="button"
                onClick={onOpenAboutModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0f2b48] dark:text-sky-300 bg-blue-50/90 dark:bg-sky-950/60 hover:bg-blue-100 dark:hover:bg-sky-900/60 active:bg-blue-200 border border-blue-200 dark:border-sky-800 transition-colors cursor-pointer"
              >
                <span>{t('about_btn_more', 'Learn More About Our Hospital')}</span>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              </button>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

