import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Calendar, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export default function FloatingActions({ onBookClick }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Actions (WhatsApp + Scroll To Top) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white dark:bg-[#0c1e33] text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-sky-400 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all hover:-translate-y-0.5 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          <span className="text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Floating Scroll-To-Top (Floats above sticky bottom bar) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="sm:hidden fixed bottom-18 right-4 z-40 w-9 h-9 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 text-slate-700 dark:text-slate-200 active:text-blue-700 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Sticky Mobile Bottom Bar (Thumb Zone Action Bar) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 dark:bg-[#081729]/98 backdrop-blur-lg border-t border-slate-200/90 dark:border-slate-800 px-3.5 pt-2 pb-[max(env(safe-area-inset-bottom),0.6rem)] flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${HOSPITAL_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-[#0c1e33] active:bg-slate-100"
        >
          <Phone className="w-3.5 h-3.5 text-blue-700 dark:text-sky-400" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800/80 text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 active:bg-emerald-100"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onBookClick}
          className="flex-2 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 active:from-[#0b1f36] shadow-md shadow-blue-900/15"
        >
          <Calendar className="w-3.5 h-3.5 text-sky-300" />
          <span>Book Appointment</span>
        </button>
      </div>
    </>
  );
}
