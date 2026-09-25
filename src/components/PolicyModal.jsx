import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';

export default function PolicyModal({ type, isOpen, onClose }) {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Patient Privacy Policy' : 'Terms & Conditions of Hospital Service';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 border border-slate-100 flex flex-col">
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0b1f36] font-heading">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{HOSPITAL_INFO.name}</strong>, we are committed to safeguarding the privacy and medical confidentiality of our patients and visitors.
              </p>
              <h4 className="font-bold text-[#0b1f36]">1. Collection of Health & Contact Data</h4>
              <p>
                When you schedule an appointment or contact our hospital, we collect basic contact details (Name, Phone number, Email) and dental health concerns strictly to facilitate clinical appointments and treatment planning.
              </p>
              <h4 className="font-bold text-[#0b1f36]">2. Medical Confidentiality</h4>
              <p>
                All digital dental X-rays, diagnostic photographs, and clinical notes are stored securely in compliance with healthcare data protection standards. Your data is never sold, traded, or shared with third-party advertisers.
              </p>
              <h4 className="font-bold text-[#0b1f36]">3. Communication Consent</h4>
              <p>
                By requesting an appointment, you consent to receive SMS, WhatsApp, or phone verification regarding appointment status and clinical care reminders. You may opt out anytime by informing our reception.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{HOSPITAL_INFO.name}</strong>. By accessing our website and scheduling clinical services, you agree to the following terms:
              </p>
              <h4 className="font-bold text-[#0b1f36]">1. Appointment Scheduling & Confirmations</h4>
              <p>
                Submitting an online appointment request constitutes a preliminary reservation. Our front desk will contact you to confirm timing based on emergency triage and doctor operatory availability.
              </p>
              <h4 className="font-bold text-[#0b1f36]">2. Clinical Evaluations & Written Estimates</h4>
              <p>
                Dental treatment needs and fees vary based on clinical intraoral examination and radiographic findings. An exact written cost estimate will always be provided and agreed upon prior to treatment initiation.
              </p>
              <h4 className="font-bold text-[#0b1f36]">3. Rescheduling & Cancellations</h4>
              <p>
                We kindly request patients to inform us at least 2 hours in advance in case of rescheduling or cancellation so that the surgical operatory can be made available to urgent patients.
              </p>
            </>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0f2b48] hover:bg-[#0b1f36] cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
