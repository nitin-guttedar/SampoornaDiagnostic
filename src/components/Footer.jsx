import React from 'react';
import { ASSETS, CLINIC_INFO } from '../data/assets';
import { SERVICES } from '../data/content';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking, onOpenDirectory, theme }) {
  return (
    <footer
      style={{
        background: theme === 'light' ? '#07152b' : '#040810',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        color: '#94a3b8',
        fontSize: '0.9rem',
      }}
    >
      <div className="container">
        {/* Footer Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem' }}>
              <img
                src={ASSETS.logo}
                alt="Sampoorna Diagnostic Center Logo"
                style={{
                  height: '48px',
                  width: 'auto',
                  borderRadius: '8px',
                  background: '#ffffff',
                  padding: '3px',
                }}
              />
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                  SAMPOORNA
                </div>
                <div style={{ fontSize: '0.74rem', color: '#10b981', fontWeight: 600 }}>
                  DIAGNOSTIC CENTER
                </div>
              </div>
            </div>

            <p style={{ lineHeight: 1.6, color: '#cbd5e1', marginBottom: '1.2rem', fontSize: '0.88rem' }}>
              Modern, patient-focused diagnostic center in Madhugiri, Tumkur district. Providing 16-slice CT scan,
              high-frequency digital X-ray, ultrasound color Doppler, automated clinical laboratory, and cardiology tests.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                background: 'rgba(0, 168, 89, 0.15)',
                border: '1px solid rgba(0, 168, 89, 0.35)',
                borderRadius: '8px',
                color: '#34d399',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={16} />
              <span>Certified Diagnostic Quality</span>
            </div>
          </div>

          {/* Col 2: Clinical Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1.2rem' }}>
              Diagnostic Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    style={{
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1.2rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#equipment-3d" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>
                  Interactive 3D Equipments
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>
                  About Us & Leadership
                </a>
              </li>
              <li>
                <a href="#gallery" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>
                  Facility Gallery & Banners
                </a>
              </li>
              <li>
                <a href="#blogs" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>
                  Health & Test Guidelines
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDirectory}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#34d399',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  View All Tests & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#60a5fa',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  Book Diagnostic Scan / Lab Test
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Center Hours & Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1.2rem' }}>
              Center Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Center Location on Google Maps"
                  style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.4 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#34d399')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  K.H. Road, Near Doomlight Circle, Madhugiri, Tumkur Dist., Karnataka
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="#fbbf24" style={{ flexShrink: 0 }} />
                <a href={`tel:${CLINIC_INFO.phone}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                  {CLINIC_INFO.phoneFormatted}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
                <a
                  href={CLINIC_INFO.gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Compose email to Sampoorna Diagnostic on Gmail"
                  style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1' }}>{CLINIC_INFO.workingHours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical SEO & Medical Compliance Summary Box */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '1.2rem 1.6rem',
            marginBottom: '2.5rem',
            fontSize: '0.8rem',
            color: '#94a3b8',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: '#ffffff' }}>Ethical Clinical Care & Quality Compliance:</strong> Sampoorna
          Diagnostic Center adheres strictly to established clinical quality protocols and the
          AERB safety guidelines for diagnostic radiation. Diagnostic images and laboratory values require clinical
          correlation by certified physicians. Serving Madhugiri, Pavagada, Koratagere, Sira, and Tumkur district.
        </div>

        {/* Bottom Copyright & Credits */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.82rem',
          }}
        >
          <div style={{ color: '#94a3b8' }}>
            © {new Date().getFullYear()} Sampoorna Diagnostic Center (ಸಂಪೂರ್ಣ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಸೆಂಟರ್). All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ color: '#94a3b8' }}>
              Designed By{'  '}
              <a
                href="https://www.damadigitalanalytics.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7dd3fc')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#38bdf8')}
              >
                DAMA Digital Analytics
              </a>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            {/* <span style={{ color: '#10b981', fontWeight: 600 }}>Accurate Diagnosis, Better Care</span> */}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
