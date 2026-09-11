import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO, ASSETS } from '../data/assets';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageSquare,
  ShieldCheck,
  Building,
  Calendar,
  ExternalLink,
} from 'lucide-react';

export default function ContactSection({ onOpenBooking, theme }) {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Visit or Connect</span>
          <h2>Reach Sampoorna Diagnostic Center</h2>
          <p>
            Conveniently located at Doomlight Circle on K.H. Road, Madhugiri. Serving patients, clinics, and
            hospitals across Madhugiri taluk and Tumkur district.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
          }}
          className="contact-grid"
        >
          {/* Left Column: Contact Cards & Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {/* Center Address Card */}
            <div className="glass-panel" style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(3, 78, 162, 0.12)',
                    border: '1px solid var(--border-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} color="#034ea2" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--heading-color)', marginBottom: '4px' }}>
                    Center Address & Landmark
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                    {CLINIC_INFO.address}
                  </p>
                  <div style={{ fontSize: '0.82rem', color: '#00a859', fontWeight: 700, marginBottom: '0.6rem' }}>
                    Landmark: Near Doomlight Circle (Heart of Madhugiri)
                  </div>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '6px 14px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Navigation size={13} />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpline & WhatsApp Card */}
            <div className="glass-panel" style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0, 168, 89, 0.12)',
                    border: '1px solid var(--border-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} color="#00a859" />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--heading-color)', marginBottom: '4px' }}>
                    Direct Telephone & WhatsApp
                  </h4>
                  <p style={{ fontSize: '1.15rem', color: 'var(--heading-color)', fontWeight: 800, marginBottom: '0.6rem' }}>
                    {CLINIC_INFO.phoneFormatted}
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="btn-primary"
                      style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                    >
                      <Phone size={13} />
                      <span>Dial Now</span>
                    </a>
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Sampoorna Diagnostic Center, I would like to inquire about a test/CT scan.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-green"
                      style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                    >
                      <MessageSquare size={13} />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Registration Card */}
            <div className="glass-panel" style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.12)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} color="#d97706" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--heading-color)', marginBottom: '4px' }}>
                    Official Email & KPME Accreditation
                  </h4>
                  <div style={{ marginBottom: '6px' }}>
                    <a
                      href={CLINIC_INFO.gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open in Gmail to compose mail to Sampoorna Diagnostic"
                      style={{
                        fontSize: '0.96rem',
                        color: '#034ea2',
                        fontWeight: 700,
                        textDecoration: 'underline',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.2s',
                      }}
                    >
                      <span>{CLINIC_INFO.email}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    KPME License: <strong style={{ color: 'var(--heading-color)' }}>{CLINIC_INFO.kpmeReg}</strong> • Chief Consultant:{' '}
                    <strong style={{ color: '#034ea2' }}>{CLINIC_INFO.headDoctor}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="glass-panel" style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} color="#0284c7" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--heading-color)', marginBottom: '4px' }}>
                    Operating Hours
                  </h4>
                  <div style={{ fontSize: '0.9rem', color: 'var(--heading-color)', marginBottom: '2px' }}>
                    <strong>{CLINIC_INFO.workingHours.weekdays}</strong>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    <strong>{CLINIC_INFO.workingHours.sunday}</strong>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#00a859', fontWeight: 700 }}>
                    ⚡ Emergency Trauma CT Scans & Acute Lab Support
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Location Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.2rem',
                }}
              >
                <div>
                  <span className="glass-badge glass-badge-green" style={{ fontSize: '0.74rem' }}>
                    Center Location Map
                  </span>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--heading-color)', marginTop: '0.4rem' }}>
                    Madhugiri, Tumkur District
                  </h3>
                </div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00a859' }} />
              </div>

              {/* Map Preview Graphic with Pinpoint */}
              <div
                style={{
                  height: '240px',
                  borderRadius: '16px',
                  background:
                    theme === 'light'
                      ? 'radial-gradient(circle at center, #e0f2fe 0%, #f1f5f9 100%)'
                      : 'radial-gradient(circle at center, #0f223f 0%, #08101d 100%)',
                  border: '1px solid var(--border-brand)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                }}
              >
                {/* Visual Grid Lines */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      theme === 'light'
                        ? 'linear-gradient(rgba(3,78,162,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(3,78,162,0.06) 1px, transparent 1px)'
                        : 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Animated Pulsing Pin */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: theme === 'light' ? '#ffffff' : 'rgba(3, 78, 162, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 8px auto',
                      boxShadow: '0 0 25px rgba(0, 168, 89, 0.5)',
                      animation: 'labPulse 2.5s infinite',
                      border: '2px solid #00a859',
                    }}
                  >
                    <MapPin size={28} color="#d97706" />
                  </div>
                  <strong style={{ color: 'var(--heading-color)', fontSize: '0.94rem' }}>
                    SAMPOORNA DIAGNOSTIC
                  </strong>
                  <div style={{ color: '#034ea2', fontSize: '0.82rem', fontWeight: 600 }}>
                    Near Doomlight Circle, K.H. Road
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Easily accessible from Madhugiri bus stand, Pavagada road, Tumkur highway, and Koratagere bypass. Ample
                parking space and wheelchair accessible patient ramp.
              </p>
            </div>

            <div className="contact-actions-row" style={{ display: 'flex', gap: '12px' }}>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                <Navigation size={16} />
                <span>Open Google Maps</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="btn-secondary"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                <Calendar size={16} color="#034ea2" />
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .contact-actions-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
