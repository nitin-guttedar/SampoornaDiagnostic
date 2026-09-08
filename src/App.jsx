import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Equipment3DShowcase from './components/Equipment3DShowcase';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import FacilityGallery from './components/FacilityGallery';
import ReportVerification from './components/ReportVerification';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import TestDirectoryModal from './components/TestDirectoryModal';
import { Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from './data/assets';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('16-Slice Multislice CT Scan');
  const [directoryOpen, setDirectoryOpen] = useState(false);
  
  // Theme state: defaults to 'light' per user request, persists in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sampoorna_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sampoorna_theme', theme);
  }, [theme]);

  const handleOpenBooking = (serviceName = '16-Slice Multislice CT Scan') => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar with Services Subsections & Theme Switcher */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenDirectory={() => setDirectoryOpen(true)}
        theme={theme}
        setTheme={setTheme}
      />

      <main style={{ flex: 1 }}>
        {/* Hero Section with Interactive 3D Canvas */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenDirectory={() => setDirectoryOpen(true)}
          theme={theme}
        />

        {/* Clinical Services (Overview & All 6 Departments from PDF) */}
        <ServicesSection
          onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
          theme={theme}
        />

        {/* Dedicated 3D Diagnostic & Laboratory Equipment Hub */}
        <Equipment3DShowcase
          onOpenBooking={() => handleOpenBooking()}
          theme={theme}
        />

        {/* About Center, Leadership & Infrastructure */}
        <AboutSection theme={theme} />

        {/* Digital Report Retrieval Strip */}
        <ReportVerification
          onOpenBooking={() => handleOpenBooking()}
          theme={theme}
        />

        {/* Facility Gallery & Authentic Asset Banners */}
        <FacilityGallery theme={theme} />

        {/* Evidence-Based Clinical Articles & Health Insights */}
        <BlogSection theme={theme} />

        {/* Center Contact, Address & Location Guide */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
          theme={theme}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenDirectory={() => setDirectoryOpen(true)}
        theme={theme}
      />

      {/* Booking & WhatsApp Appointment Modal */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={selectedService}
        theme={theme}
      />

      {/* Comprehensive Test Directory & Pricing Modal */}
      <TestDirectoryModal
        isOpen={directoryOpen}
        onClose={() => setDirectoryOpen(false)}
        onSelectTest={(testName) => handleOpenBooking(testName)}
        theme={theme}
      />

      {/* Floating Quick Action Widget for Mobile / Quick Access */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {/* WhatsApp Direct Floating Button */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Sampoorna Diagnostic Center, I would like to inquire about booking a test / scan.')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#00a859',
            boxShadow: '0 8px 25px rgba(0, 168, 89, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          title="Chat on WhatsApp (+91 8660487449)"
        >
          <MessageSquare size={26} />
        </a>

        {/* Quick Phone Floating Button */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#034ea2',
            boxShadow: '0 8px 25px rgba(3, 78, 162, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          title={`Call Helpline (${CLINIC_INFO.phoneFormatted})`}
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
