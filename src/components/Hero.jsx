import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, KEY_BENEFITS } from '../data/content';
import { CLINIC_INFO } from '../data/assets';
import DiagnosticScene from './canvas/DiagnosticScene';
import {
  ShieldCheck,
  Zap,
  Activity,
  Calendar,
  PhoneCall,
  CheckCircle2,
  Cpu,
  Microscope,
  Radio,
  FileSearch,
} from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenDirectory, theme }) {
  const [heroModel, setHeroModel] = useState('ctScan');

  const modelTabs = [
    { key: 'ctScan', label: '16-Slice CT', icon: Cpu, badge: '1st in Madhugiri' },
    { key: 'microscope', label: 'Hi-Tech Lab', icon: Microscope, badge: 'Automated' },
    { key: 'xray', label: 'Digital X-Ray', icon: Radio, badge: 'Low Dose' },
    { key: 'ultrasound', label: 'Color Doppler', icon: Activity, badge: '3D/4D' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '135px',
        paddingBottom: '70px',
        overflow: 'hidden',
      }}
    >
      {/* Background Animated Gradient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '600px',
          background:
            theme === 'light'
              ? 'radial-gradient(ellipse at center, rgba(3, 78, 162, 0.12) 0%, rgba(0, 168, 89, 0.08) 50%, transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(3, 78, 162, 0.25) 0%, rgba(0, 168, 89, 0.15) 50%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.08fr 0.92fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Heading, Value Prop, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
              <span className="glass-badge glass-badge-amber">
                <Zap size={14} />
                <span>16-Slice CT Scan • 1st Time in Madhugiri</span>
              </span>
              <span className="glass-badge glass-badge-green">
                <ShieldCheck size={14} />
                <span>KPME: {CLINIC_INFO.kpmeReg}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.6rem)',
                lineHeight: 1.14,
                marginBottom: '1rem',
                color: 'var(--heading-color)',
              }}
            >
              Sampoorna Diagnostic{' '}
              <span className="gradient-text-blue">Center</span>
              <br />
              <span className="gradient-text-sun" style={{ fontSize: '0.9em' }}>
                Accurate Diagnosis,
              </span>{' '}
              <span style={{ color: 'var(--heading-color)' }}>Better Care</span>
            </h1>

            {/* Sub-heading & Intro */}
            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--text-primary)',
                lineHeight: 1.6,
                marginBottom: '0.8rem',
                fontWeight: 500,
              }}
            >
              {HERO_CONTENT.subheading}
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.8rem',
              }}
            >
              {HERO_CONTENT.intro}
            </p>

            {/* Key Clinical Guarantees */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" />
                <span>High-Standard Automated Lab</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" />
                <span>Experienced Radiologists & MDs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" />
                <span>Same-Day WhatsApp Reports</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" />
                <span>Uninterrupted Power & Cold Chain</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn-primary" style={{ fontSize: '0.98rem', padding: '0.9rem 1.8rem' }}>
                <Calendar size={17} />
                <span>Book Test / CT Scan</span>
              </button>

              <button onClick={onOpenDirectory} className="btn-secondary" style={{ fontSize: '0.98rem', padding: '0.9rem 1.6rem' }}>
                <FileSearch size={17} color="#0b58ca" />
                <span>View Tests & Pricing</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="btn-green"
                style={{ fontSize: '0.98rem', padding: '0.9rem 1.6rem' }}
              >
                <PhoneCall size={17} />
                <span>Call Helpline</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Equipment Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ position: 'relative' }}
          >
            {/* 3D Equipment Selector Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '12px',
                overflowX: 'auto',
                paddingBottom: '4px',
              }}
            >
              {modelTabs.map((tab) => {
                const Icon = tab.icon;
                const active = heroModel === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setHeroModel(tab.key)}
                    style={{
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '9px 10px',
                      background: active
                        ? 'linear-gradient(135deg, rgba(3, 78, 162, 0.25) 0%, rgba(0, 168, 89, 0.2) 100%)'
                        : 'var(--bg-card)',
                      border: active ? '1.5px solid #00a859' : '1px solid var(--border-light)',
                      borderRadius: '12px',
                      color: active ? 'var(--heading-color)' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: active ? '0 4px 14px rgba(0, 168, 89, 0.2)' : 'none',
                    }}
                  >
                    <Icon size={17} color={active ? '#00a859' : '#64748b'} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{tab.label}</span>
                    <span
                      style={{
                        fontSize: '0.66rem',
                        color: active ? '#d97706' : 'var(--text-muted)',
                        fontWeight: 600,
                      }}
                    >
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 3D WebGL Canvas Card */}
            <div className="canvas-3d-wrapper" style={{ height: '430px' }}>
              {/* Scanline Animation */}
              <div className="scan-line" />

              {/* Status HUD Header Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '16px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(7, 13, 24, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-green)',
                }}
              >
                <span className="pulse-indicator" />
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#00a859', letterSpacing: '0.04em' }}>
                  EQUIPMENT STATUS: ACTIVE & CALIBRATED
                </span>
              </div>

              {/* 3D Scene */}
              <DiagnosticScene activeModel={heroModel} theme={theme} />
            </div>

            {/* Floating Telemetry Stats Badge */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '-22px',
                left: '20px',
                right: '20px',
                padding: '12px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-card)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Facility Location
                </span>
                <p style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--heading-color)' }}>
                  Doomlight Circle, Madhugiri
                </p>
              </div>
              <div style={{ height: '26px', width: '1px', background: 'var(--border-light)' }} />
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Consultant Head
                </span>
                <p style={{ fontSize: '0.86rem', fontWeight: 700, color: '#034ea2' }}>
                  Dr. Somashekhar M.B.
                </p>
              </div>
              <div style={{ height: '26px', width: '1px', background: 'var(--border-light)' }} />
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Diagnostics
                </span>
                <p style={{ fontSize: '0.86rem', fontWeight: 700, color: '#00a859' }}>
                  Imaging + Pathology
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Key Pillars / Benefits Bar from Content PDF */}
        <div
          style={{
            marginTop: '70px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
          className="benefits-grid"
        >
          {KEY_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              className="glass-panel glass-panel-hover"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              style={{
                padding: '1.5rem 1.3rem',
                borderTop: `3px solid ${benefit.color}`,
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: `${benefit.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.9rem',
                }}
              >
                <ShieldCheck size={20} color={benefit.color} />
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--heading-color)', marginBottom: '0.35rem' }}>
                {benefit.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {benefit.desc}
              </p>
              <div
                style={{
                  marginTop: '0.85rem',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: benefit.color,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                ✓ {benefit.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
