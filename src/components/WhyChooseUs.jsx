import React from 'react';
import { Award, Cpu, ShieldCheck, Heart, FileCheck, Smile } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/dentalData';

const iconMap = {
  Award,
  Cpu,
  ShieldCheck,
  Heart,
  FileCheck,
  Smile,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Why Patients Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-4">
            Designed Around Your Comfort
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We understand dental visits can sometimes feel intimidating. Here is how we ensure every visit is relaxing, gentle, and trustworthy.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-lg hover:shadow-blue-950/5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0f2b48] text-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-200 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0b1f36] mb-2 font-heading group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
