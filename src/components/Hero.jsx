import React from 'react';
import { Calendar, ArrowRight, Star, ShieldCheck, Award, Users, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import CountUp from './CountUp';

export default function Hero({ onBookClick, onExploreServices }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-4 pb-12 sm:pt-10 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-[#071322] dark:via-[#071322] dark:to-[#071322]">
      {/* Subtle Background Glow with Gentle Pulse */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 sm:h-96 bg-gradient-to-r from-blue-200/20 via-sky-200/30 to-teal-100/20 dark:from-blue-900/20 dark:via-sky-900/20 dark:to-teal-900/10 blur-3xl -z-10 pointer-events-none rounded-full animate-pulse-soft" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <ScrollReveal animation="fade-down" delay={50}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-sky-300 text-xs font-semibold mb-4 sm:mb-6 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-700 dark:text-sky-400" />
                <span>{t('hero_badge', 'Trusted Dental Hospital')}</span>
              </div>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal animation="fade-up" delay={120}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0b1f36] dark:text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
                {t('hero_title_prefix', 'Complete Dental Care for a ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 dark:from-sky-400 dark:via-teal-300 dark:to-blue-400 block sm:inline">
                  {t('hero_title_highlight', 'Healthier, Confident Smile')}
                </span>
              </h1>
            </ScrollReveal>

            {/* Supporting Text */}
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 font-normal max-w-2xl">
                {t('hero_desc', 'From routine dental checkups to advanced treatments, experience modern dental care in a comfortable and patient-friendly environment.')}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-up" delay={260} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 hover:from-[#0b1f36] hover:to-[#153860] active:scale-[0.98] shadow-md shadow-blue-950/20 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                  <span>{t('hero_btn_book', 'Book an Appointment')}</span>
                </button>

                <button
                  type="button"
                  onClick={onExploreServices}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#0f2b48] dark:text-slate-200 bg-white dark:bg-[#0c1e33] border border-slate-200 dark:border-slate-700 hover:bg-blue-50/50 dark:hover:bg-[#132a45] active:bg-slate-100 shadow-xs transition-all cursor-pointer"
                >
                  <span>{t('hero_btn_explore', 'Explore Our Services')}</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                </button>
              </div>
            </ScrollReveal>

            {/* Reassurance Chips */}
            <ScrollReveal animation="fade-up" delay={320} className="w-full">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-200/80 dark:border-slate-800 w-full">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{t('hero_chip_painless', 'Painless Anesthesia')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{t('hero_chip_sterilization', 'Class-B Sterilization')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{t('hero_chip_transparency', 'Zero Hidden Fees')}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Trust Indicators Grid with CountUp Animation */}
            <ScrollReveal animation="fade-up" delay={380} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full">
                <div className="bg-slate-50/80 dark:bg-[#0c1e33] sm:bg-transparent dark:sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 dark:border-slate-800">
                  <div className="text-xl sm:text-3xl font-extrabold text-[#0b1f36] dark:text-white tracking-tight">
                    <CountUp end={10} suffix="+" duration={1600} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{t('hero_stat_exp', 'Years Experience')}</div>
                </div>

                <div className="bg-slate-50/80 dark:bg-[#0c1e33] sm:bg-transparent dark:sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 dark:border-slate-800">
                  <div className="text-xl sm:text-3xl font-extrabold text-[#0b1f36] dark:text-white tracking-tight">
                    <CountUp end={10000} suffix="+" duration={2000} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{t('hero_stat_patients', 'Patients Treated')}</div>
                </div>

                <div className="bg-slate-50/80 dark:bg-[#0c1e33] sm:bg-transparent dark:sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 dark:border-slate-800">
                  <div className="text-xl sm:text-3xl font-extrabold text-[#0b1f36] dark:text-white tracking-tight">
                    <CountUp end={15} suffix="+" duration={1600} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{t('hero_stat_services', 'Dental Services')}</div>
                </div>

                <div className="bg-slate-50/80 dark:bg-[#0c1e33] sm:bg-transparent dark:sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1 text-xl sm:text-3xl font-extrabold text-[#0b1f36] dark:text-white tracking-tight">
                    <CountUp end={4.9} decimals={1} suffix="/5" duration={1600} />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 inline" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{t('hero_stat_rating', 'Patient Rating')}</div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Hero Image with Responsive Floating Cards & Parallax Feel */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0">
            <ScrollReveal animation="zoom-in" delay={200}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Outer decorative card */}
                <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-blue-200/50 via-white to-sky-100/60 dark:from-blue-900/40 dark:via-[#0c1e33] dark:to-sky-900/30 shadow-xl shadow-blue-900/10">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-4/3 shadow-inner">
                    <img
                      src="/images/hero-dentist.jpg"
                      alt="Dentist treating patient in modern dental hospital"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f36]/50 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Bottom Image Caption */}
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-white/80 dark:border-slate-700 shadow-xs flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-bold text-[#0b1f36] dark:text-white">{t('about_feature_1_title', 'Painless Operatory Suite')}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Sterile
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Cards (Mobile) */}
                <div className="mt-3 grid grid-cols-2 sm:hidden gap-2">
                  <div className="bg-white dark:bg-[#0c1e33] p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#0b1f36] dark:text-white leading-tight">Modern Tech</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">3D CBCT Scans</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#0c1e33] p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#0b1f36] dark:text-white leading-tight">MDS Doctors</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">10+ Yrs Exp</div>
                    </div>
                  </div>
                </div>

                {/* Desktop Absolute Floating Cards with Gentle Continuous Floating Animation */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-blue-950/10 items-center gap-3 animate-float-gentle">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center shadow-xs">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0b1f36] dark:text-white">Modern Equipment</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">3D CBCT & Low Radiation</div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-blue-950/10 items-center gap-3 animate-float-reverse">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shadow-xs">
                    <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0b1f36] dark:text-white">Experienced Specialists</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">MDS Dental Surgeons</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

