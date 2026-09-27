import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  Heart,
  Calendar
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer({ onBookClick, onOpenPrivacy, onOpenTerms, onSelectServiceByName }) {
  const { t, isHindi } = useLanguage();

  const quickLinks = [
    { name: t('nav_home', 'Home'), href: '#home' },
    { name: t('nav_about', 'About'), href: '#about' },
    { name: t('nav_services', 'Services'), href: '#services' },
    { name: t('nav_facilities', 'Facilities'), href: '#facilities' },
    { name: t('nav_doctors', 'Doctors'), href: '#doctors' },
    { name: t('nav_reviews', 'Reviews'), href: '#reviews' },
    { name: t('nav_faq', 'FAQ'), href: '#faq' },
    { name: t('nav_contact', 'Contact'), href: '#contact' },
  ];

  const popularTreatments = isHindi ? [
    { name: 'जनरल डेंटिस्ट्री व सफाई', key: 'general-dentistry' },
    { name: 'दर्द-रहित रूट कैनाल ट्रीटमेंट', key: 'root-canal' },
    { name: 'स्थायी डेंटल इम्प्लांट्स', key: 'dental-implants' },
    { name: 'ऑर्थोडॉन्टिक्स व अलाइनर्स', key: 'orthodontics' },
    { name: 'टीथ व्हाइटनिंग (दांत चमकाना)', key: 'teeth-whitening' },
    { name: 'कॉस्मेटिक स्माइल मेकओवर', key: 'cosmetic-dentistry' },
  ] : [
    { name: 'General Dentistry', key: 'general-dentistry' },
    { name: 'Root Canal Treatment', key: 'root-canal' },
    { name: 'Dental Implants', key: 'dental-implants' },
    { name: 'Orthodontics', key: 'orthodontics' },
    { name: 'Teeth Whitening', key: 'teeth-whitening' },
    { name: 'Cosmetic Dentistry', key: 'cosmetic-dentistry' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1f36] dark:bg-[#050e18] text-white pt-12 sm:pt-16 pb-24 sm:pb-12 border-t border-blue-950/60 dark:border-slate-800/80 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M12 3C8 3 5 5.5 5 9C5 12.5 6.5 16 8 19.5C9 21 10 21 11 18.5C11.5 17 12 17 12.5 18.5C13.5 21 14.5 21 15.5 19.5C17 16 18.5 12.5 18.5 9C18.5 5.5 15.5 3 12 3Z" 
                    fill="white" 
                  />
                  <path d="M12 7V13M9 10H15" stroke="#0f2b48" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  SmileCare
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400">
                  Dental Hospital
                </span>
              </div>
            </div>

            <p className="text-sm text-sky-200/90 font-medium italic">
              "{t('footer_tagline', HOSPITAL_INFO.tagline)}"
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t('footer_about_text', 'SmileCare Dental Hospital provides advanced, gentle, and comprehensive dental treatments in a state-of-the-art sterile hospital setting.')}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmileCare on Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmileCare on Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmileCare on YouTube"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              {t('footer_quick_links', 'Quick Navigation')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-sky-300 transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              {t('footer_services', 'Popular Treatments')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {popularTreatments.map((treatment) => (
                <li key={treatment.key}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSelectServiceByName) onSelectServiceByName(treatment.key);
                      const el = document.querySelector('#services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-sky-300 transition-colors block truncate"
                  >
                    {treatment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & OPD Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              {t('footer_contact_info', 'Hospital Contact')}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{isHindi ? "123 डेंटल एवेन्यू, गांधी मैदान के पास, पटना, बिहार" : "123 Dental Avenue, Near Gandhi Maidan, Patna, Bihar"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="hover:text-sky-300 font-semibold">
                  {HOSPITAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-sky-300">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-[11px] sm:text-xs leading-tight text-slate-400">
                  <div className="text-slate-300 font-medium">{isHindi ? "ओपीडी: सोम – शनि (9:00 AM – 8:00 PM)" : "OPD: Mon – Sat (9:00 AM – 8:00 PM)"}</div>
                  <div>{isHindi ? "रविवार: 10:00 AM – 2:00 PM" : "Sunday: 10:00 AM – 2:00 PM"}</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onBookClick}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t('book_appointment', 'Book Appointment')}</span>
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {t('footer_rights', 'SmileCare Dental Hospital. All rights reserved.')}
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-sky-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              {t('footer_privacy', 'Privacy Policy')}
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-sky-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              {t('footer_terms', 'Terms of Service')}
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              title="Scroll back to top"
            >
              <span>{t('footer_back_to_top', 'Back to top')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
