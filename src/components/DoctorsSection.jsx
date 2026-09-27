import React from 'react';
import { Award, Calendar, Star, Clock } from 'lucide-react';
import { DOCTORS } from '../data/dentalData';
import { HINDI_DATA } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function DoctorsSection({ onSelectDoctor, onBookDoctor }) {
  const { t, isHindi } = useLanguage();
  const doctorsList = isHindi ? HINDI_DATA.doctors : DOCTORS;

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-white dark:bg-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            {t('doctors_badge', 'Our Medical Specialists')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-4">
            {t('doctors_title', 'Meet Our Senior Dental Specialists')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('doctors_subtitle', 'MDS qualified surgeons, implantologists, and orthodontists with over 10+ years of dedicated clinical experience.')}
          </p>
        </ScrollReveal>

        {/* 3 Doctor Cards Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsList.map((doc, idx) => (
            <ScrollReveal
              key={doc.id}
              animation="fade-up"
              delay={idx * 100}
              className="bg-white dark:bg-[#0c1e33] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-sky-500 shadow-sm hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
            >
              {/* Doctor Photo Frame */}
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={doc.photo}
                  alt={`${doc.name} - ${doc.specialty}`}
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-1.5 text-xs font-bold text-[#0b1f36] dark:text-white">
                  <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>{doc.experience}</span>
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-[#0f2b48]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{doc.rating}</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0b1f36] dark:text-white font-heading mb-1 group-hover:text-blue-700 dark:group-hover:text-sky-400 transition-colors">
                    {doc.name}
                  </h3>
                  <div className="text-sm font-semibold text-blue-700 dark:text-sky-400 mb-1">
                    {doc.role.split('&')[0].trim()}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
                    {doc.qualification}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {doc.bio}
                  </p>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#081729] p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-1.5 mb-5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span className="truncate">{doc.timings}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectDoctor(doc)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300 hover:bg-blue-50/50 dark:hover:bg-sky-950/40 transition-colors text-center cursor-pointer"
                  >
                    {t('doctors_view_profile', 'View Profile')}
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookDoctor(doc.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 hover:from-[#0b1f36] hover:to-[#153860] shadow-sm transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-300" />
                    <span>{t('book_appointment', 'Book')}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
