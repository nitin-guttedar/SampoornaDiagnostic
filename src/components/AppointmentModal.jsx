import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CLINIC_INFO } from '../data/assets';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  Send,
  FileCheck,
  Building,
} from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, initialService = '', theme }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || '16-Slice Multislice CT Scan',
    type: 'Center Visit',
    date: '',
    time: 'Morning (8:00 AM - 12:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {}

    // Formulate WhatsApp message to clinic phone +91 8660487449
    const msg = `*New Diagnostic Appointment Request - Sampoorna Diagnostic Center*
*Patient Name:* ${formData.name}
*Phone:* ${formData.phone}
*Test/Scan:* ${formData.service}
*Booking Type:* ${formData.type}
*Preferred Date:* ${formData.date || 'Earliest Available'}
*Preferred Time:* ${formData.time}
*Symptoms / Notes:* ${formData.notes || 'None'}`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;

    setSubmitted(true);

    // Open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleReset}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 10, 18, 0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 3000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
        className="appointment-modal-backdrop"
      >
        <motion.div
          initial={{ scale: 0.92, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.92, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel appointment-modal-box"
          style={{
            maxWidth: '560px',
            width: '100%',
            padding: '2.2rem',
            background: 'var(--bg-modal)',
            border: '1px solid var(--border-light)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <span className="glass-badge glass-badge-green" style={{ fontSize: '0.72rem' }}>
                Online Diagnostic Booking
              </span>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--heading-color)', marginTop: '0.4rem' }}>
                Schedule Your Test or CT Scan
              </h3>
            </div>
            <button
              onClick={handleReset}
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-primary)',
                padding: '6px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Patient Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Full Patient Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px 11px 38px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '0.94rem',
                      outline: 'none',
                    }}
                  />
                  <User size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Mobile / WhatsApp Number *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px 11px 38px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '0.94rem',
                      outline: 'none',
                    }}
                  />
                  <Phone size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                </div>
              </div>

              {/* Service Modality Dropdown */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Select Diagnostic Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  <option value="16-Slice Multislice CT Scan">16-Slice Multislice CT Scan (Head/Chest/Abdomen)</option>
                  <option value="Ultrasound & Color Doppler">Ultrasound & Color Doppler (Pregnancy / Abdomen / Doppler)</option>
                  <option value="Digital X-Ray">Digital X-Ray (Chest / Orthopedic / Spine)</option>
                  <option value="Complete Blood Count (CBC) & Routine Lab">Complete Blood Count (CBC) & Routine Lab</option>
                  <option value="Executive Health Check-up Package">Executive Health Check-up Package (Tumkur Special)</option>
                  <option value="Thyroid & Hormone Profile">Thyroid Profile (T3, T4, TSH) & Hormones</option>
                  <option value="Treadmill Test (TMT) / 2D Echo">Treadmill Test (TMT) / 2D Echo Heart Check</option>
                  <option value="Superspeciality Doctor Consultation">Superspeciality Doctor Consultation</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="modal-datetime-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM – 12 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4 PM – 8 PM)</option>
                    <option value="Sunday Slot (8:00 AM - 1:00 PM)">Sunday Slot (8 AM – 1 PM)</option>
                  </select>
                </div>
              </div>

              {/* Doctor Referral / Symptoms Note */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Referring Doctor / Symptoms (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Doctor's name, prescription notes or symptoms"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  fontSize: '1rem',
                  marginTop: '0.5rem',
                }}
              >
                <Send size={16} />
                <span>Confirm & Send to Center on WhatsApp</span>
              </button>
            </form>
          ) : (
            /* Submission Success Screen */
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 168, 89, 0.15)',
                  border: '2px solid #00a859',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                }}
              >
                <CheckCircle2 size={36} color="#00a859" />
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--heading-color)', marginBottom: '0.5rem' }}>
                Booking Request Generated!
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Thank you, <strong>{formData.name}</strong>. Opening WhatsApp to connect directly with the reception desk
                at Sampoorna Diagnostic Center ({CLINIC_INFO.phoneFormatted}).
              </p>

              <div
                style={{
                  background: 'var(--bg-tertiary)',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  marginBottom: '1.8rem',
                }}
              >
                <div>• Service: {formData.service}</div>
                <div>• Slot: {formData.time}</div>
                <div>• Center Location: Doomlight Circle, Madhugiri</div>
              </div>

              <button onClick={handleReset} className="btn-secondary" style={{ width: '100%', padding: '0.8rem' }}>
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .appointment-modal-box {
            padding: 1.3rem 0.9rem !important;
            max-height: 94vh !important;
            border-radius: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .appointment-modal-backdrop {
            padding: 0.5rem !important;
          }
          .modal-datetime-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
