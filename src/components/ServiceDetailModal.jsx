import React, { useEffect } from 'react';
import { X, Clock, ShieldCheck, CheckCircle2, HelpCircle, Calendar } from 'lucide-react';
import { HINDI_DATA } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServiceDetailModal({ service, isOpen, onClose, onBookService }) {
  const { t, isHindi } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !service) return null;

  // Localized data
  const hindiDetail = isHindi && HINDI_DATA.servicesDetail[service.id];
  const localizedTitle = hindiDetail ? hindiDetail.title : service.title;
  const localizedBadge = hindiDetail ? hindiDetail.badge : (service.badge || "Clinical Service");
  const localizedTagline = hindiDetail ? hindiDetail.tagline : service.tagline;
  const localizedShortDesc = hindiDetail ? hindiDetail.shortDesc : service.shortDesc;
  const localizedDuration = hindiDetail ? hindiDetail.duration : service.duration;
  const localizedRecovery = hindiDetail ? hindiDetail.recovery : service.recovery;
  const localizedWhyNeeded = hindiDetail ? hindiDetail.whyNeeded : service.whyNeeded;
  const localizedProcedure = hindiDetail ? hindiDetail.procedure : service.procedure;
  const localizedFaqs = hindiDetail ? hindiDetail.faqs : service.faqs;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-[#0c1e33] rounded-t-3xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-y-auto z-10 border border-slate-100 dark:border-slate-800 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/98 dark:bg-[#0c1e33]/98 backdrop-blur-md px-5 py-3.5 sm:px-6 sm:py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between z-20 shrink-0">
          <div>
            <span className="inline-block px-2 py-0.5 rounded-full bg-blue-100 dark:bg-sky-950/60 text-blue-800 dark:text-sky-300 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase mb-0.5 border border-blue-200/50 dark:border-sky-800/60">
              {localizedBadge}
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-[#0b1f36] dark:text-white font-heading leading-tight">
              {localizedTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* Service Image Preview */}
          {service.image && (
            <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-slate-100 dark:bg-slate-800 shadow-xs border border-slate-100 dark:border-slate-700">
              <img
                src={service.image}
                alt={localizedTitle}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 bg-slate-50 dark:bg-[#081729] p-3 rounded-xl sm:rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100/70 dark:bg-sky-900/40 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{t('modal_duration', 'Duration')}</div>
                <div className="text-xs sm:text-sm font-bold text-[#0b1f36] dark:text-white leading-tight">{localizedDuration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-100/70 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{t('modal_recovery', 'Recovery')}</div>
                <div className="text-xs sm:text-sm font-bold text-[#0b1f36] dark:text-white leading-tight">{localizedRecovery}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-sky-300 mb-1.5 font-heading">
              {t('modal_what_is', 'What Is This Treatment?')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {localizedShortDesc} {isHindi ? "स्माइलकेयर डेंटल हॉस्पिटल में यह उपचार आधुनिक व कोमल तकनीकों द्वारा आपके प्राकृतिक दांतों को बचाने और दीर्घकालिक मौखिक स्वास्थ्य सुनिश्चित करने के लिए किया जाता है।" : "At SmileCare Dental Hospital, our treatment focuses on preserving your natural teeth, eliminating infection or aesthetic flaws, and ensuring long-lasting oral function using precision techniques."}
            </p>
          </div>

          {/* Why It May Be Needed */}
          {localizedWhyNeeded && localizedWhyNeeded.length > 0 && (
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-sky-300 mb-2 font-heading">
                {t('modal_why_need', 'Why You May Need This Treatment')}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {localizedWhyNeeded.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Treatment Process */}
          {localizedProcedure && localizedProcedure.length > 0 && (
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-sky-300 mb-2 font-heading">
                {t('modal_procedure_steps', 'Step-by-Step Treatment Process')}
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {localizedProcedure.map((step, idx) => (
                  <div key={idx} className="flex gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#081729] border border-slate-100 dark:border-slate-800">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-700 dark:bg-sky-600 text-white text-[11px] font-bold shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#0b1f36] dark:text-white">{step.title}</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {localizedFaqs && localizedFaqs.length > 0 && (
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-sky-300 mb-2 font-heading flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{t('modal_treatment_faqs', 'Frequently Asked Questions')}</span>
              </h4>
              <div className="space-y-2">
                {localizedFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-blue-50/50 dark:bg-[#081729] p-3 rounded-xl border border-blue-100/60 dark:border-slate-800">
                    <p className="text-xs font-bold text-[#0b1f36] dark:text-white mb-1">{faq.q}</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white/98 dark:bg-[#0c1e33]/98 backdrop-blur-md p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 z-20 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService(localizedTitle);
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 active:from-[#0b1f36] shadow-md shadow-blue-900/15 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-300" />
            <span>{isHindi ? `यह उपचार बुक करें: ${localizedTitle}` : `Book Appointment for ${localizedTitle}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
