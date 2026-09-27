import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { SERVICES, DOCTORS, HOSPITAL_INFO } from '../data/dentalData';
import { HINDI_DATA } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';

export default function BookingSection({ preselectedService, preselectedDoctor }) {
  const { t, isHindi } = useLanguage();
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: preselectedService || '',
    doctor: preselectedDoctor || '',
    date: '',
    timeSlot: '',
    concern: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, treatment: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData(prev => ({ ...prev, doctor: preselectedDoctor }));
    }
  }, [preselectedDoctor]);

  const timeOptions = [
    { label: "09:30 AM", period: isHindi ? "सुबह" : "Morning" },
    { label: "10:30 AM", period: isHindi ? "सुबह" : "Morning" },
    { label: "11:30 AM", period: isHindi ? "सुबह" : "Morning" },
    { label: "02:30 PM", period: isHindi ? "दोपहर" : "Afternoon" },
    { label: "03:30 PM", period: isHindi ? "दोपहर" : "Afternoon" },
    { label: "04:30 PM", period: isHindi ? "दोपहर" : "Afternoon" },
    { label: "05:30 PM", period: isHindi ? "शाम" : "Evening" },
    { label: "06:30 PM", period: isHindi ? "शाम" : "Evening" },
  ];

  const doctorsList = isHindi ? HINDI_DATA.doctors : DOCTORS;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = isHindi ? "कृपया अपना पूरा नाम दर्ज करें" : "Please enter your full name";
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = isHindi ? "नाम कम से कम 3 अक्षरों का होना चाहिए" : "Name should be at least 3 characters";
    }

    if (!formData.phone.trim()) {
      errs.phone = isHindi ? "कृपया अपना मोबाइल नंबर दर्ज करें" : "Please enter your mobile number";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = isHindi ? "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें" : "Please enter a valid mobile number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = isHindi ? "कृपया वैध ईमेल आईडी दर्ज करें" : "Please enter a valid email address";
    }

    if (!formData.treatment) {
      errs.treatment = isHindi ? "कृपया उपचार सेवा का चयन करें" : "Please select the required dental service";
    }

    if (!formData.date) {
      errs.date = isHindi ? "कृपया परामर्श के लिए तारीख चुनें" : "Please select a date for your visit";
    }

    if (!formData.timeSlot) {
      errs.timeSlot = isHindi ? "कृपया पसंदीदा समय स्लॉट चुनें" : "Please choose a preferred time slot";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'SC-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setSubmissionSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      treatment: '',
      doctor: '',
      date: '',
      timeSlot: '',
      concern: ''
    });
    setErrors({});
    setSubmissionSuccess(false);
  };

  const getServiceLabel = (service) => {
    if (!isHindi) return service.title;
    const detail = HINDI_DATA.servicesDetail[service.id];
    return detail ? detail.title : service.title;
  };

  return (
    <section id="booking" className="py-12 sm:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#071322] dark:via-[#0c1e33]/50 dark:to-[#071322] relative transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 dark:bg-blue-900/40 text-blue-900 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            {t('booking_badge', 'Online Patient Scheduling')}
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f36] dark:text-white tracking-tight leading-tight mb-3">
            {t('booking_title', 'Book Your Dental Appointment')}
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('booking_subtitle', 'Choose a convenient date and time for your consultation. Our front desk team will contact you promptly to confirm your slot.')}
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#0c1e33] rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-950/5 border border-slate-200/90 dark:border-slate-700/80 overflow-hidden">
          
          {/* Top Banner */}
          <div className="bg-[#0f2b48] dark:bg-[#081729] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-blue-900/40 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span className="text-xs sm:text-sm font-semibold">{t('booking_banner_title', 'Fast Mobile Appointment Booking')}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>{t('booking_no_advance', 'Zero advance payment required')}</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-8">
            {submissionSuccess ? (
              /* Success Screen */
              <div className="text-center py-4 sm:py-8 animate-in fade-in duration-300">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xs">
                  <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>

                <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-2 border border-emerald-200/60 dark:border-emerald-800/60">
                  {t('booking_success_title', 'Appointment Request Confirmed!')}
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#0b1f36] dark:text-white font-heading mb-2">
                  {isHindi ? `धन्यवाद, ${formData.fullName}!` : `Thank You, ${formData.fullName}!`}
                </h3>
                
                <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  {t('booking_success_msg', 'Thank you! Our clinic care coordinator will call or WhatsApp you within 15 minutes to confirm your slot.')}
                </p>

                {/* Voucher Card */}
                <div className="bg-slate-50 dark:bg-[#081729] border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 sm:p-5 text-left mb-6 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
                    <span>{t('booking_ref_no', 'Booking Reference')}</span>
                    <span className="font-mono font-bold text-[#0b1f36] dark:text-sky-300 bg-white dark:bg-[#0c1e33] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {bookingRef}
                    </span>
                  </div>

                  <div className="py-3 space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{t('booking_form_service', 'Service')}:</span>
                      <span className="font-bold text-[#0b1f36] dark:text-white">{formData.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{t('booking_form_doctor', 'Doctor')}:</span>
                      <span className="font-semibold text-[#0b1f36] dark:text-slate-200 truncate max-w-[200px] text-right">
                        {formData.doctor || t('booking_form_doctor_any', 'Any Available Specialist')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{t('booking_form_date', 'Date')}:</span>
                      <span className="font-bold text-blue-700 dark:text-sky-400">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{t('booking_form_time', 'Time Slot')}:</span>
                      <span className="font-bold text-blue-700 dark:text-sky-400">{formData.timeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{t('booking_form_phone', 'Contact')}:</span>
                      <span className="font-semibold text-[#0b1f36] dark:text-white">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>{isHindi ? "कृपया वैध पहचान पत्र के साथ 10 मिनट पहले अस्पताल पहुंचे।" : "Please arrive 10 minutes early with a valid ID."}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hi SmileCare Dental Hospital, I have booked an appointment with Token ${bookingRef} for ${formData.treatment} on ${formData.date} at ${formData.timeSlot}. Name: ${formData.fullName}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-sm transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{isHindi ? "व्हाट्सएप पर पुष्टि करें" : "Confirm on WhatsApp"}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {t('booking_book_another', 'Book Another Appointment')}
                  </button>
                </div>
              </div>
            ) : (
              /* Mobile Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking_form_name', 'Full Name')} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      placeholder={t('booking_form_name_ph', 'e.g., Rajesh Sharma')}
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName 
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20 dark:bg-rose-950/20 dark:border-rose-600' 
                          : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100 dark:focus:ring-sky-900/50 bg-white dark:bg-[#081729] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking_form_phone', 'Mobile Number')} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      placeholder={t('booking_form_phone_ph', '10-digit mobile number')}
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone 
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20 dark:bg-rose-950/20 dark:border-rose-600' 
                          : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100 dark:focus:ring-sky-900/50 bg-white dark:bg-[#081729] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking_form_email', 'Email Address (Optional)')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder={t('booking_form_email_ph', 'name@example.com')}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-sky-900/50 text-sm bg-white dark:bg-[#081729] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                    />
                  </div>
                </div>

                {/* Select Treatment */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking_form_service', 'Select Dental Service')} <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => {
                      setFormData({ ...formData, treatment: e.target.value });
                      if (errors.treatment) setErrors({ ...errors, treatment: null });
                    }}
                    className={`w-full px-3.5 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.treatment 
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20 dark:bg-rose-950/20 dark:border-rose-600' 
                        : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100 dark:focus:ring-sky-900/50 bg-white dark:bg-[#081729] text-slate-900 dark:text-white'
                    }`}
                  >
                    <option value="">{t('booking_form_service_ph', '-- Choose a Treatment --')}</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={getServiceLabel(s)}>
                        {getServiceLabel(s)}
                      </option>
                    ))}
                    <option value={isHindi ? "सामान्य दंत परामर्श व जांच" : "General Consultation / Examination"}>
                      {isHindi ? "सामान्य दंत परामर्श व जांच" : "General Consultation / Examination"}
                    </option>
                  </select>
                  {errors.treatment && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.treatment}
                    </p>
                  )}
                </div>

                {/* Select Doctor */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking_form_doctor', 'Select Preferred Doctor (Optional)')}
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-sky-900/50 bg-white dark:bg-[#081729] text-slate-900 dark:text-white"
                  >
                    <option value="">{t('booking_form_doctor_any', 'Any Available Specialist Doctor')}</option>
                    {doctorsList.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.specialty.split('&')[0].trim()})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking_form_date', 'Preferred Appointment Date')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: null });
                    }}
                    className={`w-full px-3.5 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.date 
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20 dark:bg-rose-950/20 dark:border-rose-600' 
                        : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100 dark:focus:ring-sky-900/50 bg-white dark:bg-[#081729] text-slate-900 dark:text-white'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Preferred Time (Large Touch Pills) */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t('booking_form_time', 'Convenient Time Slot')} <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeOptions.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, timeSlot: option.label });
                          if (errors.timeSlot) setErrors({ ...errors, timeSlot: null });
                        }}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                          formData.timeSlot === option.label
                            ? 'bg-blue-700 dark:bg-sky-600 text-white shadow-sm ring-2 ring-blue-700/20 dark:ring-sky-500/30'
                            : 'bg-slate-100 dark:bg-[#081729] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 active:bg-slate-300'
                        }`}
                      >
                        <div>{option.label}</div>
                        <div className={`text-[10px] font-normal ${formData.timeSlot === option.label ? 'text-blue-100 dark:text-sky-100' : 'text-slate-400 dark:text-slate-500'}`}>
                          {option.period}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.timeSlot && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.timeSlot}
                    </p>
                  )}
                </div>

                {/* Message / Concern */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t('booking_form_notes', 'Describe Symptoms or Dental Concerns (Optional)')}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    placeholder={t('booking_form_notes_ph', 'e.g., severe toothache on lower left jaw, bleeding gums, chipped front tooth...')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-sky-900/50 bg-white dark:bg-[#081729] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] dark:from-sky-600 dark:to-blue-800 active:from-[#0b1f36] shadow-lg shadow-blue-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t('booking_btn_submitting', 'Submitting Booking...')}</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                        <span>{t('booking_btn_submit', 'Confirm Appointment Booking')}</span>
                      </>
                    )}
                  </button>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-center text-[11px] text-slate-400 dark:text-slate-400 mt-2.5">
                    <span>✓ {t('booking_reassurance_1', 'Instant SMS & WhatsApp confirmation')}</span>
                    <span>•</span>
                    <span>✓ {t('booking_reassurance_2', 'Zero cancellation fees')}</span>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
