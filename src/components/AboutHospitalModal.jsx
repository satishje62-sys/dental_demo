import React from 'react';
import { X, ShieldCheck, Award, Heart, CheckCircle2, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutHospitalModal({ isOpen, onClose, onBookClick }) {
  const { t, isHindi } = useLanguage();

  if (!isOpen) return null;

  const charterItems = isHindi ? [
    "प्रत्येक मरीज के सामने खोला जाने वाला 100% सीलबंद व स्टराइल उपकरण पाउच",
    "उपचार शुरू होने से पहले स्पष्ट लिखित खर्च और समय का विवरण",
    "कोई अनावश्यक इलाज नहीं और 100% पारदर्शी चिकित्सीय सलाह",
    "बड़ी स्क्रीन पर डिजिटल एक्स-रे और दांतों की स्थिति का स्पष्ट प्रदर्शन",
    "उपचार के बाद निरंतर देखभाल, फॉलो-अप और 24/7 आपातकालीन सहायता"
  ] : [
    "100% sterile instrument pouch opened directly in front of the patient",
    "Complete written cost estimate provided before initiating any dental procedure",
    "Zero unnecessary treatments or aggressive commercial sales pitches",
    "Full explanation of digital X-rays and intraoral photos on high-resolution screens",
    "Continuous post-treatment follow-up and emergency availability"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-[#0c1e33] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 border border-slate-100 dark:border-slate-800 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between z-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-md border border-blue-200/50 dark:border-sky-800/60">
              {t('about_badge', 'Hospital Overview')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f36] dark:text-white font-heading mt-1">
              {isHindi ? "स्माइलकेयर डेंटल हॉस्पिटल के बारे में" : "About SmileCare Dental Hospital"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="rounded-2xl overflow-hidden aspect-16/9 bg-slate-100 dark:bg-slate-800 shadow-inner">
            <img
              src="/images/clinic-interior.jpg"
              alt="SmileCare interior lounge"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="text-base font-bold text-[#0b1f36] dark:text-white font-heading mb-2">
              {isHindi ? "हमारा क्लीनिकल दृष्टिकोण" : "Our Clinical Philosophy"}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isHindi 
                ? "पटना में अंतरराष्ट्रीय स्तर की, दर्द-रहित और पारदर्शी दंत चिकित्सा प्रदान करने के उद्देश्य से स्थापित, स्माइलकेयर डेंटल हॉस्पिटल आधुनिक तकनीक और आत्मीय देखभाल का संगम है। हमारा मानना है कि एक स्वस्थ मुस्कान आत्मविश्वास से भरे जीवन का आधार है।"
                : "Founded with the vision to provide painless, transparent, and international-standard dental healthcare in Patna, SmileCare Dental Hospital combines cutting-edge dental technology with gentle human empathy. We believe healthy smiles build confident lives."}
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#081729] border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-sky-900/40 text-blue-700 dark:text-sky-400 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-[#0b1f36] dark:text-white">{isHindi ? "NABH मानक" : "NABH Protocols"}</h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{isHindi ? "कठोर स्वच्छता और सुरक्षा मानक" : "Strict sterilization & patient safety adherence"}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#081729] border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-9 h-9 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 flex items-center justify-center mx-auto mb-2">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-[#0b1f36] dark:text-white">{isHindi ? "MDS विशेषज्ञ डॉक्टर्स" : "MDS Specialists"}</h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{isHindi ? "केवल प्रमाणित सर्जन और ऑर्थोडॉन्टिस्ट" : "Certified surgeons & orthodontists only"}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#081729] border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-9 h-9 rounded-lg bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-[#0b1f36] dark:text-white">{isHindi ? "100% दर्द-रहित" : "Painless Approach"}</h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{isHindi ? "डर व दर्द से मुक्त विशेष प्रोटोकॉल" : "Specialized protocols for anxious patients"}</p>
            </div>
          </div>

          {/* Patient Commitments */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-sky-300 mb-3 font-heading">
              {isHindi ? "मरीजों के प्रति हमारा संकल्प" : "Our Patient Charter"}
            </h4>
            <div className="space-y-2">
              {charterItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 bg-slate-50 dark:bg-[#081729] rounded-b-3xl">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-sky-300" />
            <span>{t('book_appointment', 'Book Appointment')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
