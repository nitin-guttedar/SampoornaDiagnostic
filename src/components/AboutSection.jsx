import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../data/content';
import { ASSETS, CLINIC_INFO } from '../data/assets';
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  CheckCircle,
  Zap,
  ThermometerSnowflake,
  UserCheck,
  Building2,
} from 'lucide-react';

export default function AboutSection({ theme }) {
  const valueIcons = [ShieldCheck, HeartHandshake, Award, CheckCircle];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Visual Collage of Assets */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ position: 'relative' }}
          >
            {/* Main Facility Banner Asset */}
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <img
                src={ASSETS.bannerMain}
                alt="Sampoorna Diagnostic Center Madhugiri Facility"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Overlapping KPME Official Board Certificate Asset */}
            <div
              className="glass-panel about-kpme-badge"
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-15px',
                maxWidth: '280px',
                padding: '12px',
                border: '1px solid var(--border-green)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
                background: 'var(--bg-card)',
              }}
            >
              <img
                src={ASSETS.boardRegistration}
                alt="KPME Registration TMK01236ALCDS - Dr. Somashekhar M.B."
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  marginBottom: '8px',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#00a859" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--heading-color)' }}>
                  Govt. KPME Approved
                </span>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              className="glass-panel about-exp-badge"
              style={{
                position: 'absolute',
                top: '-18px',
                left: '-15px',
                padding: '12px 18px',
                border: '1px solid rgba(11, 88, 202, 0.3)',
                background: 'linear-gradient(135deg, #034ea2 0%, #0b58ca 100%)',
                color: '#ffffff',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>1st</div>
              <div style={{ fontSize: '0.74rem', color: '#e0f2fe', fontWeight: 600 }}>
                16-Slice CT in Madhugiri
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission, Vision, Values, Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="glass-badge glass-badge-green" style={{ marginBottom: '1rem' }}>
              <Building2 size={14} />
              <span>{ABOUT_CONTENT.registration}</span>
            </span>

            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--heading-color)', margin: '0.8rem 0 1rem 0' }}>
              Reliable, Evidence-Based Diagnostics Close to Home
            </h2>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.4rem' }}>
              {ABOUT_CONTENT.lead}
            </p>

            {/* Mission & Vision Mini Cards */}
            <div className="about-mv-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '1.6rem' }}>
              <div
                style={{
                  background: 'rgba(3, 78, 162, 0.08)',
                  border: '1px solid var(--border-brand)',
                  padding: '14px',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#034ea2', marginBottom: '4px' }}>
                  OUR MISSION
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {ABOUT_CONTENT.mission}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(0, 168, 89, 0.08)',
                  border: '1px solid var(--border-green)',
                  padding: '14px',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00a859', marginBottom: '4px' }}>
                  OUR VISION
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {ABOUT_CONTENT.vision}
                </p>
              </div>
            </div>

            {/* Core Values: Accuracy, Compassion, Transparency, Ethics */}
            <h3 style={{ fontSize: '1.08rem', color: 'var(--heading-color)', marginBottom: '0.75rem' }}>
              Our 4 Core Clinical Values
            </h3>
            <div
              className="about-values-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                marginBottom: '1.6rem',
              }}
            >
              {ABOUT_CONTENT.values.map((v, i) => {
                const Icon = valueIcons[i] || ShieldCheck;
                return (
                  <div
                    key={v.title}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      background: 'var(--bg-tertiary)',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <Icon size={17} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--heading-color)' }}>{v.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>{v.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Technology & Infrastructure Highlights */}
            <div
              className="about-infra-card"
              style={{
                background: 'var(--bg-card)',
                padding: '14px 18px',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <Zap size={20} color="#f59e0b" />
                <ThermometerSnowflake size={20} color="#0284c7" />
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                <strong style={{ color: 'var(--heading-color)' }}>Advanced Infrastructure:</strong> Dedicated power backup and
                temperature-controlled laboratory platforms maintain consistent equipment calibration and sample integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .about-kpme-badge {
            position: static !important;
            max-width: 100% !important;
            margin-top: 14px !important;
          }
          .about-exp-badge {
            top: 10px !important;
            left: 10px !important;
            padding: 8px 12px !important;
          }
          .about-mv-grid {
            grid-template-columns: 1fr !important;
          }
          .about-values-grid {
            grid-template-columns: 1fr !important;
          }
          .about-infra-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
