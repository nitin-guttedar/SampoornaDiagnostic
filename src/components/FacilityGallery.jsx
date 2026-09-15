import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../data/assets';
import { Eye, X, ZoomIn, Image as ImageIcon, Sparkles } from 'lucide-react';

const ASSET_GALLERY = [
  {
    id: 1,
    title: 'Main Center & Imaging Suite Banner',
    category: 'Imaging Suite',
    src: ASSETS.bannerMain,
    description:
      'Official Sampoorna Diagnostic Center banner highlighting 16-Slice CT Scan, Ultrasound, Digital X-Ray, Lab & Cardiology.',
  },
  {
    id: 2,
    title: 'Advanced Diagnostic & Laboratory Showcase',
    category: 'Laboratory Area',
    src: ASSETS.bannerFacility,
    description:
      'Hexagonal visual breakdown of automated biochemistry, blood collection, digital chest radiography, and CT imaging.',
  },
  {
    id: 3,
    title: 'Complete Equipment Suite & Clinical Portfolio',
    category: 'All Modalities',
    src: ASSETS.folderPortfolio,
    description:
      'Official patient documentation folder showcasing GE Optima CT scanner, Doppler ultrasound console, digital X-ray suite, treadmill test (TMT), and automated lab.',
  },
  {
    id: 4,
    title: 'Vertical Clinical Services Roll-up Display',
    category: 'Services',
    src: ASSETS.bannerRollup,
    description:
      'Standee detailing complete clinical offerings at K.H. Road near Doomlight Circle, Madhugiri.',
  }
];

export default function FacilityGallery({ theme }) {
  const [filter, setFilter] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const categories = ['All', 'Imaging Suite', 'Laboratory Area', 'All Modalities', 'Accreditation'];

  const displayedItems = filter === 'All'
    ? ASSET_GALLERY
    : ASSET_GALLERY.filter((item) => item.category === filter || filter === 'All');

  return (
    <section id="gallery" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Visual Tour & Documentation</span>
          <h2>Facility Gallery & Clinical Banners</h2>
          <p>
            Explore our authentic center visuals, diagnostic equipment suites, official certifications, and
            patient reporting standards from Madhugiri.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                background: filter === cat ? '#00a859' : 'var(--bg-card)',
                border: filter === cat ? '1px solid #34d399' : '1px solid var(--border-light)',
                color: filter === cat ? '#ffffff' : 'var(--text-primary)',
                fontSize: '0.86rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: filter === cat ? '0 4px 14px rgba(0, 168, 89, 0.3)' : 'var(--shadow-card)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="gallery-grid"
        >
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-panel glass-panel-hover"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              style={{
                overflow: 'hidden',
                borderRadius: '16px',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => setActiveItem(item)}
            >
              <div
                style={{
                  height: '230px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--bg-tertiary)',
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
                {/* Hover Quick Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(7, 13, 24, 0.8)',
                    backdropFilter: 'blur(8px)',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#034ea2',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <ZoomIn size={13} />
                  <span>Expand</span>
                </div>
              </div>

              {/* Item Card Details */}
              <div style={{ padding: '1.2rem' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#00a859',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.category}
                </span>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--heading-color)', margin: '4px 0 6px 0' }}>
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.45,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(5, 10, 18, 0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                background: 'var(--bg-modal)',
                border: '1px solid var(--border-light)',
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--heading-color)' }}>{activeItem.title}</h3>
                  <span style={{ fontSize: '0.78rem', color: '#034ea2', fontWeight: 600 }}>{activeItem.category}</span>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
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

              {/* Modal Image Display */}
              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'var(--bg-tertiary)',
                }}
              >
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-card)',
                  }}
                />
                <p
                  style={{
                    marginTop: '1.2rem',
                    fontSize: '0.94rem',
                    color: 'var(--text-primary)',
                    textAlign: 'center',
                    maxWidth: '650px',
                    lineHeight: 1.5,
                  }}
                >
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
