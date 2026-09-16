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
  ExternalLink,
  MapPin,
  UserCheck,
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
      className="hero-section"
      style={{
        position: 'relative',
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
            <div
              className="hero-badges-wrapper"
              style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.2rem' }}
            >
              <span className="glass-badge glass-badge-amber">
                <Zap size={14} />
                <span>16-Slice CT Scan • 1st Time in Madhugiri</span>
              </span>
              <span className="glass-badge glass-badge-green">
                <ShieldCheck size={14} />
                <span>Hospital-Grade Quality</span>
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
              className="hero-guarantees"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" style={{ flexShrink: 0 }} />
                <span>High-Standard Automated Lab</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" style={{ flexShrink: 0 }} />
                <span>Experienced Radiologists & MDs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" style={{ flexShrink: 0 }} />
                <span>Same-Day WhatsApp Reports</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#00a859" style={{ flexShrink: 0 }} />
                <span>Uninterrupted Power & Cold Chain</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn-primary hero-cta-btn" style={{ fontSize: '0.95rem', padding: '0.85rem 1.6rem' }}>
                <Calendar size={17} style={{ flexShrink: 0 }} />
                <span>Book Test / CT Scan</span>
              </button>

              <button onClick={onOpenDirectory} className="btn-secondary hero-cta-btn" style={{ fontSize: '0.95rem', padding: '0.85rem 1.4rem' }}>
                <FileSearch size={17} color="#0b58ca" style={{ flexShrink: 0 }} />
                <span>View Tests & Pricing</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="btn-green hero-cta-btn"
                style={{ fontSize: '0.95rem', padding: '0.85rem 1.4rem' }}
              >
                <PhoneCall size={17} style={{ flexShrink: 0 }} />
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
              className="hero-tabs-scroll"
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '12px',
                overflowX: 'auto',
                paddingBottom: '4px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {modelTabs.map((tab) => {
                const Icon = tab.icon;
                const active = heroModel === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setHeroModel(tab.key)}
                    className="hero-tab-btn"
                    style={{
                      flex: '1',
                      minWidth: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 6px',
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
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{tab.label}</span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        color: active ? '#d97706' : 'var(--text-muted)',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 3D WebGL Canvas Card */}
            <div className="canvas-3d-wrapper hero-canvas-wrapper">
              {/* Scanline Animation */}
              <div className="scan-line" />

              {/* Status HUD Header Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '14px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(7, 13, 24, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 10px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-green)',
                }}
              >
                <span className="pulse-indicator" />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#00a859', letterSpacing: '0.04em' }}>
                  ACTIVE & CALIBRATED
                </span>
              </div>

              {/* 3D Scene */}
              <DiagnosticScene activeModel={heroModel} theme={theme} />
            </div>

            {/* Floating Telemetry Stats Badge */}
            <div className="glass-panel hero-telemetry-badge">
              {/* Item 1: Location */}
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-telemetry-item hero-telemetry-location"
                title="Open Madhugiri Center on Google Maps"
              >
                <div className="telemetry-icon-box location-icon-box">
                  <MapPin size={15} color="#00a859" />
                </div>
                <div className="telemetry-text-group">
                  <span className="telemetry-label">
                    <span>Location</span>
                    <ExternalLink size={9} color="#00a859" />
                  </span>
                  <p className="telemetry-value telemetry-value-location">
                    Madhugiri
                  </p>
                </div>
              </a>

              {/* Item 2: Consultant Head */}
              <div className="hero-telemetry-item hero-telemetry-head">
                <div className="telemetry-icon-box head-icon-box">
                  <UserCheck size={15} color="#034ea2" />
                </div>
                <div className="telemetry-text-group">
                  <span className="telemetry-label">
                    Consultant Head
                  </span>
                  <p className="telemetry-value telemetry-value-head">
                    Dr. Suhas Bhoovanalli
                  </p>
                </div>
              </div>

              {/* Item 3: Diagnostics */}
              <div className="hero-telemetry-item hero-telemetry-diag">
                <div className="telemetry-icon-box diag-icon-box">
                  <Activity size={15} color="#00a859" />
                </div>
                <div className="telemetry-text-group">
                  <span className="telemetry-label">
                    Diagnostics
                  </span>
                  <p className="telemetry-value telemetry-value-diag">
                    Imaging + Pathology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Key Pillars / Benefits Bar from Content PDF */}
        <div
          style={{
            marginTop: '60px',
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
                padding: '1.4rem 1.2rem',
                borderTop: `3px solid ${benefit.color}`,
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: `${benefit.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem',
                }}
              >
                <ShieldCheck size={20} color={benefit.color} />
              </div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--heading-color)', marginBottom: '0.35rem' }}>
                {benefit.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {benefit.desc}
              </p>
              <div
                style={{
                  marginTop: '0.8rem',
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
        .hero-canvas-wrapper {
          height: 430px;
        }
        .hero-telemetry-badge {
          position: absolute;
          bottom: -22px;
          left: 10px;
          right: 10px;
          display: flex;
          justifyContent: space-between;
          align-items: center;
          gap: 12px;
          padding: 9px 14px;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 14px;
          box-shadow: 0 10px 28px -8px rgba(3, 78, 162, 0.15);
        }

        .hero-telemetry-item {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          min-width: 0;
          flex-shrink: 0;
        }

        .hero-telemetry-head {
          flex-shrink: 1;
        }

        .hero-telemetry-item:not(:last-child)::after {
          content: '';
          display: block;
          height: 22px;
          width: 1px;
          background: var(--border-light);
          margin-left: 10px;
          flex-shrink: 0;
        }

        .telemetry-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .location-icon-box {
          background: rgba(0, 168, 89, 0.12);
        }
        .head-icon-box {
          background: rgba(3, 78, 162, 0.12);
        }
        .diag-icon-box {
          background: rgba(0, 168, 89, 0.12);
        }

        .telemetry-text-group {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }

        .telemetry-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 3px;
          font-weight: 600;
          white-space: nowrap;
        }

        .telemetry-value {
          font-size: 0.83rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          white-space: nowrap;
        }
        .telemetry-value-location {
          color: var(--heading-color);
          transition: color 0.2s;
        }
        .hero-telemetry-location:hover .telemetry-value-location {
          color: #00a859;
        }
        .telemetry-value-head {
          color: #034ea2;
        }
        .telemetry-value-diag {
          color: #00a859;
        }

        .hero-section {
          padding-top: 145px;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 135px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 125px !important;
          }
          .hero-badges-wrapper {
            margin-top: 14px !important;
            margin-bottom: 1rem !important;
            gap: 8px !important;
          }
          .hero-canvas-wrapper {
            height: 360px !important;
          }
          .hero-telemetry-badge {
            position: static !important;
            margin-top: 14px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            padding: 10px !important;
          }
          .hero-telemetry-item {
            width: 100% !important;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-light);
            border-radius: 10px;
            padding: 8px 12px !important;
          }
          .hero-telemetry-item:not(:last-child)::after {
            display: none !important;
          }
          .hero-telemetry-head {
            background: rgba(3, 78, 162, 0.06) !important;
            border: 1px solid rgba(3, 78, 162, 0.16) !important;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 120px !important;
          }
          .hero-badges-wrapper {
            margin-top: 16px !important;
          }
          .hero-tabs-scroll {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
            overflow-x: visible !important;
            padding-bottom: 0 !important;
          }
          .hero-tab-btn {
            padding: 8px 6px !important;
          }
          .hero-guarantees {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-canvas-wrapper {
            height: 310px !important;
          }
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
