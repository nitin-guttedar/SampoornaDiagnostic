import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../data/content';
import { BookOpen, Clock, ArrowRight, X, ChevronRight, Bookmark } from 'lucide-react';

export default function BlogSection({ theme }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blogs" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Patient Education & Clinical Articles</span>
          <h2>Health Insights & Diagnostic Guides</h2>
          <p>
            Evidence-based medical articles curated by our specialists to help patients and referring physicians in
            Madhugiri & Tumkur district understand tests, preparation guidelines, and report values.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="blog-grid"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              className="glass-panel glass-panel-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              style={{
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <span className="glass-badge glass-badge-blue" style={{ fontSize: '0.72rem' }}>
                    {post.category}
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--heading-color)',
                    lineHeight: 1.35,
                    marginBottom: '0.75rem',
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.4rem',
                  }}
                >
                  {post.excerpt}
                </p>
              </div>

              <button
                onClick={() => setSelectedPost(post)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#00a859',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'gap 0.2s',
                }}
              >
                <span>Read Full Medical Guide</span>
                <ArrowRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
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
                maxWidth: '700px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '2.5rem',
                background: 'var(--bg-modal)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.2rem',
                }}
              >
                <span className="glass-badge glass-badge-green">{selectedPost.category}</span>
                <button
                  onClick={() => setSelectedPost(null)}
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

              <h2 style={{ fontSize: '1.75rem', color: 'var(--heading-color)', marginBottom: '1rem', lineHeight: 1.25 }}>
                {selectedPost.title}
              </h2>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>Sampoorna Clinical Advisory</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                {selectedPost.content}
              </div>

              <div
                style={{
                  background: 'rgba(3, 78, 162, 0.08)',
                  border: '1px solid var(--border-brand)',
                  padding: '1.2rem',
                  borderRadius: '12px',
                  fontSize: '0.86rem',
                  color: '#034ea2',
                  lineHeight: 1.5,
                }}
              >
                <strong>Clinical Note:</strong> Diagnostic procedures should always be recommended and evaluated by a
                registered medical practitioner based on clinical correlation.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
