import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Calendar, Clock, AlertCircle, CheckCircle, Tag } from 'lucide-react';

const TEST_CATALOG = [
  // CT SCANS
  { name: 'CT Brain / Head Scan (Plain / Contrast)', category: 'CT Scan', tat: 'Same Day (2-3 hrs)', prep: '4 hrs fasting if contrast is required', price: '₹2,500' },
  { name: 'HRCT Chest (High Resolution Lungs)', category: 'CT Scan', tat: 'Same Day (2 hrs)', prep: 'No fasting required', price: '₹3,000' },
  { name: 'CT Abdomen & Pelvis (Triple Phase)', category: 'CT Scan', tat: 'Same Day', prep: 'Overnight fasting; oral contrast as instructed', price: '₹4,500' },
  { name: 'CT Cervical / Lumbar Spine', category: 'CT Scan', tat: 'Same Day', prep: 'No specific preparation', price: '₹2,800' },
  { name: 'CT Trauma Emergency Protocol', category: 'CT Scan', tat: 'Immediate / Priority', prep: 'Emergency baseline evaluation', price: '₹3,200' },

  // ULTRASOUND & DOPPLER
  { name: 'Obstetric 3D/4D Ultrasound (Pregnancy)', category: 'Ultrasound', tat: 'Instant with Photos', prep: 'Moderate hydration / full bladder in early trimester', price: '₹1,200' },
  { name: 'Ultrasound Abdomen & Pelvis (Whole)', category: 'Ultrasound', tat: 'Immediate', prep: '6-8 hours fasting + full bladder', price: '₹1,000' },
  { name: 'Color Doppler Arterial / Venous (Single Limb)', category: 'Ultrasound', tat: 'Same Day', prep: 'No fasting required', price: '₹1,800' },
  { name: 'Carotid Doppler / Neck Vascular Study', category: 'Ultrasound', tat: 'Same Day', prep: 'No specific prep', price: '₹2,000' },
  { name: 'Follicular Tracking Series (Ovulation)', category: 'Ultrasound', tat: 'Instant Daily Tracking', prep: 'Scheduled cycle days', price: '₹1,500' },

  // DIGITAL X-RAY
  { name: 'Digital Chest X-Ray (PA View)', category: 'Digital X-Ray', tat: '30 Minutes', prep: 'Remove metallic necklaces & clothing clips', price: '₹350' },
  { name: 'Orthopedic Bone & Joint X-Ray (2 Views)', category: 'Digital X-Ray', tat: '30 Minutes', prep: 'No fasting required', price: '₹450' },
  { name: 'Spine X-Ray (AP & Lateral Cervical/Lumbar)', category: 'Digital X-Ray', tat: '30 Minutes', prep: 'No specific prep', price: '₹600' },
  { name: 'PNS (Para-Nasal Sinuses) Water\'s View', category: 'Digital X-Ray', tat: '30 Minutes', prep: 'Remove earrings/hairpins', price: '₹400' },

  // CLINICAL LABORATORY
  { name: 'Complete Blood Count (CBC) + ESR', category: 'Laboratory', tat: '60 - 90 Minutes', prep: 'No fasting needed; EDTA blood sample', price: '₹300' },
  { name: 'Biochemistry Liver Function Test (LFT)', category: 'Laboratory', tat: '2 Hours', prep: '8-10 hours fasting recommended', price: '₹750' },
  { name: 'Kidney Function Test (KFT / RFT with Electrolytes)', category: 'Laboratory', tat: '2 Hours', prep: 'Normal hydration, Serum sample', price: '₹700' },
  { name: 'Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)', category: 'Laboratory', tat: '2 Hours', prep: '12 hours overnight fasting mandatory', price: '₹650' },
  { name: 'Thyroid Profile Total (T3, T4, TSH)', category: 'Laboratory', tat: '3 Hours', prep: 'Morning fasting blood sample preferred', price: '₹550' },
  { name: 'HbA1c Glycated Hemoglobin (3-Month Sugar Avg)', category: 'Laboratory', tat: '90 Minutes', prep: 'No fasting required', price: '₹450' },
  { name: 'Vitamin D3 (25-Hydroxy) & Vitamin B12', category: 'Laboratory', tat: 'Same Day', prep: 'Morning fasting preferred', price: '₹1,400' },
  { name: 'Urine Routine & Microscopic Examination', category: 'Laboratory', tat: '45 Minutes', prep: 'Clean-catch midstream urine sample', price: '₹150' },

  // CARDIOLOGY
  { name: '2D Echocardiography with Color Doppler', category: 'Cardiology', tat: 'Instant by Cardiologist', prep: 'Bring previous ECG / discharge summaries', price: '₹1,800' },
  { name: 'Treadmill Test (TMT / Cardiac Stress)', category: 'Cardiology', tat: 'Same Day', prep: 'Comfortable sports shoes; 2 hrs light fasting', price: '₹1,500' },
  { name: '12-Lead Digital Computerized ECG', category: 'Cardiology', tat: '15 Minutes', prep: 'Relaxed resting state', price: '₹200' },
];

export default function TestDirectoryModal({ isOpen, onClose, onSelectTest, theme }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'CT Scan', 'Ultrasound', 'Digital X-Ray', 'Laboratory', 'Cardiology'];

  const filtered = TEST_CATALOG.filter((test) => {
    const matchesCat = activeCategory === 'All' || test.category === activeCategory;
    const matchesSearch = test.name.toLowerCase().includes(search.toLowerCase()) ||
                          test.category.toLowerCase().includes(search.toLowerCase()) ||
                          test.prep.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 10, 18, 0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 3500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        <motion.div
          initial={{ scale: 0.94, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.94, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            maxWidth: '920px',
            width: '100%',
            height: '85vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg-modal)',
            border: '1px solid var(--border-light)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="glass-badge glass-badge-blue" style={{ fontSize: '0.72rem' }}>
                Complete Clinical Catalog
              </span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--heading-color)', marginTop: '0.4rem' }}>
                Diagnostic Tests, Scans & Pricing Guide
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-primary)',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div
            style={{
              padding: '1rem 2rem',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <div style={{ position: 'relative', flex: '1', minWidth: '240px' }}>
              <input
                type="text"
                placeholder="Search any test, scan or symptom (e.g. CBC, CT Brain, Thyroid, Urine)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  background: 'var(--bg-modal)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <Search size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '13px' }} />
            </div>

            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: activeCategory === cat ? '#034ea2' : 'var(--bg-modal)',
                    border: activeCategory === cat ? '1px solid #60a5fa' : '1px solid var(--border-light)',
                    color: activeCategory === cat ? '#ffffff' : 'var(--text-primary)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Test Table / List */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filtered.length > 0 ? (
                filtered.map((test, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      gap: '16px',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#00a859',
                            background: 'rgba(0, 168, 89, 0.12)',
                            border: '1px solid rgba(0, 168, 89, 0.25)',
                            padding: '2px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          {test.category}
                        </span>
                        <h4 style={{ fontSize: '1.02rem', color: 'var(--heading-color)' }}>{test.name}</h4>
                      </div>

                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} color="#f59e0b" />
                          <span>Turnaround: {test.tat}</span>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={13} color="#0284c7" />
                          <span>Prep: {test.prep}</span>
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectTest(test.name);
                        }}
                        className="btn-primary"
                        style={{ padding: '7px 16px', fontSize: '0.82rem' }}
                      >
                        <Calendar size={13} />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  No tests found matching your search term. Call our helpline at +91 8660487449 for custom requirements.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
