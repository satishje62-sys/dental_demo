import React, { useEffect } from 'react';
import { X, Clock, ShieldCheck, CheckCircle2, HelpCircle, Calendar, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ service, isOpen, onClose, onBookService }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog (Bottom-sheet on mobile, Centered on Desktop) */}
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-y-auto z-10 border border-slate-100 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/98 backdrop-blur-md px-5 py-3.5 sm:px-6 sm:py-4 border-b border-slate-100 flex items-center justify-between z-20 shrink-0">
          <div>
            <span className="inline-block px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase mb-0.5">
              {service.badge || "Clinical Service"}
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-[#0b1f36] font-heading leading-tight">
              {service.title}
            </h3>
          </div>
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
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 bg-slate-50 p-3 rounded-xl sm:rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Duration</div>
                <div className="text-xs sm:text-sm font-bold text-[#0b1f36] leading-tight">{service.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium">Recovery</div>
                <div className="text-xs sm:text-sm font-bold text-[#0b1f36] leading-tight">{service.recovery}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 mb-1.5 font-heading">
              What Is This Treatment?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {service.shortDesc} At SmileCare Dental Hospital, our treatment focuses on preserving your natural teeth, eliminating infection or aesthetic flaws, and ensuring long-lasting oral function using precision techniques.
            </p>
          </div>

          {/* Why It May Be Needed */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 mb-2 font-heading">
              Why You May Need This Treatment
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {service.whyNeeded.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Process */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 mb-2 font-heading">
              Step-by-Step Treatment Process
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {service.procedure.map((step, idx) => (
                <div key={idx} className="flex gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-700 text-white text-[11px] font-bold shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#0b1f36]">{step.title}</h5>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 mb-2 font-heading flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-2">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-blue-50/50 p-3 rounded-xl border border-blue-100/60">
                    <p className="text-xs font-bold text-[#0b1f36] mb-1">{faq.q}</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Mobile/Desktop Footer */}
        <div className="sticky bottom-0 bg-white/98 backdrop-blur-md p-3.5 sm:p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 z-20 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] active:from-[#0b1f36] shadow-md shadow-blue-900/15 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-300" />
            <span>Book Appointment for {service.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
