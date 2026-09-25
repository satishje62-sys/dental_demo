import React from 'react';
import { CalendarCheck, UserCheck, FileSearch, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/dentalData';

const iconMap = {
  CalendarCheck,
  UserCheck,
  FileSearch,
  Sparkles,
};

export default function HowItWorks({ onBookClick }) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Patient Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-4">
            Your Visit Made Simple
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Visiting a dental hospital shouldn't be complicated or stressful. Here is what to expect from your very first appointment with us.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {HOW_IT_WORKS.map((step, idx) => {
            const Icon = iconMap[step.icon] || CalendarCheck;

            return (
              <div
                key={step.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-slate-200 font-mono group-hover:text-blue-600 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-[#0f2b48] text-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0b1f36] mb-2.5 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-sky-600">
                  <span>Step {step.step} of 04</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Quick reassuring bottom bar */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 mb-4">
            Need urgent relief or have dental anxiety? Let our reception team know—we offer special gentle care protocols.
          </p>
          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#0f2b48] hover:bg-[#0b1f36] shadow-sm transition-all cursor-pointer"
          >
            <span>Start Your Simple Visit</span>
            <ArrowRight className="w-4 h-4 text-sky-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
