import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutHospital from './components/AboutHospital';
import ServicesSection from './components/ServicesSection';
import FacilitiesSection from './components/FacilitiesSection';
import WhyChooseUs from './components/WhyChooseUs';
import DoctorsSection from './components/DoctorsSection';
import HowItWorks from './components/HowItWorks';
import ReviewsSection from './components/ReviewsSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import BookingSection from './components/BookingSection';
import EmergencyContact from './components/EmergencyContact';
import FaqSection from './components/FaqSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

// Modals
import ServiceDetailModal from './components/ServiceDetailModal';
import DoctorProfileModal from './components/DoctorProfileModal';
import AboutHospitalModal from './components/AboutHospitalModal';
import PolicyModal from './components/PolicyModal';

// Floating Actions
import FloatingActions from './components/FloatingActions';

import { SERVICES } from './data/dentalData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState(null);

  // Form pre-population state
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    scrollToBooking();
  };

  const handleBookDoctor = (doctorName) => {
    setPreselectedDoctor(doctorName);
    scrollToBooking();
  };

  const handleSelectServiceByName = (serviceName) => {
    const found = SERVICES.find(
      (s) => s.title.toLowerCase() === serviceName.toLowerCase()
    );
    if (found) {
      setSelectedService(found);
    } else {
      scrollToServices();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Sticky Responsive Navbar */}
      <Navbar onBookClick={scrollToBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          onBookClick={scrollToBooking} 
          onExploreServices={scrollToServices} 
        />

        {/* 3. About The Hospital */}
        <AboutHospital 
          onOpenAboutModal={() => setIsAboutModalOpen(true)} 
        />

        {/* 4. Our Dental Services */}
        <ServicesSection 
          onSelectService={(service) => setSelectedService(service)}
          onBookService={handleBookService}
        />

        {/* 5. Hospital Facilities */}
        <FacilitiesSection />

        {/* 6. Why Patients Choose Us */}
        <WhyChooseUs />

        {/* 7. Our Dental Doctors */}
        <DoctorsSection 
          onSelectDoctor={(doctor) => setSelectedDoctor(doctor)}
          onBookDoctor={handleBookDoctor}
        />

        {/* 8. How It Works */}
        <HowItWorks onBookClick={scrollToBooking} />

        {/* 9. Patient Reviews */}
        <ReviewsSection />

        {/* 10. Before & After */}
        <BeforeAfterSection onBookClick={scrollToBooking} />

        {/* 11. Appointment Booking (MAIN USER ACTION) */}
        <BookingSection 
          preselectedService={preselectedService}
          preselectedDoctor={preselectedDoctor}
        />

        {/* 12. Emergency / Quick Contact */}
        <EmergencyContact />

        {/* 13. FAQ Accordion */}
        <FaqSection onBookClick={scrollToBooking} />

        {/* 14. Location & Contact */}
        <LocationSection />
      </main>

      {/* 15. Footer */}
      <Footer 
        onBookClick={scrollToBooking}
        onOpenPrivacy={() => setPolicyType('privacy')}
        onOpenTerms={() => setPolicyType('terms')}
        onSelectServiceByName={handleSelectServiceByName}
      />

      {/* Floating Action Buttons & Mobile Sticky Booking */}
      <FloatingActions onBookClick={scrollToBooking} />

      {/* Modals */}
      <ServiceDetailModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookService}
      />

      <DoctorProfileModal
        doctor={selectedDoctor}
        isOpen={!!selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookDoctor={handleBookDoctor}
      />

      <AboutHospitalModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onBookClick={scrollToBooking}
      />

      <PolicyModal
        type={policyType}
        isOpen={!!policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
