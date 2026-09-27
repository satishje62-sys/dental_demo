import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Anchor, 
  Sparkles, 
  Smile, 
  Gem, 
  HeartHandshake, 
  Cpu, 
  ArrowRight, 
  Calendar,
  Clock
} from 'lucide-react';
import { SERVICES } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = {
  ShieldCheck,
  Activity,
  Anchor,
  Sparkles,
  Smile,
  Gem,
  HeartHandshake,
  Cpu,
};

export default function ServicesSection({ onSelectService, onBookService }) {
  const { t, isHindi } = useLanguage();

  const getLocalizedTitle = (service) => {
    if (!isHindi) return service.title;
    switch (service.id) {
      case 'general-dentistry': return 'जनरल डेंटिस्ट्री व दांतों की सफाई';
      case 'root-canal': return 'दर्द-रहित रूट कैनाल ट्रीटमेंट';
      case 'dental-implants': return 'डेंटल इम्प्लांट्स (स्थायी दांत)';
      case 'teeth-whitening': return 'टीथ व्हाइटनिंग (दांत चमकाना)';
      case 'orthodontics': return 'ऑर्थोडॉन्टिक्स व पारदर्शी अलाइनर्स';
      case 'cosmetic-dentistry': return 'कॉस्मेटिक डेंटिस्ट्री व स्माइल मेकओवर';
      case 'pediatric-dentistry': return 'बच्चों की दंत चिकित्सा (पीडियाट्रिक)';
      case 'wisdom-tooth': return 'अक्ल दाढ़ का दर्द-रहित इलाज';
      default: return service.title;
    }
  };

  const getLocalizedShortDesc = (service) => {
    if (!isHindi) return service.shortDesc;
    switch (service.id) {
      case 'general-dentistry': return 'नियमित जांच, अल्ट्रासोनिक सफाई, टार्टर हटाना और दांतों की सुरक्षा।';
      case 'root-canal': return 'डिजिटल रोटरी तकनीक से संक्रमित दांतों का सिंगल सिटिंग दर्द-रहित इलाज।';
      case 'dental-implants': return 'प्राकृतिक दांतों की तरह दिखने और काम करने वाले स्थायी टाइटेनियम इम्प्लांट्स।';
      case 'teeth-whitening': return 'क्लीनिकल लेजर और कोल्ड-LED तकनीक से मात्र 45 मिनट में चमकदार सफेद मुस्कान।';
      case 'orthodontics': return 'टेढ़े-मेढ़े दांतों को सीधा करने के लिए आधुनिक ब्रेसेस और अदृश्य क्लीयर अलाइनर्स।';
      case 'cosmetic-dentistry': return 'विनीर, कम्पोजिट बॉन्डिंग और चेहरे की बनावट के अनुसार स्माइल मेकओवर।';
      case 'pediatric-dentistry': return 'बच्चों के लिए डर-मुक्त और खेल-खेल में दांतों की कोमल देखभाल।';
      case 'wisdom-tooth': return 'दर्द और सूजन देने वाली अक्ल दाढ़ की माइक्रो-सर्जिकल सुरक्षित निकासी।';
      default: return service.shortDesc;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-24 bg-slate-50/70 dark:bg-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 dark:bg-blue-900/40 text-blue-900 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            {t('services_badge', 'Our Dental Services')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-3">
            {t('services_title', 'Explore Our Dental Services')}
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('services_subtitle', 'Comprehensive dental care for every stage of your oral health journey. From routine dental prevention to advanced smile transformations.')}
          </p>
        </div>

        {/* 8 Services Grid with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || ShieldCheck;
            const titleText = getLocalizedTitle(service);
            const descText = getLocalizedShortDesc(service);

            return (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-[#0c1e33] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500 shadow-xs hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Image Frame */}
                  <div className="relative aspect-16/10 sm:aspect-16/11 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={service.image}
                      alt={titleText}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f36]/85 via-[#0b1f36]/30 to-transparent pointer-events-none" />

                    {/* Floating Icon badge */}
                    <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md text-[#0f2b48] flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4 text-blue-700 dark:text-sky-400" />
                    </div>

                    {/* Badge */}
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-[#0b1f36] dark:text-white bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-xs border border-white/40 dark:border-slate-700">
                      {service.badge}
                    </span>

                    {/* Tagline over bottom gradient of image */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                      <span className="text-[11px] font-medium text-sky-200 line-clamp-1">
                        {service.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-[#0b1f36] dark:text-white mb-1.5 font-heading group-hover:text-blue-700 dark:group-hover:text-sky-400 transition-colors">
                      {titleText}
                    </h3>
                    
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-3">
                      {descText}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium pb-3 border-b border-slate-100 dark:border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 dark:text-sky-400 hover:text-blue-900 group/btn transition-colors cursor-pointer"
                  >
                    <span>{t('services_view_details', 'View Details')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookService(service.title)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0f2b48] dark:text-sky-300 bg-blue-50/80 dark:bg-sky-950/60 hover:bg-[#0f2b48] hover:text-white transition-all cursor-pointer border border-blue-100 dark:border-sky-800/60"
                  >
                    <Calendar className="w-3 h-3 text-sky-600 dark:text-sky-400 group-hover:text-white" />
                    <span>{t('book_appointment', 'Book')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Consultation Banner beneath Services */}
        <div className="mt-10 sm:mt-14 bg-white dark:bg-[#0c1e33] rounded-2xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0b1f36] dark:text-white">
                {isHindi ? 'समझ नहीं आ रहा कि कौन सा इलाज जरूरी है?' : 'Not sure which dental treatment you need?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {isHindi ? 'सामान्य दंत परामर्श बुक करें, हमारे सीनियर सर्जन जांच के बाद सही मार्गदर्शन देंगे।' : 'Book a general dental consultation and our senior dental surgeon will conduct a comprehensive exam.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onBookService("General Dentistry")}
            className="w-full md:w-auto shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0f2b48] dark:bg-sky-700 hover:bg-[#0b1f36] shadow-sm transition-colors cursor-pointer"
          >
            {isHindi ? 'परामर्श बुक करें' : 'Book General Consultation'}
          </button>
        </div>

      </div>
    </section>
  );
}
