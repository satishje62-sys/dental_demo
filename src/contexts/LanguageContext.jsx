import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

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

    if (langCode === 'hi') {
      document.documentElement.lang = 'hi';
      document.documentElement.classList.add('lang-hi');
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.classList.remove('lang-hi');
    }
  };

  useEffect(() => {
    if (currentLang === 'hi') {
      document.documentElement.lang = 'hi';
      document.documentElement.classList.add('lang-hi');
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.classList.remove('lang-hi');
    }
  }, [currentLang]);

  // Translation helper function
  const t = (key, fallback = '') => {
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      return TRANSLATIONS[currentLang][key];
    }
    if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) {
      return TRANSLATIONS['en'][key];
    }
    return fallback || key;
  };

  const isHindi = currentLang === 'hi';

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t, isHindi }}>
      {children}
    </LanguageContext.Provider>
  );
};
