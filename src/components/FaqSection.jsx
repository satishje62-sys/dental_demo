import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS, HOSPITAL_INFO } from '../data/dentalData';

export default function FaqSection({ onBookClick }) {
  const [openId, setOpenId] = useState(FAQS[0].id);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Helpful answers to common questions our patients have before visiting SmileCare Dental Hospital.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-200 bg-blue-50/20 shadow-xs'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold font-heading ${
                    isOpen ? 'text-blue-900' : 'text-[#0b1f36]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-blue-100 text-blue-700 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#0b1f36]">
              Still have questions about your oral health?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Speak directly with our clinical patient coordinator on call or WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#0f2b48] bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Us</span>
            </a>
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0f2b48] hover:bg-[#0b1f36] transition-colors cursor-pointer"
            >
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
