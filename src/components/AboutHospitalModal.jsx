import React from 'react';
import { X, ShieldCheck, Award, Heart, CheckCircle2, Building, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export default function AboutHospitalModal({ isOpen, onClose, onBookClick }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md">
              Hospital Overview
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f36] font-heading mt-1">
              About SmileCare Dental Hospital
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="rounded-2xl overflow-hidden aspect-16/9 bg-slate-100 shadow-inner">
            <img
              src="/images/clinic-interior.jpg"
              alt="SmileCare interior lounge"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="text-base font-bold text-[#0b1f36] font-heading mb-2">
              Our Clinical Philosophy
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded with the vision to provide painless, transparent, and international-standard dental healthcare in Patna, SmileCare Dental Hospital combines cutting-edge dental technology with gentle human empathy. We believe healthy smiles build confident lives.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-[#0b1f36]">NABH Protocols</h5>
              <p className="text-[11px] text-slate-500 mt-1">Strict sterilization & patient safety adherence</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-2">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-[#0b1f36]">MDS Specialists</h5>
              <p className="text-[11px] text-slate-500 mt-1">Certified surgeons & orthodontists only</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-[#0b1f36]">Painless Approach</h5>
              <p className="text-[11px] text-slate-500 mt-1">Specialized protocols for anxious patients</p>
            </div>
          </div>

          {/* Patient Commitments */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-3 font-heading">
              Our Patient Charter
            </h4>
            <div className="space-y-2">
              {[
                "100% sterile instrument pouch opened directly in front of the patient",
                "Complete written cost estimate provided before initiating any dental procedure",
                "Zero unnecessary treatments or aggressive commercial sales pitches",
                "Full explanation of digital X-rays and intraoral photos on high-resolution screens",
                "Continuous post-treatment follow-up and emergency availability"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md p-4 sm:p-5 border-t border-slate-100 flex items-center justify-between gap-3 z-20">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#0f2b48] hover:bg-[#0b1f36] shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-300" />
            <span>Book Your Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
