import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { REVIEWS, HOSPITAL_INFO } from '../data/dentalData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              Patient Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight">
              What Our Patients Say
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-xl">
              Real reviews from real patients who experienced our gentle, specialized dental care.
            </p>
          </div>

          {/* Aggregate 4.9/5 Rating Card */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-center gap-4 shrink-0 shadow-xs">
            <div className="flex flex-col items-center justify-center bg-white px-3.5 py-2 rounded-xl shadow-2xs border border-slate-100">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0b1f36] leading-none">
                4.9/5
              </span>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-[#0b1f36]">4.9/5 Patient Rating</div>
              <div className="text-xs text-slate-500 font-medium">Based on 1,850+ Google & Practo reviews</div>
              <div className="flex items-center gap-1 text-[11px] text-teal-600 font-semibold mt-0.5">
                <CheckCircle className="w-3 h-3" />
                <span>100% Verified Patients</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars + Treatment Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/60">
                    {review.treatment}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{review.review}"
                </p>
              </div>

              {/* Bottom Row: Patient Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0f2b48] to-blue-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b1f36]">
                      {review.name}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {review.city} • {review.date}
                    </span>
                  </div>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
