import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/dentalData';

export default function BeforeAfterSection({ onBookClick }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = BEFORE_AFTER_ITEMS[activeTab];

  return (
    <section className="py-12 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2.5">
            Clinical Results
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-3">
            Before & After Transformations
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real aesthetic transformations completed at SmileCare Dental Hospital using gentle, minimally invasive dental techniques.
          </p>
        </div>

        {/* Category Tabs (Horizontally scrollable on mobile without ugly scrollbar) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-6 sm:mb-10 overflow-x-auto no-scrollbar pb-1 px-1">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeTab === idx
                  ? 'bg-[#0f2b48] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Main Transformation Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Visual Frame */}
            <div className="lg:col-span-8">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-slate-100 aspect-16/9 bg-slate-100">
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
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-600 block mb-1">
                  {activeItem.category} Case
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0b1f36] font-heading mb-1.5">
                  {activeItem.title}
                </h3>
                <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg inline-block mb-2.5">
                  {activeItem.caseInfo}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {activeItem.description}
                </p>
                <div className="text-xs text-slate-500 font-medium mb-4 sm:mb-6">
                  <strong>Treatment Time:</strong> {activeItem.treatmentDuration}
                </div>
              </div>

              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] active:from-[#0b1f36] shadow-sm transition-all text-center cursor-pointer"
              >
                Consult on Your Smile
              </button>
            </div>

          </div>

          {/* Mandatory Medical Disclaimer */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 flex items-start gap-2 text-[11px] sm:text-xs text-slate-500">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>Important Note:</strong> Treatment results may vary from patient to patient depending on individual oral anatomy, bone density, and compliance with clinical care advice.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
