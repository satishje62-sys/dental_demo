import React from 'react';
import { UserCheck, Cpu, Sparkles, Heart, FileText, CheckCircle2, ArrowRight, Award } from 'lucide-react';

export default function AboutHospital({ onOpenAboutModal }) {
  const highlights = [
    {
      title: "Experienced Dental Professionals",
      desc: "Compassionate MDS dental surgeons and specialists with proven track records in complex treatments.",
      icon: UserCheck,
    },
    {
      title: "Modern Treatment Technology",
      desc: "3D CBCT digital imaging, rotary endodontics, and intraoral cameras for gentle, pinpoint accuracy.",
      icon: Cpu,
    },
    {
      title: "Clean & Hygienic Environment",
      desc: "Hospital-grade European Class-B autoclaves with strict sterilization between every patient visit.",
      icon: Sparkles,
    },
    {
      title: "Comfortable Patient Experience",
      desc: "Ergonomic memory-foam dental chairs, calm music, and painless local anesthesia protocols.",
      icon: Heart,
    },
    {
      title: "Personalized Treatment Plans",
      desc: "Tailored clinical roadmaps customized to your oral anatomy, medical background, and comfort.",
      icon: FileText,
    },
    {
      title: "Transparent Consultation",
      desc: "Clear upfront fee estimates, transparent visual explanations on 4K screens, and zero surprises.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            About Our Hospital
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-3">
            Your Trusted Dental Care Partner
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            SmileCare Dental Hospital provides comprehensive dental care using modern technology, experienced dental professionals and a patient-first approach. We believe dental treatment should be comfortable, transparent, and completely anxiety-free.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Clinic Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="aspect-4/3 sm:aspect-4/3 bg-slate-100">
                <img
                  src="/images/clinic-interior.jpg"
                  alt="SmileCare Dental Hospital reception lounge and consultation suites"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f36]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-500/90 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase mb-1.5">
                  Hospital Facility
                </span>
                <h3 className="text-base sm:text-xl font-bold font-heading text-white">
                  Designed for Patient Calm & Comfort
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-0.5 line-clamp-2">
                  Step into a clean, modern clinic environment engineered to eliminate healthcare stress.
                </p>
              </div>
            </div>

            {/* Quality Seal */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm sm:shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0b1f36]">100% Sterile Standards</div>
                <div className="text-[11px] text-slate-500">Exceeds NABH hospital safety guidelines</div>
              </div>
            </div>
          </div>

          {/* 6 Value Highlights */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-100/90 hover:bg-white hover:border-blue-200 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg sm:rounded-xl bg-white text-blue-700 flex items-center justify-center shadow-xs border border-slate-100 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0b1f36] mb-1 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenAboutModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0f2b48] bg-blue-50/90 hover:bg-blue-100 active:bg-blue-200 border border-blue-200 transition-colors cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
