import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Shield, 
  MessageSquare,
  Home,
  Info,
  Stethoscope,
  Building2,
  Users,
  Star,
  HelpCircle,
  Mail
} from 'lucide-react';
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

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: Info },
    { name: 'Services', href: '#services', id: 'services', icon: Stethoscope },
    { name: 'Facilities', href: '#facilities', id: 'facilities', icon: Building2 },
    { name: 'Doctors', href: '#doctors', id: 'doctors', icon: Users },
    { name: 'Reviews', href: '#reviews', id: 'reviews', icon: Star },
    { name: 'FAQ', href: '#faq', id: 'faq', icon: HelpCircle },
    { name: 'Contact', href: '#contact', id: 'contact', icon: MapPin },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <>
      {/* Top Notification Bar */}
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
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          isScrolled 
            ? 'bg-white shadow-sm border-b border-slate-100 py-2.5 sm:py-3' 
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

            {/* Desktop Navigation Links */}
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

            {/* Mobile Actions: Book pill + 3-line Hamburger Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={onBookClick}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0f2b48] active:bg-[#0b1f36] rounded-lg shadow-xs flex items-center gap-1 cursor-pointer"
              >
                <Calendar className="w-3 h-3 text-sky-300" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 flex items-center justify-center focus:outline-none transition-colors cursor-pointer"
                aria-label="Open navigation sidebar"
              >
                <Menu className="w-5 h-5 text-slate-800" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 
        RIGHT SIDEBAR FOR MOBILE:
        Rendered outside <header> at top-level with fixed inset-0 z-[100]
        Works smoothly regardless of scroll position!
      */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex justify-end">
          
          {/* Semi-transparent Backdrop: Clicking closes the sidebar */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right-Side Drawer Panel */}
          <div className="relative w-[84%] max-w-sm bg-white h-full shadow-2xl flex flex-col z-[101] animate-in slide-in-from-right duration-200">
            
            {/* Sidebar Top Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0f2b48] flex items-center justify-center text-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M12 3C8 3 5 5.5 5 9C5 12.5 6.5 16 8 19.5C9 21 10 21 11 18.5C11.5 17 12 17 12.5 18.5C13.5 21 14.5 21 15.5 19.5C17 16 18.5 12.5 18.5 9C18.5 5.5 15.5 3 12 3Z" 
                      fill="#38bdf8" 
                    />
                    <path d="M12 7V13M9 10H15" stroke="#0f2b48" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <span className="font-heading font-bold text-base text-[#0b1f36] block leading-tight">
                    SmileCare
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-sky-600 block">
                    Dental Hospital
                  </span>
                </div>
              </div>

              {/* Close "X" Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 active:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1 overscroll-contain">
              
              <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Menu Options</span>
                <span className="text-teal-600 font-semibold lowercase bg-teal-50 px-2 py-0.5 rounded-full">
                  open today
                </span>
              </div>

              {/* All 8 Menu Links */}
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${
                      isActive
                        ? 'text-blue-700 bg-blue-50 border border-blue-100 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  </a>
                );
              })}

              {/* Action Buttons inside Sidebar */}
              <div className="pt-4 mt-2 border-t border-slate-100 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] active:from-[#0b1f36] shadow-md shadow-blue-900/15 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-sky-300" />
                  <span>Book Appointment</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-xs text-slate-800 bg-slate-100 active:bg-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                    <span>Call Helpline</span>
                  </a>

                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-xs text-emerald-800 bg-emerald-50 active:bg-emerald-100 border border-emerald-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Sidebar Bottom Info Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500 space-y-1 shrink-0">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="truncate">123 Dental Avenue, Patna</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>

          </div>

        </div>
      )}
    </>
  );
}
