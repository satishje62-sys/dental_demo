import React from 'react';
import { CalendarCheck, UserCheck, FileSearch, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = {
  CalendarCheck,
  UserCheck,
  FileSearch,
  Sparkles,
};

export default function HowItWorks({ onBookClick }) {
  const { t, isHindi } = useLanguage();

  const getLocalizedStepTitle = (step) => {
    if (!isHindi) return step.title;
    switch (step.step) {
      case '01': return 'अपॉइंटमेंट बुक करें';
      case '02': return 'पधारें व परामर्श लें';
      case '03': return 'जांच व उपचार योजना';
      case '04': return 'दर्द-रहित उपचार शुरू';
      default: return step.title;
    }
  };

  const getLocalizedStepDesc = (step) => {
    if (!isHindi) return step.desc;
    switch (step.step) {
      case '01': return 'ऑनलाइन या फोन पर 60 सेकंड में डॉक्टर, तारीख और सुविधाजनक समय चुनें।';
      case '02': return 'अस्पताल आएं, शांत लाउंज में बैठें और डॉक्टर से कोमल जांच कराएं।';
      case '03': return 'डिजिटल एक्स-रे देखें, उपचार समझें और लिखित पारदर्शी खर्च विवरण प्राप्त करें।';
      case '04': return 'स्टराइल रूम में कोमल दर्द-रहित इलाज का अनुभव लें और पोस्ट-ऑप सलाह पाएं।';
      default: return step.desc;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#071322] dark:to-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            {t('how_badge', 'Simple 4-Step Process')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-4">
            {t('how_title', 'Your Journey to a Healthy Smile')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('how_subtitle', 'We have streamlined every step of your hospital visit for zero waiting time and absolute comfort.')}
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {HOW_IT_WORKS.map((step, idx) => {
            const Icon = iconMap[step.icon] || CalendarCheck;
            const titleText = getLocalizedStepTitle(step);
            const descText = getLocalizedStepDesc(step);

            return (
              <div
                key={step.step}
                className="relative bg-white dark:bg-[#0c1e33] rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl hover:shadow-blue-950/15 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-slate-200 dark:text-slate-700 font-mono group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-sky-950/60 group-hover:bg-[#0f2b48] text-blue-700 dark:text-sky-400 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0b1f36] dark:text-white mb-2.5 font-heading">
                    {titleText}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {descText}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400">
                  <span>{isHindi ? `चरण ${step.step} / 04` : `Step ${step.step} of 04`}</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Quick reassuring bottom bar */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
            {isHindi ? 'क्या आपको डर या अचानक दर्द है? रिसेप्शन टीम को बताएं—हमारे पास स्पेशल जेंटल केयर प्रोटोकॉल हैं।' : 'Need urgent relief or have dental anxiety? Let our reception team know—we offer special gentle care protocols.'}
          </p>
          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#0f2b48] dark:bg-sky-700 hover:bg-[#0b1f36] shadow-sm transition-all cursor-pointer"
          >
            <span>{t('book_appointment', 'Book Appointment')}</span>
            <ArrowRight className="w-4 h-4 text-sky-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
