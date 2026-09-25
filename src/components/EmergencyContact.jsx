import React from 'react';
import { PhoneCall, MessageSquare, AlertCircle, Clock, ShieldAlert } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export default function EmergencyContact() {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-r from-[#0b1f36] via-[#0f2b48] to-[#153860] text-white relative overflow-hidden">
      {/* Decorative aura */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-10 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-[11px] font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span>Urgent Dental Attention</span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight mb-2 sm:mb-3">
                Need Urgent Dental Care?
              </h2>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal mb-3 sm:mb-4">
                For urgent dental concerns, contact our hospital directly. Whether you are dealing with severe acute toothache, a broken restoration, or a dental injury, our clinical team is ready to assist.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-sky-200">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-400" /> Fast-track priority triage
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-teal-400" /> Immediate Pain Relief Protocols
                </span>
              </div>
            </div>

            {/* Right Buttons: Full width on mobile */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-base text-slate-950 bg-white active:bg-slate-100 shadow-md transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                <span>Call Now: {HOSPITAL_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-base text-white bg-emerald-600 active:bg-emerald-700 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Safety Guidance Note */}
          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] sm:text-xs text-slate-400 text-center lg:text-left flex items-start justify-center lg:justify-start gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p>
              Dental guidance: In case of dental avulsion (knocked-out tooth), gently place tooth back in socket or submerge in clean cold milk and reach our hospital within 60 minutes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
