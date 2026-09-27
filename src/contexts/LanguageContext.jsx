import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('site_language') || 'en';
  });

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('site_language', langCode);

    // Set Google Translate cookie
    const hostname = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    if (hostname) {
      document.cookie = `googtrans=/en/${langCode}; domain=${hostname}; path=/;`;
    }

    // Trigger google translate select element if available
    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
    }
  };

  // Sync on mount or when Google translate widget becomes ready
  useEffect(() => {
    const checkAndSync = () => {
      const selectEl = document.querySelector('.goog-te-combo');
      if (selectEl && currentLang && selectEl.value !== currentLang) {
        selectEl.value = currentLang;
        selectEl.dispatchEvent(new Event('change'));
      }
    };

    const interval = setInterval(checkAndSync, 800);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
