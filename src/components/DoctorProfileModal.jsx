import React, { useEffect } from 'react';
import { X, Calendar, Award, CheckCircle2, Star, Clock } from 'lucide-react';
import { HINDI_DATA } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';

export default function DoctorProfileModal({ doctor, isOpen, onClose, onBookDoctor }) {
  const { t, isHindi } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !doctor) return null;

  // Localized doctor data
  const hindiDoctor = isHindi && HINDI_DATA.doctors.find(d => d.id === doctor.id);
  const docName = hindiDoctor ? hindiDoctor.name : doctor.name;
  const docRole = hindiDoctor ? hindiDoctor.role : doctor.role;
  const docSpecialty = hindiDoctor ? hindiDoctor.specialty : doctor.specialty;
  const docQualification = hindiDoctor ? hindiDoctor.qualification : doctor.qualification;
  const docExperience = hindiDoctor ? hindiDoctor.experience : doctor.experience;
  const docBio = hindiDoctor ? hindiDoctor.bio : doctor.bio;
  const docTreatments = hindiDoctor ? hindiDoctor.treatmentsHandled : doctor.treatmentsHandled;
  const docTimings = hindiDoctor ? hindiDoctor.timings : doctor.timings;
  const docRoom = hindiDoctor ? hindiDoctor.room : doctor.room;
  const docLanguages = hindiDoctor ? hindiDoctor.languages : doctor.languages;

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
        <div className="sticky top-0 bg-white/98 dark:bg-[#0c1e33]/98 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between z-20 shrink-0">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-md border border-blue-200/50 dark:border-sky-800/60">
            {t('doctors_view_profile', 'Doctor Profile')}
          </span>
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
          {/* Header Card */}
          <div className="flex items-center gap-3.5 sm:gap-5 bg-slate-50 dark:bg-[#081729] p-3.5 sm:p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-white dark:border-slate-700">
              <img
                src={doctor.photo}
                alt={docName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <h3 className="text-base sm:text-xl font-bold text-[#0b1f36] dark:text-white font-heading truncate">
                  {docName}
                </h3>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/60 shrink-0">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  {doctor.rating}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-sky-400 truncate">{docRole}</p>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium truncate">{docQualification}</p>
              
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                <span className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400">
                  <Award className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                  {docExperience}
                </span>
                <span>•</span>
                <span className="truncate">{docRoom}</span>
              </div>
            </div>
          </div>

          {/* About Specialist */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-sky-300 mb-1.5 font-heading">
              {t('modal_about_specialist', 'About the Specialist')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {docBio}
            </p>
          </div>

          {/* Treatments Handled */}
          {docTreatments && docTreatments.length > 0 && (
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-sky-300 mb-2 font-heading">
                {t('modal_treatments_handled', 'Treatments Handled')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                {docTreatments.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-[#081729] border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timings */}
          <div className="p-3.5 bg-slate-50 dark:bg-[#081729] rounded-xl border border-slate-100 dark:border-slate-800 space-y-1 text-xs">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold">
              <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>{t('modal_consultation_timings', 'OPD Consultation Timings')}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 pl-6">{docTimings}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-6">
              <strong>{t('modal_languages_spoken', 'Languages')}:</strong> {docLanguages}
            </p>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white/98 dark:bg-[#0c1e33]/98 backdrop-blur-md p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 z-20 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookDoctor(docName);
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 active:from-[#0b1f36] shadow-md shadow-blue-900/15 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-300" />
            <span>{isHindi ? `डॉ. के साथ परामर्श बुक करें: ${docName}` : `Book Consultation with ${docName}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
