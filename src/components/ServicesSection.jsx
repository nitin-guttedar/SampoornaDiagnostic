import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/content';
import {
  Cpu,
  Activity,
  Radio,
  Microscope,
  Heart,
  Users,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP = {
  'ct-scan': Cpu,
  'ultrasound': Activity,
  'x-ray': Radio,
  'laboratory': Microscope,
  'cardiology': Heart,
  'consultations': Users,
};

export default function ServicesSection({ onOpenBooking, theme }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === activeCategory);

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Clinical Diagnostic Departments</span>
          <h2>Comprehensive Services Under One Roof</h2>
          <p>
            Combining modern multislice imaging technology with an automated, high-standard clinical laboratory
            and superspeciality medical opinions for the people of Madhugiri and Tumkur district.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              background: activeCategory === 'all' ? '#034ea2' : 'var(--bg-card)',
              border: activeCategory === 'all' ? '1px solid #60a5fa' : '1px solid var(--border-light)',
              color: activeCategory === 'all' ? '#ffffff' : 'var(--text-primary)',
              fontSize: '0.86rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: activeCategory === 'all' ? '0 4px 12px rgba(3, 78, 162, 0.3)' : 'var(--shadow-card)',
            }}
          >
            All Services (6)
          </button>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveCategory(s.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                background: activeCategory === s.id ? '#00a859' : 'var(--bg-card)',
                border: activeCategory === s.id ? '1px solid #34d399' : '1px solid var(--border-light)',
                color: activeCategory === s.id ? '#ffffff' : 'var(--text-primary)',
                fontSize: '0.86rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeCategory === s.id ? '0 4px 12px rgba(0, 168, 89, 0.3)' : 'var(--shadow-card)',
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="services-grid"
        >
          {filteredServices.map((service, idx) => {
            const Icon = ICON_MAP[service.id] || Activity;
            return (
              <motion.div
                key={service.id}
                className="glass-panel glass-panel-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                style={{
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glowing Top Corner Flare */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background: 'radial-gradient(circle at top right, rgba(3, 78, 162, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                <div>
                  {/* Top Badge & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1.2rem',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(3, 78, 162, 0.2) 0%, rgba(0, 168, 89, 0.15) 100%)',
                        border: '1px solid var(--border-brand)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(3, 78, 162, 0.15)',
                      }}
                    >
                      <Icon size={24} color="#00a859" />
                    </div>

                    <span className="glass-badge glass-badge-green" style={{ fontSize: '0.74rem' }}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--heading-color)', marginBottom: '0.6rem' }}>
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.2rem',
                    }}
                  >
                    {service.fullDesc}
                  </p>

                  {/* Key Tests Included */}
                  <h4
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Available Investigations:
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '7px',
                      marginBottom: '1.6rem',
                    }}
                  >
                    {service.tests.slice(0, 4).map((test, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.86rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <CheckCircle2 size={14} color="#00a859" style={{ flexShrink: 0 }} />
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.1rem',
                    borderTop: '1px solid var(--border-light)',
                  }}
                >
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="btn-primary"
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.84rem' }}
                  >
                    <Calendar size={14} />
                    <span>Book Test</span>
                  </button>

                  <a
                    href="#equipment-3d"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#034ea2',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <span>View 3D</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
