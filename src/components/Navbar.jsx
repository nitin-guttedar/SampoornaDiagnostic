import React, { useState, useEffect, useRef } from 'react';
import { ASSETS, CLINIC_INFO } from '../data/assets';
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Cpu,
  BookOpen,
  Activity,
  Layers,
} from 'lucide-react';

export default function Navbar({
  onOpenBooking,
  onOpenDirectory,
  theme,
  setTheme,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const serviceSubLinks = [
    {
      title: 'Clinical Services Overview',
      desc: 'Multislice CT, Ultrasound, Digital X-Ray, Automated Lab & Cardiology',
      href: '#services',
      icon: Layers,
      color: '#034ea2',
    },
    {
      title: '3D Equipment Experience',
      desc: 'Interactive 3D models of CT scanner, microscope & ultrasound',
      href: '#equipment-3d',
      icon: Cpu,
      color: '#00a859',
    },
    {
      title: 'Patient Health Guides',
      desc: 'Test preparation guidelines, indications & lab value insights',
      href: '#blogs',
      icon: BookOpen,
      color: '#f59e0b',
    },
    {
      title: 'Test Catalog & Pricing',
      desc: 'Search 25+ routine & specialized diagnostic investigations',
      action: () => {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
        onOpenDirectory();
      },
      icon: FileText,
      color: '#0284c7',
    },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top Notification / Helpline Strip */}
      <div
        style={{
          background: 'linear-gradient(90deg, #022b68 0%, #034ea2 55%, #00743b 100%)',
          color: '#ffffff',
          fontSize: '0.82rem',
          padding: '5px 0',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <div
          className="nav-container"
          style={{
            height: 'auto',
            paddingTop: '3px',
            paddingBottom: '3px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* Left Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
              <Clock size={13} color="#fbbf24" style={{ flexShrink: 0 }} />
              <span className="topbar-hours-full">{CLINIC_INFO.workingHours.weekdays}</span>
              <span className="topbar-hours-short">7:00 AM - 8:30 PM</span>
            </span>
            <span
              style={{
                alignItems: 'center',
                gap: '6px',
                opacity: 0.95,
                whiteSpace: 'nowrap',
              }}
              className="topbar-landmark"
            >
              <MapPin size={13} color="#34d399" />
              <span>Near Doomlight Circle, Madhugiri</span>
            </span>
            <span
              className="topbar-kpme"
              style={{
                background: 'rgba(255,255,255,0.18)',
                padding: '2px 7px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}
            >
              KPME: {CLINIC_INFO.kpmeReg}
            </span>
          </div>

          {/* Right Controls: Theme Toggle + Phone Helpline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                padding: '3px 8px',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
            >
              {theme === 'dark' ? <Sun size={13} color="#fbbf24" /> : <Moon size={13} color="#38bdf8" />}
              <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            {/* Helpline Phone */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                whiteSpace: 'nowrap',
                fontSize: '0.8rem',
              }}
            >
              <Phone size={12} color="#fbbf24" />
              <span className="topbar-phone">{CLINIC_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Spacious Navbar */}
      <nav
        style={{
          background: scrolled
            ? 'var(--bg-nav)'
            : theme === 'light'
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(7, 13, 24, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-light)',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="nav-container">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="nav-brand-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src={ASSETS.logo}
              alt="Sampoorna Diagnostic Center Logo"
              className="nav-brand-logo"
              style={{
                height: '46px',
                width: 'auto',
                borderRadius: '8px',
                background: '#ffffff',
                padding: '2px',
                boxShadow: '0 4px 12px rgba(3, 78, 162, 0.25)',
                border: '1px solid rgba(3, 78, 162, 0.15)',
                flexShrink: 0,
              }}
            />
            <div style={{ whiteSpace: 'nowrap' }}>
              <div
                className="nav-brand-title"
                style={{
                  fontSize: '1.22rem',
                  fontWeight: 800,
                  color: 'var(--heading-color)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                SAMPOORNA
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#00a859',
                    fontWeight: 700,
                    background: 'rgba(0, 168, 89, 0.12)',
                    border: '1px solid rgba(0, 168, 89, 0.25)',
                    padding: '2px 7px',
                    borderRadius: '4px',
                  }}
                >
                  DIAGNOSTIC
                </span>
              </div>
              <div
                className="nav-brand-subtitle"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  marginTop: '2px',
                }}
              >
                Madhugiri, Tumkur Dist.
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '30px',
              margin: '0 25px',
            }}
            className="desktop-menu"
          >
            {/* Services with Dropdown Subsections (3D Equipment, Health Guides, Tests) */}
            <div
              ref={dropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                onClick={(e) => {
                  // If clicking on mobile or desktop, toggle or scroll
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: servicesDropdownOpen ? '#034ea2' : 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  padding: '8px 4px',
                  transition: 'color 0.2s',
                }}
              >
                <span>Services</span>
                <ChevronDown
                  size={15}
                  style={{
                    transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </a>

              {/* Dropdown Menu Box */}
              {servicesDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    width: '340px',
                    background: 'var(--bg-modal)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: '12px',
                    boxShadow: 'var(--shadow-hover)',
                    backdropFilter: 'blur(16px)',
                    zIndex: 1100,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {serviceSubLinks.map((item, idx) => {
                    const Icon = item.icon;
                    if (item.action) {
                      return (
                        <button
                          key={idx}
                          onClick={item.action}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            padding: '10px 12px',
                            borderRadius: '10px',
                            background: 'transparent',
                            border: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-tertiary)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: `${item.color}15`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Icon size={17} color={item.color} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--heading-color)' }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    }

                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-tertiary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: `${item.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Icon size={17} color={item.color} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--heading-color)' }}>
                            {item.title}
                          </div>
                          <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Standalone Nav Links */}
            <a
              href="#about"
              style={{
                color: 'var(--text-primary)',
                opacity: 0.85,
                textDecoration: 'none',
                fontSize: '0.94rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#034ea2';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.85';
              }}
            >
              About Us
            </a>

            <a
              href="#gallery"
              style={{
                color: 'var(--text-primary)',
                opacity: 0.85,
                textDecoration: 'none',
                fontSize: '0.94rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#034ea2';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.85';
              }}
            >
              Gallery
            </a>

            <a
              href="#contact"
              style={{
                color: 'var(--text-primary)',
                opacity: 0.85,
                textDecoration: 'none',
                fontSize: '0.94rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#034ea2';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.opacity = '0.85';
              }}
            >
              Contact
            </a>
          </div>

          {/* Right Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            {/* Quick Test Directory Trigger */}
            <button
              onClick={onOpenDirectory}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                background: theme === 'light' ? '#f1f5f9' : 'rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-light)',
                padding: '0.55rem 1.05rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              className="desktop-btn"
            >
              <FileText size={15} color="#0b58ca" />
              <span>Tests & Packages</span>
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="btn-primary nav-cta-btn"
              style={{
                padding: '0.62rem 1.4rem',
                fontSize: '0.88rem',
              }}
            >
              <Calendar size={15} style={{ flexShrink: 0 }} />
              <span className="nav-cta-text-full">Book Test / Scan</span>
              <span className="nav-cta-text-short">Book Scan</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-primary)',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
              className="mobile-hamburger"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'var(--bg-modal)',
              borderTop: '1px solid var(--border-light)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            {/* Services with Sub-items */}
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '10px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Services & Diagnostic Sections
              </div>
              {serviceSubLinks.map((sub, i) => (
                <a
                  key={i}
                  href={sub.href || '#'}
                  onClick={(e) => {
                    if (sub.action) {
                      e.preventDefault();
                      sub.action();
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  style={{
                    display: 'block',
                    padding: '8px 10px',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '0.94rem',
                    fontWeight: 600,
                  }}
                >
                  • {sub.title}
                </a>
              ))}
            </div>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              About Us
            </a>

            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              Contact
            </a>

            {/* Mobile Theme Switcher */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '0.5rem' }}>
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {theme === 'dark' ? <Sun size={16} color="#fbbf24" /> : <Moon size={16} color="#38bdf8" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDirectory();
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <FileText size={16} color="#0b58ca" />
                <span>All Tests</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .topbar-hours-short { display: none; }
        .topbar-hours-full { display: inline; }
        .topbar-landmark { display: none; }
        .nav-cta-text-short { display: none; }
        .nav-cta-text-full { display: inline; }

        @media (min-width: 1040px) {
          .desktop-menu { display: flex !important; }
          .desktop-btn { display: inline-flex !important; }
          .mobile-hamburger { display: none !important; }
        }
        @media (min-width: 768px) {
          .topbar-landmark { display: inline-flex !important; }
        }
        @media (max-width: 767px) {
          .topbar-hours-full { display: none !important; }
          .topbar-hours-short { display: inline !important; font-size: 0.74rem; }
        }
        @media (max-width: 580px) {
          .topbar-kpme { display: none !important; }
          .nav-cta-btn {
            padding: 0.48rem 0.8rem !important;
            font-size: 0.8rem !important;
          }
          .nav-cta-text-full { display: none !important; }
          .nav-cta-text-short { display: inline !important; }
        }
        @media (max-width: 440px) {
          .theme-toggle-label { display: none !important; }
          .nav-brand-logo { height: 38px !important; }
          .nav-brand-title { font-size: 1.05rem !important; }
          .nav-brand-subtitle { font-size: 0.7rem !important; }
        }
        @media (max-width: 370px) {
          .topbar-hours-short { display: none !important; }
          .topbar-phone { font-size: 0.75rem !important; }
        }
      `}</style>
    </header>
  );
}
