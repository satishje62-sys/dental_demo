import React from 'react';
import { Award, Calendar, ArrowRight, Star, Clock, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../data/dentalData';

export default function DoctorsSection({ onSelectDoctor, onBookDoctor }) {
  return (
    <section id="doctors" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Specialist Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-4">
            Meet Our Dental Specialists
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our team of MDS certified dental specialists bring over 30 years of collective surgical, orthodontic, and implant expertise with a gentle touch.
          </p>
        </div>

        {/* 3 Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              {/* Doctor Photo Frame */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={doc.photo}
                  alt={`${doc.name} - ${doc.specialty}`}
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0b1f36]">
                  <Award className="w-3.5 h-3.5 text-teal-600" />
                  <span>{doc.experience}</span>
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-[#0f2b48]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{doc.rating}</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0b1f36] font-heading mb-1 group-hover:text-blue-700 transition-colors">
                    {doc.name}
                  </h3>
                  <div className="text-sm font-semibold text-blue-700 mb-1">
                    {doc.role.split('&')[0]}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mb-3">
                    {doc.qualification}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {doc.bio}
                  </p>

                  <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5 mb-5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{doc.timings}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectDoctor(doc)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-blue-400 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 transition-colors text-center cursor-pointer"
                  >
                    View Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookDoctor(doc.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] hover:from-[#0b1f36] hover:to-[#153860] shadow-sm transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-300" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
