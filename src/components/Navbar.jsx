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
  Sparkles,
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
      title: 'Advanced Diagnostic Equipment',
      desc: 'All machines installed (CT scan under active installation)',
      href: '#new-equipment',
      icon: Sparkles,
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
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: 'center',
                gap: '6px',
                opacity: 0.95,
                whiteSpace: 'nowrap',
                color: '#ffffff',
                textDecoration: 'none',
              }}
              className="topbar-landmark"
              title="Open Madhugiri Center Location on Google Maps"
            >
              <MapPin size={13} color="#34d399" />
              <span>Near Doomlight Circle, Madhugiri</span>
            </a>
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
              flexShrink: 1,
              minWidth: 0,
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
            <div className="nav-brand-text" style={{ whiteSpace: 'nowrap', minWidth: 0 }}>
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
                <span>SAMPOORNA</span>
                <span
                  className="nav-brand-badge"
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
              gap: '20px',
              margin: '0 15px',
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
              href="#new-equipment"
              style={{
                color: 'var(--text-primary)',
                opacity: 0.85,
                textDecoration: 'none',
                fontSize: '0.94rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
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
              <span>Diagnostic Equipment</span>
              <span
                style={{
                  fontSize: '0.66rem',
                  background: '#034ea2',
                  color: '#ffffff',
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: '9999px',
                }}
              >
                CT INSTALL
              </span>
            </a>

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
            className="nav-actions-wrapper"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
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
                padding: '0.62rem 1.3rem',
                fontSize: '0.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                flexShrink: 0,
              }}
              title="Book Test or Scan Appointment"
            >
              <Calendar size={15} style={{ flexShrink: 0 }} />
              <span className="nav-cta-text-full">Book Test / Scan</span>
              <span className="nav-cta-text-short">Book Scan</span>
              <span className="nav-cta-text-mini">Book</span>
            </button>

            {/* Mobile Hamburger Button - High visibility & touch optimized */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: mobileMenuOpen
                  ? '1.5px solid #00a859'
                  : '1.5px solid rgba(255, 255, 255, 0.3)',
                background: mobileMenuOpen
                  ? '#00a859'
                  : 'linear-gradient(135deg, #034ea2 0%, #0b58ca 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(3, 78, 162, 0.35)',
                flexShrink: 0,
                padding: 0,
                transition: 'all 0.2s ease',
              }}
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu-drawer"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-modal)',
              borderTop: '1px solid var(--border-light)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.45)',
              maxHeight: 'calc(100vh - 105px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              zIndex: 1005,
            }}
          >
            {/* Quick Action in Mobile Menu: Prominent Book Scan CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '0.4rem',
              }}
            >
              <Calendar size={18} />
              <span>Book Scan / Test Online</span>
            </button>
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
              href="#new-equipment"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Diagnostic Equipment (CT Under Installation)</span>
              <span
                style={{
                  fontSize: '0.68rem',
                  background: '#034ea2',
                  color: '#ffffff',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                }}
              >
                6 Machines
              </span>
            </a>

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
        .nav-cta-text-mini { display: none; }
        .nav-cta-text-full { display: inline; }

        /* Desktop Mode (>= 1040px) */
        @media (min-width: 1040px) {
          .desktop-menu { display: flex !important; }
          .desktop-btn { display: inline-flex !important; }
          .mobile-hamburger { display: none !important; }
        }
        @media (min-width: 1040px) and (max-width: 1280px) {
          .desktop-menu {
            gap: 14px !important;
            margin: 0 10px !important;
          }
          .nav-brand-title {
            font-size: 1.08rem !important;
          }
          .nav-cta-btn {
            padding: 0.55rem 0.95rem !important;
          }
        }

        /* Tablet & Mobile Mode (< 1040px) */
        @media (max-width: 1039px) {
          .desktop-menu { display: none !important; }
          .desktop-btn { display: none !important; }
          .mobile-hamburger {
            display: flex !important;
          }
          .nav-cta-text-full { display: none !important; }
          .nav-cta-text-short { display: inline !important; }
          .nav-cta-btn {
            padding: 0.52rem 0.95rem !important;
            font-size: 0.82rem !important;
          }
        }

        @media (min-width: 768px) {
          .topbar-landmark { display: inline-flex !important; }
        }

        @media (max-width: 767px) {
          .topbar-hours-full { display: none !important; }
          .topbar-hours-short { display: inline !important; font-size: 0.74rem; }
          .nav-container {
            padding: 0 12px !important;
            height: 64px !important;
          }
        }

        /* Mobile Standard (< 640px) */
        @media (max-width: 640px) {
          .nav-brand-logo {
            height: 35px !important;
          }
          .nav-brand-title {
            font-size: 0.98rem !important;
            gap: 4px !important;
          }
          .nav-brand-badge {
            font-size: 0.65rem !important;
            padding: 1px 5px !important;
          }
          .nav-brand-subtitle {
            font-size: 0.68rem !important;
            margin-top: 1px !important;
          }
          .nav-actions-wrapper {
            gap: 8px !important;
          }
          .mobile-hamburger {
            width: 40px !important;
            height: 40px !important;
            border-radius: 9px !important;
          }
        }

        /* Mobile Narrow (< 480px, e.g. iPhones 375px - 414px) */
        @media (max-width: 480px) {
          .nav-brand-subtitle { display: none !important; }
          .nav-brand-title {
            font-size: 0.92rem !important;
          }
          .nav-brand-badge {
            font-size: 0.62rem !important;
            padding: 1px 4px !important;
          }
          .nav-cta-text-short { display: none !important; }
          .nav-cta-text-mini { display: inline !important; }
          .nav-cta-btn {
            padding: 0.44rem 0.65rem !important;
            font-size: 0.76rem !important;
            gap: 4px !important;
            border-radius: 8px !important;
          }
          .theme-toggle-label { display: none !important; }
        }

        /* Extra Small Mobile (< 360px) */
        @media (max-width: 360px) {
          .topbar-hours-short { display: none !important; }
          .topbar-phone { font-size: 0.74rem !important; }
          .nav-cta-text-mini { display: none !important; }
          .nav-cta-btn {
            padding: 0.44rem 0.55rem !important;
          }
          .nav-brand-title span:first-child {
            font-size: 0.84rem !important;
          }
          .nav-brand-badge {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
