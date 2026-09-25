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

export default function BookingSection({ preselectedService, preselectedDoctor }) {
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
    { label: "09:30 AM", period: "Morning" },
    { label: "10:30 AM", period: "Morning" },
    { label: "11:30 AM", period: "Morning" },
    { label: "02:30 PM", period: "Afternoon" },
    { label: "03:30 PM", period: "Afternoon" },
    { label: "04:30 PM", period: "Afternoon" },
    { label: "05:30 PM", period: "Evening" },
    { label: "06:30 PM", period: "Evening" },
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = "Name should be at least 3 characters";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Please enter your mobile number";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid mobile number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.treatment) {
      errs.treatment = "Please select the required dental service";
    }

    if (!formData.date) {
      errs.date = "Please select a date for your visit";
    }

    if (!formData.timeSlot) {
      errs.timeSlot = "Please choose a preferred time slot";
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

  return (
    <section id="booking" className="py-12 sm:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-2.5">
            Online Patient Scheduling
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f36] tracking-tight leading-tight mb-3">
            Book Your Dental Appointment
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Choose a convenient date and time for your consultation. Our front desk team will contact you promptly to confirm your slot.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-950/5 border border-slate-200/90 overflow-hidden">
          
          {/* Top Banner */}
          <div className="bg-[#0f2b48] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span className="text-xs sm:text-sm font-semibold">Fast Mobile Appointment Booking</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>No Advance Fee • Free Rescheduling</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-8">
            {submissionSuccess ? (
              /* Success Screen */
              <div className="text-center py-4 sm:py-8 animate-in fade-in duration-300">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xs">
                  <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>

                <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-2">
                  Appointment Request Submitted
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#0b1f36] font-heading mb-2">
                  Thank You, {formData.fullName}!
                </h3>
                
                <p className="text-xs sm:text-base text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you. Our team will contact you shortly to confirm your appointment.
                </p>

                {/* Mobile Friendly Voucher Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-left mb-6 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500">
                    <span>Reference Token</span>
                    <span className="font-mono font-bold text-[#0b1f36] bg-white px-2 py-0.5 rounded border border-slate-200">
                      {bookingRef}
                    </span>
                  </div>

                  <div className="py-3 space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-[#0b1f36]">{formData.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Doctor:</span>
                      <span className="font-semibold text-[#0b1f36] truncate max-w-[200px] text-right">
                        {formData.doctor || "Any Available Specialist"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Date:</span>
                      <span className="font-bold text-blue-700">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Time Slot:</span>
                      <span className="font-bold text-blue-700">{formData.timeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact:</span>
                      <span className="font-semibold text-[#0b1f36]">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Please arrive 10 minutes early with a valid ID.</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hi%20SmileCare,%20I%20have%20booked%20an%20appointment%20with%20Token%20${bookingRef}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 active:bg-emerald-700 shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              /* Mobile Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      placeholder="e.g. Ramesh Verma"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName 
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                          : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100 bg-white'
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
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone 
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                          : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100 bg-white'
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
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="youremail@example.com"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm bg-white"
                    />
                  </div>
                </div>

                {/* Select Treatment */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Select Treatment <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => {
                      setFormData({ ...formData, treatment: e.target.value });
                      if (errors.treatment) setErrors({ ...errors, treatment: null });
                    }}
                    className={`w-full px-3.5 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                      errors.treatment 
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                        : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  >
                    <option value="">-- Choose Dental Service --</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Consultation">General Consultation / Examination</option>
                  </select>
                  {errors.treatment && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.treatment}
                    </p>
                  )}
                </div>

                {/* Select Doctor */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Select Doctor <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                  >
                    <option value="">Any Available Specialist (Recommended)</option>
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.specialty.split('&')[0]})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: null });
                    }}
                    className={`w-full px-3.5 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                      errors.date 
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                        : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
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
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Preferred Time Slot <span className="text-rose-500">*</span>
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
                            ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80 active:bg-slate-300'
                        }`}
                      >
                        <div>{option.label}</div>
                        <div className={`text-[10px] font-normal ${formData.timeSlot === option.label ? 'text-blue-100' : 'text-slate-400'}`}>
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
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Message / Concern <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    placeholder="e.g. Tooth sensitivity or general checkup"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0f2b48] to-[#1e4e85] active:from-[#0b1f36] shadow-lg shadow-blue-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting Your Request...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                        <span>Book Appointment Now</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    🔒 Strict Patient Confidentiality • Fast Front Desk Confirmation
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
