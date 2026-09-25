import React from 'react';
import { Calendar, ArrowRight, Star, ShieldCheck, Award, Users, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export default function Hero({ onBookClick, onExploreServices }) {
  return (
    <section id="home" className="relative pt-4 pb-12 sm:pt-10 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Subtle Background Glow */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 sm:h-96 bg-gradient-to-r from-blue-200/20 via-sky-200/30 to-teal-100/20 blur-3xl -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-semibold mb-4 sm:mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-700" />
              <span>Trusted Dental Care</span>
            </div>

            {/* Main Heading (Mobile-Optimized Typography) */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0b1f36] tracking-tight leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
              Complete Dental Care for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 block sm:inline">
                Healthier, Confident Smile
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 font-normal max-w-2xl">
              From routine dental checkups to advanced treatments, experience modern dental care in a comfortable and patient-friendly environment.
            </p>

            {/* Action Buttons (Stacked Full-Width on Mobile for Easy Thumb Tapping) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] hover:from-[#0b1f36] hover:to-[#153860] active:scale-[0.98] shadow-md shadow-blue-950/20 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                <span>Book an Appointment</span>
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#0f2b48] bg-white border border-slate-200 hover:bg-blue-50/50 active:bg-slate-100 shadow-xs transition-all cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            {/* Reassurance Chips */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-600 font-medium mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-200/80 w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Painless Anesthesia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Class-B Sterilization</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

            {/* Trust Indicators Grid (2x2 on Mobile, 4 cols on desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full">
              <div className="bg-slate-50/80 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100">
                <div className="text-xl sm:text-3xl font-extrabold text-[#0b1f36] tracking-tight">
                  10+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Years Experience</div>
              </div>

              <div className="bg-slate-50/80 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100">
                <div className="text-xl sm:text-3xl font-extrabold text-[#0b1f36] tracking-tight">
                  10,000+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Patients Treated</div>
              </div>

              <div className="bg-slate-50/80 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100">
                <div className="text-xl sm:text-3xl font-extrabold text-[#0b1f36] tracking-tight">
                  15+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Dental Services</div>
              </div>

              <div className="bg-slate-50/80 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100">
                <div className="flex items-center gap-1 text-xl sm:text-3xl font-extrabold text-[#0b1f36] tracking-tight">
                  <span>4.9/5</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 inline" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Patient Rating</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Responsive Floating Cards */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-blue-200/50 via-white to-sky-100/60 shadow-xl shadow-blue-900/10">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 aspect-4/3 shadow-inner">
                  <img
                    src="/images/hero-dentist.jpg"
                    alt="Dentist treating patient in modern dental hospital"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f36]/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-white/80 shadow-xs flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-bold text-[#0b1f36]">Painless Operatory Suite</span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Sterile
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Cards (Responsive: safely positioned so they never overflow mobile width) */}
              <div className="mt-3 grid grid-cols-2 sm:hidden gap-2">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#0b1f36] leading-tight">Modern Equipment</div>
                    <div className="text-[10px] text-slate-500">3D CBCT Scans</div>
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#0b1f36] leading-tight">MDS Specialists</div>
                    <div className="text-[10px] text-slate-500">Experienced Doctors</div>
                  </div>
                </div>
              </div>

              {/* Desktop Absolute Floating Cards */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 shadow-xl shadow-blue-950/10 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-xs">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0b1f36]">Modern Equipment</div>
                  <div className="text-[11px] text-slate-500 font-medium">3D CBCT & Low Radiation</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 shadow-xl shadow-blue-950/10 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shadow-xs">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0b1f36]">Experienced Specialists</div>
                  <div className="text-[11px] text-slate-500 font-medium">MDS Dental Surgeons</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
