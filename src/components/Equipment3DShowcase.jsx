import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DiagnosticScene from './canvas/DiagnosticScene';
import {
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle,
  Cpu,
  Microscope,
  Radio,
  Activity,
  Dna,
  ArrowRight,
} from 'lucide-react';

const EQUIPMENT_DATA = {
  ctScan: {
    name: '16-Slice Multislice CT Scanner',
    modality: 'Advanced Computed Tomography',
    badge: '1st Time in Madhugiri',
    highlightColor: '#034ea2',
    specs: [
      { label: 'Slice Capability', value: '16 Sub-Millimeter Slices per Rotation' },
      { label: 'Radiation Safety', value: 'Smart Dose Modulated Protocol (Low Exposure)' },
      { label: 'Clinical Reconstructions', value: 'Volumetric 3D, Sagittal & Coronal MPR' },
      { label: 'Emergency Protocol', value: 'Instant Head Trauma & Stroke Ready' },
    ],
    indications: [
      'Trauma & Head Injury Evaluation',
      'Stroke & Acute Neurological Deficits',
      'High-Resolution HRCT Chest (Lungs & Infection)',
      'Triple-Phase Abdomen & Pelvis CT',
    ],
    description:
      'Sampoorna Diagnostic brings Madhugiri its premier 16-slice CT scanner. Enabling high-speed volumetric patient scanning in seconds, it eliminates motion artifacts and provides clinicians with razor-sharp diagnostic precision for critical medical decisions.',
  },
  microscope: {
    name: 'Automated Clinical Laboratory Platform',
    modality: 'Pathology & Biochemistry Analyzers',
    badge: 'High-Precision Automated Testing',
    highlightColor: '#00a859',
    specs: [
      { label: 'Hematology Platform', value: '5-Part Differential Automated Cell Counter' },
      { label: 'Biochemistry System', value: 'Fully Automated Kinetic & Endpoint Analyzer' },
      { label: 'Quality Assurance', value: 'Strict Internal & External Quality Controls' },
      { label: 'Turnaround Time', value: '90 - 120 Minutes for Routine Profiles' },
    ],
    indications: [
      'Complete Blood Count (CBC) & ESR',
      'Liver & Kidney Function Profiles (LFT, KFT)',
      'Lipid Profile & Diabetic Screen (HbA1c)',
      'Thyroid Profile (T3, T4, TSH) & Hormones',
    ],
    description:
      'Our clinical pathology lab is equipped with computerized automated analyzers and precision optics. With sample barcoding, zero manual clerical transcription errors, and climate-controlled sample storage, our reports give doctors complete confidence.',
  },
  xray: {
    name: 'Digital Radiography (X-Ray) System',
    modality: 'Digital Flat-Panel Radiography',
    badge: 'Minimal Radiation Exposure',
    highlightColor: '#0284c7',
    specs: [
      { label: 'Detector Technology', value: 'Direct Digital Flat-Panel Detector (FPD)' },
      { label: 'Radiation Dose', value: 'Up to 70% Lower than Conventional X-Ray' },
      { label: 'Image Output', value: 'High-Resolution DICOM & Instant Digital Print' },
      { label: 'Archiving', value: 'Cloud Digital Archiving & WhatsApp Reports' },
    ],
    indications: [
      'Chest Radiographs (PA & Lateral)',
      'Orthopedic Bone Fractures & Joint Arthritis',
      'Cervical, Thoracic & Lumbar Spine Series',
      'Abdominal Radiography & Pre-Op Fitness',
    ],
    description:
      'Digital Radiography replaces older chemical film processing with instant electronic detectors. Images appear on the diagnostic workstation in seconds with supreme bone trabecular detail and soft tissue contrast, ensuring prompt clinical relief.',
  },
  ultrasound: {
    name: 'High-Resolution Ultrasound & Color Doppler',
    modality: 'Diagnostic Medical Sonography',
    badge: 'Zero Radiation • 3D/4D Capable',
    highlightColor: '#10b981',
    specs: [
      { label: 'Acoustic Probes', value: 'Multi-Frequency Curvilinear, Linear & Transvaginal' },
      { label: 'Hemodynamics', value: 'High-Sensitivity Color & Spectral Doppler' },
      { label: 'Specialty Scans', value: 'Obstetric Anomaly, NT Scan & Pelvic Studies' },
      { label: 'Safety Profile', value: '100% Non-Invasive & Completely Safe for Pregnancy' },
    ],
    indications: [
      'Obstetric / Fetal Growth & Well-Being Scans',
      'Abdominal & Pelvic Organ Ultrasound',
      'Arterial & Venous Doppler of Limbs',
      'Small Parts: Thyroid, Scrotum & Musculoskeletal',
    ],
    description:
      'Our ultrasound suite utilizes advanced acoustic beamforming and high-frequency transducers. We offer comprehensive prenatal scans, vascular Doppler for deep vein thrombosis (DVT) and peripheral artery disease, and abdominal imaging.',
  },
  dna: {
    name: 'Molecular & Immunoassay Diagnostics',
    modality: 'Specialized Immunology & Biomarkers',
    badge: 'Advanced Diagnostic Biomarkers',
    highlightColor: '#f59e0b',
    specs: [
      { label: 'Testing Method', value: 'Chemiluminescence & Micro-ELISA Systems' },
      { label: 'Biomarkers', value: 'Cardiac Troponin, Procalcitonin & Ferritin' },
      { label: 'Endocrinology', value: 'Reproductive & Metabolic Hormones' },
      { label: 'Infectious Panels', value: 'Viral Serology, Hepatitis, HIV & Dengue' },
    ],
    indications: [
      'Cardiac Emergency Markers (Troponin-I, CK-MB)',
      'Thyroid & Reproductive Hormone Panels',
      'Vitamin D3, B12 & Micronutrient Deficiencies',
      'Infectious Disease Serology & Autoantibody Screens',
    ],
    description:
      'From emergency cardiac biomarkers to reproductive hormones and micronutrient tracking, our immunoassay diagnostics help uncover root metabolic causes and monitor therapeutic responses under expert guidance.',
  },
};

export default function Equipment3DShowcase({ onOpenBooking, theme }) {
  const [selectedKey, setSelectedKey] = useState('ctScan');
  const [autoRotate, setAutoRotate] = useState(true);

  const currentEquipment = EQUIPMENT_DATA[selectedKey];

  return (
    <section id="equipment-3d" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Interactive 3D Technology Hub</span>
          <h2>Experience Our Diagnostic Equipment</h2>
          <p>
            Explore the advanced medical equipment powering accurate results at Sampoorna Diagnostic Center.
            Interact with real-time 3D models of our CT scanner, microscope, digital X-ray, and ultrasound.
          </p>
        </div>

        {/* Equipment Selector Ribbon */}
        <div
          className="equipment-pills-scroll"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {[
            { key: 'ctScan', label: '16-Slice CT Scan', icon: Cpu },
            { key: 'microscope', label: 'Laboratory Microscope', icon: Microscope },
            { key: 'xray', label: 'Digital X-Ray System', icon: Radio },
            { key: 'ultrasound', label: 'Ultrasound & Doppler', icon: Activity },
            { key: 'dna', label: 'Biochemistry & Molecular', icon: Dna },
          ].map((item) => {
            const Icon = item.icon;
            const active = selectedKey === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setSelectedKey(item.key)}
                className="equipment-pill-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '9999px',
                  background: active
                    ? 'linear-gradient(135deg, #034ea2 0%, #00a859 100%)'
                    : 'var(--bg-card)',
                  border: active ? '1.5px solid #00a859' : '1px solid var(--border-light)',
                  color: active ? '#ffffff' : 'var(--text-primary)',
                  fontSize: '0.86rem',
                  fontWeight: active ? 700 : 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: active ? '0 6px 20px rgba(0, 168, 89, 0.3)' : 'var(--shadow-card)',
                }}
              >
                <Icon size={15} color={active ? '#ffffff' : 'var(--text-muted)'} style={{ flexShrink: 0 }} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main 3D Canvas & Tech Specs Interactive Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '1.8rem',
            alignItems: 'stretch',
          }}
          className="equipment-grid"
        >
          {/* 3D Canvas Card */}
          <div
            className="glass-panel equipment-canvas-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: '480px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '16px',
                zIndex: 20,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  background: theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(7, 13, 24, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: currentEquipment.highlightColor,
                  }}
                />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--heading-color)' }}>
                  {currentEquipment.name}
                </span>
              </div>

              {/* Auto-rotate Toggle */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                style={{
                  background: autoRotate ? 'rgba(0, 168, 89, 0.15)' : 'var(--bg-card)',
                  border: autoRotate ? '1px solid #00a859' : '1px solid var(--border-light)',
                  color: autoRotate ? '#00a859' : 'var(--text-primary)',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <RotateCcw size={13} />
                <span>{autoRotate ? 'Auto Rotation ON' : 'Rotate Paused'}</span>
              </button>
            </div>

            {/* Canvas Scene */}
            <div style={{ flex: 1, minHeight: '440px', position: 'relative' }}>
              <DiagnosticScene activeModel={selectedKey} autoRotate={autoRotate} theme={theme} />
            </div>
          </div>

          {/* Right Column: Dynamic Equipment Dossier */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedKey}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Badge & Title */}
                <div style={{ marginBottom: '1.2rem' }}>
                  <span
                    className="glass-badge"
                    style={{
                      background: `${currentEquipment.highlightColor}15`,
                      borderColor: `${currentEquipment.highlightColor}40`,
                      color: currentEquipment.highlightColor,
                      marginBottom: '0.6rem',
                    }}
                  >
                    <Sparkles size={13} color="#f59e0b" />
                    <span>{currentEquipment.badge}</span>
                  </span>
                  <h3 style={{ fontSize: '1.65rem', color: 'var(--heading-color)', marginTop: '0.4rem' }}>
                    {currentEquipment.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#034ea2', fontWeight: 700 }}>
                    {currentEquipment.modality}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {currentEquipment.description}
                </p>

                {/* Technical Specifications */}
                <h4
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.8rem',
                  }}
                >
                  Clinical Specifications
                </h4>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '1.5rem',
                  }}
                >
                  {currentEquipment.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="equipment-spec-row"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.86rem',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)', flexShrink: 0 }}>{spec.label}</span>
                      <span className="equipment-spec-value" style={{ color: 'var(--text-primary)', fontWeight: 600, textAlign: 'right' }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Common Diagnostic Indications */}
                <h4
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.6rem',
                  }}
                >
                  Key Medical Indications
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6px' }}>
                  {currentEquipment.indications.map((ind, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.86rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <CheckCircle size={15} color="#00a859" style={{ flexShrink: 0 }} />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Booking CTA */}
            <div style={{ marginTop: '1.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={onOpenBooking}
                className="btn-primary equipment-book-btn"
                style={{ width: '100%', padding: '0.88rem 1.2rem', fontSize: '0.94rem' }}
              >
                <span className="equip-btn-full">Book Diagnostic Appointment for {currentEquipment.name}</span>
                <span className="equip-btn-short">Book Test / Scan Now</span>
                <ArrowRight size={16} style={{ flexShrink: 0 }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .equip-btn-short { display: none; }
        .equip-btn-full { display: inline; }

        @media (max-width: 992px) {
          .equipment-grid {
            grid-template-columns: 1fr !important;
          }
          .equipment-canvas-card {
            min-height: 380px !important;
          }
        }

        @media (max-width: 640px) {
          .equipment-canvas-card {
            min-height: 320px !important;
          }
          .equipment-spec-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2px !important;
          }
          .equipment-spec-value {
            text-align: left !important;
          }
          .equip-btn-full { display: none !important; }
          .equip-btn-short { display: inline !important; }
          .equipment-pill-btn {
            padding: 7px 12px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
