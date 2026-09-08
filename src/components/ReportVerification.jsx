import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_INFO, ASSETS } from '../data/assets';
import { FileText, Download, CheckCircle2, Search, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export default function ReportVerification({ onOpenBooking, theme }) {
  const [billNo, setBillNo] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null); // 'loading' | 'found' | 'not_found'

  const handleSearch = (e) => {
    e.preventDefault();
    if (!billNo.trim() && !phone.trim()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('found');
    }, 900);
  };

  return (
    <section className="container" style={{ marginBottom: '3.5rem', marginTop: '1rem' }}>
      <div
        className="glass-panel report-card-panel"
        style={{
          padding: '2.5rem',
          background:
            theme === 'light'
              ? 'linear-gradient(135deg, rgba(3, 78, 162, 0.08) 0%, rgba(0, 168, 89, 0.06) 100%)'
              : 'linear-gradient(135deg, rgba(3, 78, 162, 0.25) 0%, rgba(0, 168, 89, 0.15) 100%)',
          border: '1px solid var(--border-brand)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="report-grid"
        >
          {/* Left Column: Instant WhatsApp / Online Report Download */}
          <div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
              <span className="glass-badge glass-badge-green" style={{ fontSize: '0.74rem' }}>
                <CheckCircle2 size={13} />
                <span>Paperless Digital Healthcare</span>
              </span>
              <span className="glass-badge glass-badge-amber" style={{ fontSize: '0.74rem' }}>
                Instant WhatsApp Delivery
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)', color: 'var(--heading-color)', marginBottom: '0.8rem' }}>
              Download Lab & Imaging Reports Online
            </h3>

            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Tested at Sampoorna Diagnostic Center? Access your authenticated CT scans, digital X-rays, Doppler
              images, and laboratory test results instantly with your Bill No. or registered mobile number.
            </p>

            <form onSubmit={handleSearch} className="report-search-form" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Enter Bill No. (e.g. SDC-4829)"
                value={billNo}
                onChange={(e) => setBillNo(e.target.value)}
                className="report-input"
                style={{
                  flex: 1,
                  minWidth: '170px',
                  padding: '11px 16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <input
                type="tel"
                placeholder="Or Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="report-input"
                style={{
                  flex: 1,
                  minWidth: '150px',
                  padding: '11px 16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn-primary report-submit-btn" style={{ padding: '11px 22px' }}>
                <Search size={16} />
                <span>Find Report</span>
              </button>
            </form>

            {/* Found Report Preview Simulation */}
            <AnimatePresence>
              {status === 'found' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: '1.2rem',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: theme === 'light' ? '#ffffff' : 'rgba(0, 168, 89, 0.15)',
                    border: '1px solid #00a859',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    flexWrap: 'wrap',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FileText size={20} color="#00a859" style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ color: 'var(--heading-color)', fontWeight: 700, fontSize: '0.9rem' }}>
                        Report Verified • Digital X-Ray / CT Study (Bill #{billNo || 'SDC-2026-08'})
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        Signed by Radiologist & Pathologist • Sampoorna Madhugiri
                      </div>
                    </div>
                  </div>

                  <a
                    href={ASSETS.reportCover}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green"
                    style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                  >
                    <Download size={13} />
                    <span>View Digital Copy</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Graphic of Authentic Report Cover Asset */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
                maxWidth: '400px',
                margin: '0 auto',
                background: '#ffffff',
              }}
            >
              <img
                src={ASSETS.reportCover}
                alt="Official Sampoorna Digital X-Ray & CT Report"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ marginTop: '8px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Official diagnostic documentation with barcode validation and doctor sign-off.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .report-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .report-card-panel {
            padding: 1.4rem 1rem !important;
          }
          .report-search-form {
            flex-direction: column !important;
          }
          .report-input {
            width: 100% !important;
            min-width: 0 !important;
          }
          .report-submit-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
