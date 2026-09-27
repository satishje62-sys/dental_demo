import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';
import { useLanguage } from '../contexts/LanguageContext';

export default function PolicyModal({ type, isOpen, onClose }) {
  const { t, isHindi } = useLanguage();

  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy 
    ? (isHindi ? 'मरीज गोपनीयता नीति (Privacy Policy)' : 'Patient Privacy Policy')
    : (isHindi ? 'अस्पताल सेवा नियम व शर्तें (Terms of Service)' : 'Terms & Conditions of Hospital Service');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-[#0c1e33] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 border border-slate-100 dark:border-slate-800 flex flex-col">
        <div className="sticky top-0 bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-sky-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0b1f36] dark:text-white font-heading">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          {isPrivacy ? (
            isHindi ? (
              <>
                <p>
                  <strong>{HOSPITAL_INFO.name}</strong> में हम अपने मरीजों और आगंतुकों की गोपनीयता और चिकित्सीय डेटा की सुरक्षा के लिए पूर्णतः प्रतिबद्ध हैं।
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">1. संपर्क व स्वास्थ्य डेटा का संग्रह</h4>
                <p>
                  जब आप अपॉइंटमेंट बुक करते हैं या अस्पताल से संपर्क करते हैं, तो हम केवल आवश्यक विवरण (नाम, फोन नंबर, ईमेल) और दांतों की समस्या की जानकारी एकत्र करते हैं ताकि सटीक चिकित्सकीय समय तय किया जा सके।
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">2. चिकित्सीय गोपनीयता</h4>
                <p>
                  सभी डिजिटल एक्स-रे और क्लीनिकल रिकॉर्ड्स स्वास्थ्य डेटा सुरक्षा मानकों के अनुसार सुरक्षित रखे जाते हैं। आपका डेटा कभी भी किसी तीसरे पक्ष को नहीं बेचा या साझा किया जाता है।
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">3. संचार सहमति</h4>
                <p>
                  अपॉइंटमेंट अनुरोध भेजकर आप अपॉइंटमेंट की पुष्टि और रिमाइंडर के लिए SMS, व्हाट्सएप या फोन कॉल प्राप्त करने की सहमति देते हैं।
                </p>
              </>
            ) : (
              <>
                <p>
                  At <strong>{HOSPITAL_INFO.name}</strong>, we are committed to safeguarding the privacy and medical confidentiality of our patients and visitors.
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">1. Collection of Health & Contact Data</h4>
                <p>
                  When you schedule an appointment or contact our hospital, we collect basic contact details (Name, Phone number, Email) and dental health concerns strictly to facilitate clinical appointments and treatment planning.
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">2. Medical Confidentiality</h4>
                <p>
                  All digital dental X-rays, diagnostic photographs, and clinical notes are stored securely in compliance with healthcare data protection standards. Your data is never sold, traded, or shared with third-party advertisers.
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">3. Communication Consent</h4>
                <p>
                  By requesting an appointment, you consent to receive SMS, WhatsApp, or phone verification regarding appointment status and clinical care reminders. You may opt out anytime by informing our reception.
                </p>
              </>
            )
          ) : (
            isHindi ? (
              <>
                <p>
                  <strong>{HOSPITAL_INFO.name}</strong> में आपका स्वागत है। हमारी वेबसाइट का उपयोग करने और सेवाएं प्राप्त करने पर निम्नलिखित नियम लागू होते हैं:
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">1. अपॉइंटमेंट शेड्यूलिंग व पुष्टि</h4>
                <p>
                  ऑनलाइन फॉर्म द्वारा भेजा गया अनुरोध एक प्रारंभिक आरक्षण है। हमारे रिसेप्शन कोऑर्डिनेटर डॉक्टर की उपलब्धता के अनुसार समय की पुष्टि के लिए आपसे संपर्क करेंगे।
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">2. क्लीनिकल मूल्यांकन व लिखित खर्च</h4>
                <p>
                  दांतों के उपचार की आवश्यकता और खर्च मुंह की विस्तृत जांच और एक्स-रे पर निर्भर करता है। इलाज शुरू होने से पहले हमेशा स्पष्ट लिखित खर्च का विवरण प्रदान किया जाता है।
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">3. समय परिवर्तन व रद्दीकरण</h4>
                <p>
                  यदि आपको समय बदलना हो तो कृपया कम से कम 2 घंटे पहले सूचित करें ताकि वह समय किसी जरूरतमंद आपातकालीन मरीज को दिया जा सके।
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong>{HOSPITAL_INFO.name}</strong>. By accessing our website and scheduling clinical services, you agree to the following terms:
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">1. Appointment Scheduling & Confirmations</h4>
                <p>
                  Submitting an online appointment request constitutes a preliminary reservation. Our front desk will contact you to confirm timing based on emergency triage and doctor operatory availability.
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">2. Clinical Evaluations & Written Estimates</h4>
                <p>
                  Dental treatment needs and fees vary based on clinical intraoral examination and radiographic findings. An exact written cost estimate will always be provided and agreed upon prior to treatment initiation.
                </p>
                <h4 className="font-bold text-[#0b1f36] dark:text-white">3. Rescheduling & Cancellations</h4>
                <p>
                  We kindly request patients to inform us at least 2 hours in advance in case of rescheduling or cancellation so that the surgical operatory can be made available to urgent patients.
                </p>
              </>
            )
          )}
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end bg-slate-50 dark:bg-[#081729] rounded-b-3xl">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0f2b48] dark:bg-sky-600 hover:bg-[#0b1f36] dark:hover:bg-sky-700 cursor-pointer"
          >
            {t('modal_understand_btn', 'I Understand')}
          </button>
        </div>
      </div>
    </div>
  );
}
