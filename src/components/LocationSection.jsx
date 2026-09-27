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
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function LocationSection() {
  const { t, isHindi } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-24 bg-slate-50/70 dark:bg-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 dark:bg-blue-900/40 text-blue-900 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            {t('location_badge', 'Hospital Location & Hours')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-3">
            {t('location_title', 'Visit Our Dental Hospital')}
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('location_subtitle', 'Conveniently located in central Patna with dedicated parking and wheelchair accessibility. We welcome walk-in consultations and scheduled appointments.')}
          </p>
        </ScrollReveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          
          {/* Left Column: Hospital Contact Details */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 flex flex-col justify-between space-y-3.5 sm:space-y-4">
            
            {/* Address Card */}
            <div className="bg-white dark:bg-[#0c1e33] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
              <div className="flex items-start gap-3 sm:gap-4 mb-3.5 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0b1f36] dark:text-white font-heading">
                    {HOSPITAL_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {isHindi ? "123 डेंटल एवेन्यू, गांधी मैदान के पास, पटना, बिहार 800001, भारत" : "123 Dental Avenue, Near Gandhi Maidan, Patna, Bihar 800001, India"}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-teal-700 dark:text-teal-300 font-semibold">
                    <Car className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{t('location_parking_info', 'Free Dedicated & Valet Parking')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#0f2b48] dark:bg-sky-600 hover:bg-[#0b1f36] dark:hover:bg-sky-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-300" />
                  <span>{t('location_btn_map', 'Get Directions')}</span>
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>{t('location_btn_call', 'Call Hospital')}</span>
                </a>

                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t('location_btn_whatsapp', 'WhatsApp Us')}</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white dark:bg-[#0c1e33] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0b1f36] dark:text-white font-heading mb-2">
                    {t('location_hours_title', 'Opening Hours')}
                  </h3>
                  
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">{isHindi ? "सोमवार – शनिवार" : "Monday – Saturday"}</span>
                      <span className="font-bold text-[#0b1f36] dark:text-white">9:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">{isHindi ? "रविवार" : "Sunday"}</span>
                      <span className="font-bold text-[#0b1f36] dark:text-white">10:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1 text-rose-600 dark:text-rose-400 font-medium">
                      <span>{isHindi ? "आपातकालीन सेवा" : "Emergency Care"}</span>
                      <span className="font-bold">{isHindi ? "24/7 ऑन-कॉल सहायता" : "24/7 On-Call Support"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white dark:bg-[#0c1e33] rounded-2xl sm:rounded-3xl p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {isHindi ? "ईमेल पूछताछ" : "Email Enquiries"}
                  </div>
                  <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-blue-700 dark:text-sky-400 truncate block hover:underline">
                    {HOSPITAL_INFO.email}
                  </a>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
                {isHindi ? "सक्रिय हेल्पडेस्क" : "Active Desk"}
              </span>
            </div>

          </ScrollReveal>

          {/* Right Column: Map Embed */}
          <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 bg-white dark:bg-[#0c1e33] rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col">
            <div className="relative w-full h-[260px] sm:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <iframe
                title="SmileCare Dental Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86175084924!2d85.07449556275815!3d25.60817557002047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f21!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-white/95 dark:bg-[#081729]/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-700 max-w-[240px] sm:max-w-xs">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-sky-400 animate-ping" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#0b1f36] dark:text-white truncate">SmileCare Dental Hospital</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  {isHindi ? "123 डेंटल एवेन्यू, पटना" : "123 Dental Avenue, Patna"}
                </p>
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-blue-700 dark:text-sky-400 hover:underline"
                >
                  <span>{t('location_btn_map', 'Open in Maps')}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
