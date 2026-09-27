import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/dentalData';
import { HINDI_DATA } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function BeforeAfterSection({ onBookClick }) {
  const [activeTab, setActiveTab] = useState(0);
  const { t, isHindi } = useLanguage();
  const items = isHindi ? HINDI_DATA.beforeAfter : BEFORE_AFTER_ITEMS;
  const activeItem = items[activeTab] || items[0];

  return (
    <section className="py-12 sm:py-24 bg-slate-50/70 dark:bg-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            {t('ba_badge', 'Clinical Results')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-3">
            {t('ba_title', 'Before & After Transformations')}
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('ba_subtitle', 'Real aesthetic transformations completed at SmileCare Dental Hospital using gentle, minimally invasive dental techniques.')}
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal animation="fade-up" delay={100} className="flex items-center justify-start sm:justify-center gap-2 mb-6 sm:mb-10 overflow-x-auto no-scrollbar pb-1 px-1">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeTab === idx
                  ? 'bg-[#0f2b48] dark:bg-sky-600 text-white shadow-sm'
                  : 'bg-white dark:bg-[#0c1e33] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {item.category}
            </button>
          ))}
        </ScrollReveal>

        {/* Main Transformation Card */}
        <ScrollReveal animation="zoom-in" delay={150} className="max-w-4xl mx-auto bg-white dark:bg-[#0c1e33] rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Visual Frame */}
            <div className="lg:col-span-8">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-slate-100 dark:border-slate-700 aspect-16/9 bg-slate-100 dark:bg-slate-800">
                <img
                  src={activeItem.image}
                  alt={`${activeItem.category} - Before and After clinical dental result`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                  {activeItem.category} Case
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0b1f36] dark:text-white font-heading mb-1.5">
                  {activeItem.title}
                </h3>
                <div className="text-xs font-semibold text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-lg inline-block mb-2.5">
                  {activeItem.caseInfo}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {activeItem.description}
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-4 sm:mb-6">
                  <strong>{t('ba_treatment_time', 'Treatment Time')}:</strong> {activeItem.treatmentDuration}
                </div>
              </div>

              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 active:from-[#0b1f36] shadow-sm transition-all text-center cursor-pointer"
              >
                {t('ba_consult_btn', 'Consult on Your Smile')}
              </button>
            </div>

          </div>

          {/* Mandatory Medical Disclaimer */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>{t('ba_disclaimer_label', 'Important Note:')}</strong> {t('ba_disclaimer_text', 'Treatment results may vary from patient to patient depending on individual oral anatomy, bone density, and compliance with clinical care advice.')}
            </p>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
