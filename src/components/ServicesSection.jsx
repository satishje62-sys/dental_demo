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
    <section id="services" className="py-12 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-2.5">
            Our Dental Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-3">
            Explore Our Dental Services
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Comprehensive dental care for every stage of your oral health journey. From routine dental prevention to advanced smile transformations.
          </p>
        </div>

        {/* 8 Services Grid with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Image Frame */}
                  <div className="relative aspect-16/10 sm:aspect-16/11 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f36]/75 via-[#0b1f36]/20 to-transparent pointer-events-none" />

                    {/* Floating Icon badge */}
                    <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-[#0f2b48] flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4 text-blue-700" />
                    </div>

                    {/* Badge */}
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-[#0b1f36] bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-xs">
                      {service.badge}
                    </span>

                    {/* Tagline over bottom gradient of image */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                      <span className="text-[11px] font-medium text-sky-200 line-clamp-1">
                        {service.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-[#0b1f36] mb-1.5 font-heading group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                      {service.shortDesc}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium pb-3 border-b border-slate-100">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 group/btn transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookService(service.title)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0f2b48] bg-blue-50/80 hover:bg-[#0f2b48] hover:text-white transition-all cursor-pointer"
                  >
                    <Calendar className="w-3 h-3 text-sky-600 group-hover:text-white" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Consultation Banner beneath Services */}
        <div className="mt-10 sm:mt-14 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
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
            className="w-full md:w-auto shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0f2b48] hover:bg-[#0b1f36] shadow-sm transition-colors cursor-pointer"
          >
            Book General Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
