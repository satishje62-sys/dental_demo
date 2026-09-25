import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, ChevronRight, Shield, MessageSquare } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['home', 'about', 'services', 'facilities', 'doctors', 'reviews', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Facilities', href: '#facilities', id: 'facilities' },
    { name: 'Doctors', href: '#doctors', id: 'doctors' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification Bar (Optimized for Mobile & Desktop) */}
      <div className="bg-[#0b1f36] text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-blue-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Mobile concise emergency view */}
          <div className="flex items-center gap-2 sm:hidden w-full justify-between">
            <span className="inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-sky-400" />
              <span>9:00 AM – 8:00 PM</span>
            </span>
            <a 
              href={`tel:${HOSPITAL_INFO.phoneRaw}`} 
              className="inline-flex items-center gap-1 text-sky-300 font-semibold active:text-white"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>
          </div>

          {/* Desktop full view */}
          <div className="hidden sm:flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Patna, Bihar</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-1 text-emerald-300 font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>NABH & Class-B Sterilization</span>
            </span>
            <a 
              href={`tel:${HOSPITAL_INFO.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Helpline: {HOSPITAL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5 sm:py-3' 
            : 'bg-white border-b border-slate-100/80 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0f2b48] to-[#1e4e85] flex items-center justify-center shadow-md shadow-blue-900/15 group-active:scale-95 transition-transform shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M12 3C8 3 5 5.5 5 9C5 12.5 6.5 16 8 19.5C9 21 10 21 11 18.5C11.5 17 12 17 12.5 18.5C13.5 21 14.5 21 15.5 19.5C17 16 18.5 12.5 18.5 9C18.5 5.5 15.5 3 12 3Z" 
                    fill="#38bdf8" 
                    stroke="white" 
                    strokeWidth="1.2"
                  />
                  <path d="M12 7V13M9 10H15" stroke="#0f2b48" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-2xl text-[#0b1f36] tracking-tight leading-none">
                  SmileCare
                </span>
                <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-sky-600 mt-0.5">
                  Dental Hospital
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-blue-700 bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-[#0b1f36] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{HOSPITAL_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] hover:from-[#0b1f36] hover:to-[#153860] shadow-md shadow-blue-900/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Actions: Book pill + Large Touch Hamburger */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={onBookClick}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0f2b48] active:bg-[#0b1f36] rounded-lg shadow-xs flex items-center gap-1"
              >
                <Calendar className="w-3 h-3 text-sky-300" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center focus:outline-none active:scale-95 transition-transform"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Full-Screen Navigation Drawer with Backdrop */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[52px] sm:top-[60px] z-50 lg:hidden flex flex-col bg-white">
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
              <div className="pb-3 border-b border-slate-100 mb-3 flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Hospital Navigation</span>
                <span className="text-[11px] text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">Open Today</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-colors active:bg-blue-50 ${
                    activeSection === link.id
                      ? 'text-blue-700 bg-blue-50/80'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              {/* Direct Touch Helpline inside Mobile Menu */}
              <div className="pt-5 mt-4 border-t border-slate-100 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] shadow-md shadow-blue-900/15"
                >
                  <Calendar className="w-4 h-4 text-sky-300" />
                  <span>Book Dental Appointment</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl font-semibold text-xs text-slate-800 bg-slate-100 active:bg-slate-200"
                  >
                    <Phone className="w-4 h-4 text-blue-700" />
                    <span>Call Helpline</span>
                  </a>

                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl font-semibold text-xs text-emerald-800 bg-emerald-50 active:bg-emerald-100 border border-emerald-200"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center text-[11px] text-slate-400 pt-3">
                  📍 123 Dental Avenue, Patna • 9:00 AM – 8:00 PM
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
