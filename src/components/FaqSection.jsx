import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS, HOSPITAL_INFO } from '../data/dentalData';
import { HINDI_DATA } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';

export default function FaqSection({ onBookClick }) {
  const { t, isHindi } = useLanguage();
  const faqList = isHindi ? HINDI_DATA.faqs : FAQS;
  const [openId, setOpenId] = useState(faqList[0]?.id || 'faq-1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white dark:bg-[#071322] relative transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            {t('faq_badge', 'Got Questions?')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-4">
            {t('faq_title', 'Frequently Asked Questions')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('faq_subtitle', 'Helpful answers to common questions our patients have before visiting SmileCare Dental Hospital.')}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 dark:border-sky-500 bg-blue-50/30 dark:bg-sky-950/30 shadow-xs'
                    : 'border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-[#0c1e33] hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-800/50"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold font-heading ${
                    isOpen ? 'text-blue-900 dark:text-sky-300' : 'text-[#0b1f36] dark:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? 'bg-blue-100 dark:bg-sky-900/60 text-blue-700 dark:text-sky-300 rotate-180' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-50 dark:bg-[#0c1e33] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#0b1f36] dark:text-white">
              {t('faq_still_title', 'Still have questions about your oral health?')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
              {t('faq_still_desc', 'Speak directly with our clinical patient coordinator on call or WhatsApp.')}
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#0f2b48] dark:text-sky-300 bg-white dark:bg-[#081729] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>{t('faq_call_btn', 'Call Us')}</span>
            </a>
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0f2b48] dark:bg-sky-600 hover:bg-[#0b1f36] dark:hover:bg-sky-700 transition-colors cursor-pointer"
            >
              <span>{t('book_appointment', 'Book Appointment')}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
