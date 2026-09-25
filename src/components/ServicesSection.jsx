import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Anchor, 
  Sparkles, 
  Smile, 
  Gem, 
  HeartHandshake, 
  Cpu, 
  ArrowRight, 
  Calendar,
  Clock
} from 'lucide-react';
import { SERVICES } from '../data/dentalData';

const iconMap = {
  ShieldCheck,
  Activity,
  Anchor,
  Sparkles,
  Smile,
  Gem,
  HeartHandshake,
  Cpu,
};

export default function ServicesSection({ onSelectService, onBookService }) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Our Dental Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-4">
            Explore Our Dental Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Comprehensive dental care for every stage of your oral health journey. From routine dental prevention to advanced smile transformations.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-[#0f2b48] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-[#0b1f36] mb-2 font-heading group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Quick Duration meta */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-5 pb-4 border-b border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 group/btn transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookService(service.title)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0f2b48] bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3 h-3 text-sky-600" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner beneath Services */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0b1f36]">
                Not sure which dental treatment you need?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Book a general dental consultation and our senior dental surgeon will conduct a comprehensive exam.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onBookService("General Dentistry")}
            className="w-full md:w-auto shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0f2b48] hover:bg-[#0b1f36] shadow-sm transition-colors cursor-pointer"
          >
            Book General Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
