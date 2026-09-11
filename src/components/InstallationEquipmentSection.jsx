import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTALLING_EQUIPMENT } from '../data/content';
import {
  Cpu,
  Activity,
  Radio,
  HeartPulse,
  FlaskConical,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Clock,
  Settings2,
  FileCheck2,
} from 'lucide-react';

export default function InstallationEquipmentSection({ onOpenBooking, theme }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Equipment (6)' },
    { key: 'radiology', label: 'Radiology & Imaging (3)' },
    { key: 'cardiology', label: 'Cardiology (2)' },
    { key: 'pathology', label: 'Pathology & Lab (1)' },
  ];

  const filteredEquipment =
    activeCategory === 'all'
      ? INSTALLING_EQUIPMENT
      : INSTALLING_EQUIPMENT.filter((item) => item.categoryKey === activeCategory);

  return (
    <section
      id="new-equipment"
      className="section-padding"
      style={{
        position: 'relative',
        background:
          theme === 'light'
            ? 'linear-gradient(180deg, rgba(248, 250, 252, 0.6) 0%, rgba(241, 245, 249, 0.9) 100%)'
            : 'linear-gradient(180deg, rgba(10, 17, 30, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
      }}
    >
      {/* Background ambient accents */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(3, 78, 162, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 168, 89, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem' }}>
            <span className="glass-badge glass-badge-amber">
              <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }} />
              <span>Technology Commissioning</span>
            </span>
            <span className="glass-badge glass-badge-blue">
              <Sparkles size={13} color="#034ea2" />
              <span>Hospital-Grade Infrastructure</span>
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 2.7rem)', color: 'var(--heading-color)' }}>
            New Equipment & Machines <span className="gradient-text-blue">Under Installation</span>
          </h2>

          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            To deliver unmatched diagnostic precision and eliminate travel to metropolitan hospitals, Sampoorna Diagnostic Center
            is actively installing and calibrating state-of-the-art multi-slice CT, high-definition sonography, computerized TMT stress
            systems, 12-lead ECG, and automated lab platforms right here in Madhugiri.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                id={`filter-btn-${cat.key}`}
                style={{
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 600,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid #034ea2' : '1px solid var(--border-light)',
                  background: isActive
                    ? 'linear-gradient(135deg, #034ea2 0%, #0b58ca 100%)'
                    : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 6px 18px rgba(3, 78, 162, 0.28)' : 'var(--shadow-card)',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Equipment Cards Grid */}
        <motion.div
          layout
          className="equip-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 390px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          <AnimatePresence>
            {filteredEquipment.map((equip, index) => (
              <motion.div
                key={equip.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="glass-panel equip-card-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = equip.badgeColor;
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                }}
              >
                {/* Image Container with Badges */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden', background: '#0b1324' }}>
                  <img
                    src={equip.image}
                    alt={equip.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Dark gradient overlay for text readability */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.7) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top Badges Bar: Category on Left, Installation Status on Right (Flexbox prevents any overlap) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      right: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px',
                      zIndex: 3,
                    }}
                  >
                    {/* Category Pill */}
                    <div
                      style={{
                        background: `${equip.badgeColor}ee`,
                        backdropFilter: 'blur(8px)',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {equip.category}
                    </div>

                    {/* Installation Status Beacon */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(15, 23, 42, 0.88)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(251, 191, 36, 0.55)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: '#f59e0b',
                          boxShadow: '0 0 8px #f59e0b',
                          display: 'inline-block',
                          animation: 'pulse 1.8s infinite',
                        }}
                      />
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fef3c7' }}>
                        Installation in Process
                      </span>
                    </div>
                  </div>

                  {/* Bottom Image Overlay: Highlight Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      right: '12px',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        color: '#0f172a',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Sparkles size={13} color="#d97706" />
                      <span>{equip.highlight}</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Brand & Modality */}
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    {equip.brand}
                  </div>

                  {/* Machine Name */}
                  <h3 style={{ fontSize: '1.28rem', fontWeight: 700, color: 'var(--heading-color)', lineHeight: 1.35, marginBottom: '0.5rem' }}>
                    {equip.name}
                  </h3>

                  {/* Modality Tag */}
                  <p style={{ fontSize: '0.86rem', color: '#034ea2', fontWeight: 600, marginBottom: '1.1rem' }}>
                    {equip.modality}
                  </p>

                  {/* Specs Quick Matrix */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px 14px',
                      background: 'var(--bg-tertiary)',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {equip.specs.slice(0, 4).map((spec, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                          {spec.label}
                        </div>
                        <div style={{ fontWeight: 700, color: 'var(--heading-color)', fontSize: '0.8rem', lineHeight: 1.35, wordBreak: 'break-word' }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Capabilities List */}
                  <div style={{ marginBottom: '1.2rem', flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      Key Capabilities & Technology
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {equip.features.slice(0, 3).map((feat, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '7px',
                            fontSize: '0.82rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.35,
                          }}
                        >
                          <CheckCircle2 size={14} color="#00a859" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clinical Applications summary */}
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      background: 'rgba(3, 78, 162, 0.04)',
                      borderLeft: `3px solid ${equip.badgeColor}`,
                      marginBottom: '1.3rem',
                      lineHeight: 1.35,
                    }}
                  >
                    <strong style={{ color: 'var(--heading-color)' }}>Clinical Scope: </strong>
                    {equip.clinicalApplications}
                  </div>

                  {/* Action CTA Button */}
                  <button
                    onClick={() => onOpenBooking(equip.name)}
                    className="btn-outline"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      borderRadius: '10px',
                      borderColor: 'var(--border-light)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = equip.badgeColor;
                      e.currentTarget.style.borderColor = equip.badgeColor;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                  >
                    <span>Inquire / Pre-Book for {equip.name.split(' ')[0]}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Assurance Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.6rem 2rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(3, 78, 162, 0.08) 0%, rgba(0, 168, 89, 0.08) 100%)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#034ea2',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileCheck2 size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--heading-color)', margin: 0, fontWeight: 700 }}>
                Calibrated by Certified Biomedical Engineers
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: '4px 0 0 0', lineHeight: 1.4 }}>
                All installation stages adhere to strict radiation safety standards (AERB guidelines), KPME clinical norms,
                and vendor calibration protocols to guarantee zero error margins.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('Equipment Consultation')}
            className="btn-primary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem', flexShrink: 0 }}
          >
            Contact Installation Helpdesk
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
        }
        .equip-cards-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 2rem !important;
        }
        @media (max-width: 1280px) {
          .equip-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.6rem !important;
          }
        }
        @media (max-width: 768px) {
          .equip-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
