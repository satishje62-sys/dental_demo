import React from 'react';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  MessageSquare, 
  PhoneCall, 
  Car, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export default function LocationSection() {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-2.5">
            Hospital Location & Hours
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-3">
            Visit Our Dental Hospital
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Conveniently located in central Patna with dedicated parking and wheelchair accessibility. We welcome walk-in consultations and scheduled appointments.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          
          {/* Left Column: Hospital Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5 sm:space-y-4">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="flex items-start gap-3 sm:gap-4 mb-3.5 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0b1f36] font-heading">
                    {HOSPITAL_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    123 Dental Avenue, Near Gandhi Maidan, Patna, Bihar 800001, India
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-teal-700 font-semibold">
                    <Car className="w-3.5 h-3.5" />
                    <span>Free Dedicated & Valet Parking</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: 3 Mobile-Optimized Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#0f2b48] active:bg-[#0b1f36] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-300" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 active:bg-slate-200 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call Hospital</span>
                </a>

                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 active:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0b1f36] font-heading mb-2">
                    Opening Hours
                  </h3>
                  
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Monday – Saturday</span>
                      <span className="font-bold text-[#0b1f36]">9:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Sunday</span>
                      <span className="font-bold text-[#0b1f36]">10:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1 text-rose-600 font-medium">
                      <span>Emergency Care</span>
                      <span className="font-bold">24/7 On-Call Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Email Enquiries</div>
                  <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-blue-700 truncate block">
                    {HOSPITAL_INFO.email}
                  </a>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                Active Desk
              </span>
            </div>

          </div>

          {/* Right Column: Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 border border-slate-200/80 shadow-sm flex flex-col">
            <div className="relative w-full h-[260px] sm:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <iframe
                title="SmileCare Dental Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86175084924!2d85.07449556275815!3d25.60817557002047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f21!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-md border border-slate-200/80 max-w-[240px] sm:max-w-xs">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#0b1f36] truncate">SmileCare Dental Hospital</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  123 Dental Avenue, Patna
                </p>
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-blue-700"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
