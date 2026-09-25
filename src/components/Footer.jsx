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

export default function Footer({ onBookClick, onOpenPrivacy, onOpenTerms, onSelectServiceByName }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const popularTreatments = [
    'General Dentistry',
    'Root Canal Treatment',
    'Dental Implants',
    'Orthodontics',
    'Teeth Whitening',
    'Cosmetic Dentistry',
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
    <footer className="bg-[#0b1f36] text-white pt-12 sm:pt-16 pb-24 sm:pb-12 border-t border-blue-950/60 relative">
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
              "{HOSPITAL_INFO.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              SmileCare Dental Hospital provides advanced, gentle, and comprehensive dental treatments in a state-of-the-art sterile hospital setting.
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
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
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
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-heading">
              Popular Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {popularTreatments.map((treatment) => (
                <li key={treatment}>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectServiceByName) onSelectServiceByName(treatment);
                    }}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {treatment}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-heading">
              Contact Hospital
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>123 Dental Avenue, Patna, Bihar, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="hover:text-white">
                  {HOSPITAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-white">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sun: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-sky-200" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {HOSPITAL_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
