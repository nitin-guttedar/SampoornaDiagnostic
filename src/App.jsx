import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Equipment3DShowcase from './components/Equipment3DShowcase';
import InstallationEquipmentSection from './components/InstallationEquipmentSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import FacilityGallery from './components/FacilityGallery';
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

        {/* Advanced Diagnostic Equipment (Installed & CT Under Installation) */}
        <InstallationEquipmentSection
          onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
          theme={theme}
        />

        {/* About Center, Leadership & Infrastructure */}
        <AboutSection theme={theme} />

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
        className="floating-quick-widget"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* WhatsApp Direct Floating Button */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Sampoorna Diagnostic Center, I would like to inquire about booking a test / scan.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-btn"
          style={{
            width: '48px',
            height: '48px',
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
          <MessageSquare size={24} />
        </a>

        {/* Quick Phone Floating Button */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="floating-action-btn"
          style={{
            width: '48px',
            height: '48px',
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
          aria-label={`Call Helpline (${CLINIC_INFO.phoneFormatted})`}
        >
          <Phone size={22} />
        </a>

        {/* Quick Location / Google Maps Floating Button */}
        <a
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-btn"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(66, 133, 244, 0.25)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.22), 0 4px 12px rgba(66, 133, 244, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(66, 133, 244, 0.25)';
          }}
          title="Get Directions & Clinic Location on Google Maps"
          aria-label="View Clinic Location on Google Maps"
        >
          {/* Official Google Maps Multi-Color Pin Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="77.3 0 357.4 512"
            width="22"
            height="29"
            style={{ display: 'block' }}
          >
            <path
              d="M310.1 8.5c-17-5.4-35.6-8.5-54.5-8.5C201.1 0 152 24.7 119.1 63.8l84.3 70.8z"
              fill="#1a73e8"
            />
            <path
              d="M119.1 63.8C93.2 94.7 77.3 135 77.3 178.3c0 33.6 6.6 60.7 17.8 85.1l108.3-128.8z"
              fill="#ea4335"
            />
            <path
              d="M256 110.2c37.9 0 68.4 30.5 68.4 68.4 0 16.6-6.2 32.1-16.2 44.1 0 0 53.8-64.2 106.3-126.5-21.7-41.8-59.2-73.5-104.4-87.8L203.4 134.6c12.8-14.7 31.3-24.4 52.6-24.4"
              fill="#4285f4"
            />
            <path
              d="M256 246.7c-37.9 0-68.4-30.5-68.4-68.4 0-16.6 5.8-32.1 15.9-43.7L95.1 263.3c18.6 41 49.5 74.2 81.2 115.6l131.9-156.6c-12.8 15.1-31.3 24.4-52.2 24.4"
              fill="#fbbc04"
            />
            <path
              d="M305.9 422.3c59.6-93.2 128.8-135.3 128.8-243.6 0-29.8-7.3-57.6-20.1-82.4L176.3 379c10.1 13.1 20.5 28.2 30.5 43.7 36.4 56.1 26.3 89.3 49.5 89.3s13.2-33.6 49.6-89.7"
              fill="#34a853"
            />
          </svg>
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .floating-quick-widget {
            bottom: 16px !important;
            right: 16px !important;
            gap: 8px !important;
          }
          .floating-action-btn {
            width: 42px !important;
            height: 42px !important;
          }
          .floating-action-btn svg {
            max-width: 20px !important;
            max-height: 24px !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
