import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Scan, 
  Armchair, 
  ShieldAlert, 
  Coffee, 
  Lock, 
  Cpu, 
  AlertCircle, 
  Pill, 
  Accessibility, 
  Car, 
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { FACILITIES } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const facilityIconMap = {
  LayoutGrid,
  Scan,
  Armchair,
  ShieldAlert,
  Coffee,
  Lock,
  Cpu,
  AlertCircle,
  Pill,
  Accessibility,
  Car,
  Sparkles,
};

export default function FacilitiesSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const { t, isHindi } = useLanguage();

  const featuredVisuals = [
    {
      title: isHindi ? "डिजिटल 3D CBCT इमेजिंग सुइट" : "Digital 3D CBCT Imaging Suite",
      desc: isHindi ? "अल्ट्रा-लो रेडिएशन 3D पैनोरमिक इमेजिंग, मिलीमीटर सटीकता से जबड़े और नसों की जांच।" : "Ultra-low radiation 3D panoramic imaging for millimeter-precision nerve mapping and implant planning.",
      image: "/images/facility-xray.jpg",
      tag: isHindi ? "उन्नत जांच" : "Advanced Diagnostics"
    },
    {
      title: isHindi ? "Class-B स्टेरलाइजेशन सेंटर" : "Class-B Sterilization Center",
      desc: isHindi ? "अस्पताल स्तर के वैक्यूम ऑटोक्लेव और सीलबंद पाउच पैकेजिंग से 100% सुरक्षा।" : "Hospital-grade autoclaves with vacuum cycles, barcode pouch tracking, and zero contamination protocols.",
      image: "/images/facility-sterilize.jpg",
      tag: isHindi ? "100% स्टराइल प्रोटोकॉल" : "100% Sterile Protocol"
    },
    {
      title: isHindi ? "पेशेंट लाउंज व प्राइवेट परामर्श कक्ष" : "Patient Lounge & Consultation Suites",
      desc: isHindi ? "आत्मीय स्वागत, शांत वातावरण और बिना किसी तनाव के डॉक्टर से सीधी बातचीत।" : "Warm hospitality, quiet consultation rooms, and private discussion chambers with zero medical stress.",
      image: "/images/clinic-interior.jpg",
      tag: isHindi ? "गोपनीयता व सुविधा" : "Hospitality & Privacy"
    }
  ];

  const getLocalizedFacility = (facility) => {
    if (!isHindi) return facility;
    switch (facility.id) {
      case 'treatment-rooms':
        return {
          ...facility,
          title: "आधुनिक डेंटल ट्रीटमेंट रूम्स",
          shortDesc: "HEPA फिल्ट्रेशन, शांत वातावरण और एर्गोनोमिक डिजाइन से सुसज्जित स्टराइल ऑपरेटरियां।",
          badge: "स्टराइल ऑपेरेटरी",
          features: ["HEPA-14 एयर प्यूरीफायर", "साउंड-प्रूफ कमरे", "सीलिंग एंटरटेनमेंट मॉनिटर्स"]
        };
      case 'digital-xray':
        return {
          ...facility,
          title: "डिजिटल 3D CBCT व एक्स-रे",
          shortDesc: "80% कम रेडिएशन वाली आधुनिक 3D इमेजिंग जो जबड़े की हड्डी और नसों को सटीक दिखाती है।",
          badge: "लो रेडिएशन",
          features: ["अत्यंत कम रेडिएशन तकनीक", "तुरंत 3D बोन विजुअलाइजेशन", "शून्य केमिकल डेवलपमेंट"]
        };
      case 'modern-chairs':
        return {
          ...facility,
          title: "मेमोरी फोम एर्गोनोमिक चेयर्स",
          shortDesc: "मरीजों के आराम के लिए मेमोरी फोम और लम्बर सपोर्ट वाली टचलेस सेंसर डेंटल कुर्सियां।",
          badge: "मरीज का आराम",
          features: ["मल्टी-डेंसिटी मेमोरी फोम", "इंट्राओरल कैमरा इंटीग्रेटेड", "स्मूथ हाइड्रोलिक मूवमेंट"]
        };
      case 'sterilization':
        return {
          ...facility,
          title: "6-चरणीय स्टेरलाइजेशन सेंटर",
          shortDesc: "यूरोपीय Class-B ऑटोक्लेव और सीलबंद स्टराइल पाउच पैकेजिंग से 100% संक्रमण मुक्ति।",
          badge: "100% स्टराइल",
          features: ["यूरोपीय Class-B वैक्यूम ऑटोक्लेव", "बायोलॉजिकल स्पोर टेस्टिंग", "कलर-कोडेड इंस्ट्रूमेंट जोन्स"]
        };
      case 'waiting-lounge':
        return {
          ...facility,
          title: "आरामदायक वेटिंग लाउंज",
          shortDesc: "हाई-स्पीड वाईफाई, शांत माहौल और बिना किसी अस्पताल जैसी गंध वाला सुखद रिसेप्शन लाउंज।",
          badge: "आत्मीय स्वागत",
          features: ["मुफ्त चाय व ताज़ा पानी", "शांत रीडिंग स्पेस", "तनाव-मुक्त वातावरण"]
        };
      case 'private-consultation':
        return {
          ...facility,
          title: "प्राइवेट परामर्श कक्ष",
          shortDesc: "डॉक्टर के साथ व्यक्तिगत बातचीत और 4K स्क्रीन पर डिजिटल स्माइल सिमुलेशन देखने की सुविधा।",
          badge: "100% गोपनीयता",
          features: ["गोपनीय मेडिकल चर्चा", "बड़ी 4K डायग्नोस्टिक स्क्रीन", "डॉक्टर के साथ पूरा समय"]
        };
      case 'modern-equipment':
        return {
          ...facility,
          title: "नेक्स्ट-जेन डेंटल उपकरण",
          shortDesc: "डेंटल डायोड लेजर, कॉर्डलेस रोटरी एंडो मोटर्स और इलेक्ट्रॉनिक एपेक्स लोकेटर्स।",
          badge: "उन्नत तकनीक",
          features: ["डेंटल डायोड लेजर", "इलेक्ट्रॉनिक एपेक्स लोकेटर", "रोटरी एंडोडॉन्टिक्स"]
        };
      case 'emergency-support':
        return {
          ...facility,
          title: "आपातकालीन दंत सेवा",
          shortDesc: "असहनीय दर्द, दांत टूटने या चोट लगने पर तुरंत राहत के लिए ऑन-कॉल आपातकालीन सुविधा।",
          badge: "प्राथमिकता सेवा",
          features: ["ऑन-कॉल सीनियर स्पेशलिस्ट", "फास्ट-ट्रैक इमरजेंसी स्लॉट", "तत्काल दर्द निवारण"]
        };
      case 'pharmacy':
        return {
          ...facility,
          title: "इन-हाउस फार्मेसी",
          shortDesc: "अस्पताल में ही आवश्यक दंत दवाएं, पोस्ट-ऑप माउथवॉश और ओरल केयर किट उपलब्ध।",
          badge: "इन-हाउस सुविधा",
          features: ["प्रमाणित ओरल दवाएं", "दर्द निवारक पोस्ट-केयर किट", "स्पेशलिस्ट सेंसिटिव ब्रश"]
        };
      case 'wheelchair':
        return {
          ...facility,
          title: "व्हीलचेयर व सुलभ पहुंच",
          shortDesc: "बुजुर्गों और दिव्यांगों के लिए स्वचालित रैंप, चौड़े दरवाजे और सुलभ लिफ्ट की व्यवस्था।",
          badge: "सुलभ पहुंच",
          features: ["स्टेप-फ्री रैंप प्रवेश", "चौड़े दरवाजों वाली ऑपरेटरियां", "सहायता युक्त व्हीलचेयर सेवा"]
        };
      case 'parking':
        return {
          ...facility,
          title: "मुफ्त वैलेट व कार पार्किंग",
          shortDesc: "अस्पताल के सामने ही सीसीटीवी निगरानी युक्त समर्पित और सुरक्षित पार्किंग क्षेत्र।",
          badge: "मुफ्त पार्किंग",
          features: ["समर्पित आगंतुक पार्किंग", "CCTV कैमरा निगरानी", "वैलेट पार्किंग सहायता"]
        };
      case 'clean-hygiene':
        return {
          ...facility,
          title: "सख्त स्वच्छता व सैनिटाइजेशन",
          shortDesc: "हर मरीज के बाद सतह का संपूर्ण कीटाणुशोधन और टचलेस सैनिटाइजर स्टेशन।",
          badge: "स्वच्छता प्रमाणित",
          features: ["प्रत्येक मरीज के बाद सैनिटाइजेशन", "मेडिकल वेस्ट सेग्रिगेशन", "टचलेस सैनिटाइजर"]
        };
      default:
        return facility;
    }
  };

  return (
    <section id="facilities" className="py-12 sm:py-24 bg-white dark:bg-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            {t('facilities_badge', 'Hospital Infrastructure')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-3">
            {t('facilities_title', 'Modern Facilities for Comfortable Dental Care')}
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('facilities_subtitle', 'Designed for sterile safety, unmatched clinical precision, and maximum patient relaxation.')}
          </p>
        </ScrollReveal>

        {/* Featured Visual Showcase Carousel / Tabs */}
        <ScrollReveal animation="zoom-in" delay={100} className="mb-10 sm:mb-16 bg-slate-900 dark:bg-[#0c1e33] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 text-white shadow-xl overflow-hidden relative border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Visual Preview */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg">
                <img
                  src={featuredVisuals[activePhoto].image}
                  alt={featuredVisuals[activePhoto].title}
                  className="w-full h-full object-cover transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-500 text-slate-950 text-[10px] sm:text-xs font-bold tracking-wide">
                  {featuredVisuals[activePhoto].tag}
                </span>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-base sm:text-xl font-bold font-heading text-white">
                    {featuredVisuals[activePhoto].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 line-clamp-2">
                    {featuredVisuals[activePhoto].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Selection Switcher on Right */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-400">
                  {isHindi ? 'सुविधा का चयन करें' : 'Select Visual Preview'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {activePhoto + 1} of {featuredVisuals.length}
                </span>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                {featuredVisuals.map((visual, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhoto(idx)}
                    className={`text-left p-2.5 sm:p-3.5 rounded-xl transition-all cursor-pointer flex flex-col lg:flex-row items-start gap-2 lg:gap-3.5 ${
                      activePhoto === idx
                        ? 'bg-white/20 border border-sky-400/60 shadow-xs text-white'
                        : 'bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      activePhoto === idx ? 'bg-sky-400 text-slate-950' : 'bg-white/10 text-slate-400'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold truncate">
                        {visual.title}
                      </h4>
                      <p className="hidden lg:block text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {visual.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* 12 Hospital Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
          {FACILITIES.map((rawFacility, idx) => {
            const facility = getLocalizedFacility(rawFacility);
            const Icon = facilityIconMap[facility.icon] || LayoutGrid;

            return (
              <ScrollReveal
                key={facility.id}
                animation="fade-up"
                delay={(idx % 4) * 60}
                className="bg-slate-50/70 dark:bg-[#0c1e33] hover:bg-white dark:hover:bg-[#0e243d] rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 hover:border-teal-300 dark:hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center border border-teal-100 dark:border-teal-800">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-100 dark:border-teal-800">
                      {facility.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0b1f36] dark:text-white mb-1 font-heading">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {facility.shortDesc}
                  </p>
                </div>

                {facility.features && (
                  <div className="pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-1">
                    {facility.features.slice(0, 2).map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <CheckCircle className="w-3 h-3 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
