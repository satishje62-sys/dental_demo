import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Scan, 
  Armchair, 
  ShieldAlert, 
  Coffee, 
  Lock, 
  Cpu, 
  AlertCircle, 
  Pill, 
  Accessibility, 
  Car, 
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { FACILITIES } from '../data/dentalData';

const facilityIconMap = {
  LayoutGrid,
  Scan,
  Armchair,
  ShieldAlert,
  Coffee,
  Lock,
  Cpu,
  AlertCircle,
  Pill,
  Accessibility,
  Car,
  Sparkles,
};

export default function FacilitiesSection() {
  const [activePhoto, setActivePhoto] = useState(0);

  const featuredVisuals = [
    {
      title: "Digital 3D CBCT Imaging Suite",
      desc: "Ultra-low radiation 3D panoramic imaging for millimeter-precision nerve mapping and implant planning.",
      image: "/images/facility-xray.jpg",
      tag: "Advanced Diagnostics"
    },
    {
      title: "Class-B Sterilization Center",
      desc: "Hospital-grade autoclaves with vacuum cycles, barcode pouch tracking, and zero contamination protocols.",
      image: "/images/facility-sterilize.jpg",
      tag: "100% Sterile Protocol"
    },
    {
      title: "Patient Lounge & Consultation Suites",
      desc: "Warm hospitality, quiet consultation rooms, and private discussion chambers with zero medical stress.",
      image: "/images/clinic-interior.jpg",
      tag: "Hospitality & Privacy"
    }
  ];

  return (
    <section id="facilities" className="py-12 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2.5">
            Hospital Infrastructure
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-3">
            Modern Facilities for Comfortable Dental Care
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every square foot of SmileCare Dental Hospital is thoughtfully engineered to give patients world-class hygiene, ergonomic comfort, and state-of-the-art dental care.
          </p>
        </div>

        {/* Featured Visual Showcase Carousel / Tabs */}
        <div className="mb-10 sm:mb-16 bg-slate-900 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 text-white shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Visual Preview */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg">
                <img
                  src={featuredVisuals[activePhoto].image}
                  alt={featuredVisuals[activePhoto].title}
                  className="w-full h-full object-cover transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-teal-500 text-slate-950 text-[10px] sm:text-xs font-bold tracking-wide">
                  {featuredVisuals[activePhoto].tag}
                </span>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-base sm:text-xl font-bold font-heading text-white">
                    {featuredVisuals[activePhoto].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 line-clamp-2">
                    {featuredVisuals[activePhoto].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Selection Switcher on Right (Mobile Thumb Buttons) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-400">
                  Select Visual Preview
                </span>
                <span className="text-[10px] text-slate-400">
                  {activePhoto + 1} of {featuredVisuals.length}
                </span>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                {featuredVisuals.map((visual, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhoto(idx)}
                    className={`text-left p-2.5 sm:p-3.5 rounded-xl transition-all cursor-pointer flex flex-col lg:flex-row items-start gap-2 lg:gap-3.5 ${
                      activePhoto === idx
                        ? 'bg-white/20 border border-sky-400/60 shadow-xs text-white'
                        : 'bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      activePhoto === idx ? 'bg-sky-400 text-slate-950' : 'bg-white/10 text-slate-400'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold truncate">
                        {visual.title}
                      </h4>
                      <p className="hidden lg:block text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {visual.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 12 Hospital Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
          {FACILITIES.map((facility) => {
            const Icon = facilityIconMap[facility.icon] || LayoutGrid;

            return (
              <div
                key={facility.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                      {facility.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0b1f36] mb-1 font-heading">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {facility.shortDesc}
                  </p>
                </div>

                {facility.features && (
                  <div className="pt-2.5 border-t border-slate-200/60 space-y-1">
                    {facility.features.slice(0, 2).map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <CheckCircle className="w-3 h-3 text-teal-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
