import React, { useEffect } from 'react';
import { X, Calendar, Clock, Award, CheckCircle2, MapPin, Globe, Star } from 'lucide-react';

export default function DoctorProfileModal({ doctor, isOpen, onClose, onBookDoctor }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-y-auto z-10 border border-slate-100 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/98 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-4 border-b border-slate-100 flex items-center justify-between z-20 shrink-0">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md">
            Doctor Profile
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 active:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* Header Card */}
          <div className="flex items-center gap-3.5 sm:gap-5 bg-slate-50 p-3.5 sm:p-5 rounded-2xl border border-slate-100">
            <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-white">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <h3 className="text-base sm:text-xl font-bold text-[#0b1f36] font-heading truncate">
                  {doctor.name}
                </h3>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200 shrink-0">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  {doctor.rating}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-blue-700 truncate">{doctor.role}</p>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">{doctor.qualification}</p>
              
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-500 font-medium mt-1">
                <span className="inline-flex items-center gap-1 text-teal-700">
                  <Award className="w-3 h-3 text-teal-600" />
                  {doctor.experience}
                </span>
                <span>•</span>
                <span className="truncate">{doctor.room}</span>
              </div>
            </div>
          </div>

          {/* About Specialist */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 mb-1.5 font-heading">
              About the Specialist
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Treatments Handled */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 mb-2 font-heading">
              Treatments Handled
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {doctor.treatmentsHandled.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timings */}
          <div className="bg-blue-50/70 p-3 sm:p-4 rounded-xl border border-blue-100 space-y-1.5 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#0b1f36] block">Consultation Hours:</span>
                <span>{doctor.timings}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Globe className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>Languages: {doctor.languages}</span>
            </div>
          </div>
        </div>

        {/* Sticky Mobile/Desktop Footer */}
        <div className="sticky bottom-0 bg-white/98 backdrop-blur-md p-3.5 sm:p-4 border-t border-slate-100 flex items-center justify-between gap-2 z-20 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="hidden sm:inline-block px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookDoctor(doctor.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] active:from-[#0b1f36] shadow-md shadow-blue-900/15 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-300" />
            <span>Book Appointment with {doctor.name.split(' ')[1]}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
