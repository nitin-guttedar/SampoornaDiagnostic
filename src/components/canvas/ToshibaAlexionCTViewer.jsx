import React, { useState, useEffect, useRef } from 'react';

export default function ToshibaAlexionCTViewer({ autoRotate = true, theme = 'light' }) {
  const isLight = theme === 'light';
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse coordinates over the viewer to allow interactive 3D parallax tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMouseOffset({ x: x * 20, y: -y * 12 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '440px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* Background Medical Ambient Lighting & Calibration Rings */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* Soft Radial Ambient Spotlight */}
        <div
          style={{
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: isLight
              ? 'radial-gradient(circle, rgba(3, 78, 162, 0.12) 0%, rgba(0, 168, 89, 0.05) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(3, 78, 162, 0.1) 45%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Concentric Medical Calibration Rings */}
        <div
          className="alexion-pulse-ring-1"
          style={{
            position: 'absolute',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            border: isLight ? '1.5px dashed rgba(3, 78, 162, 0.18)' : '1.5px dashed rgba(56, 189, 248, 0.25)',
          }}
        />
        <div
          className="alexion-pulse-ring-2"
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: isLight ? '1px solid rgba(0, 168, 89, 0.12)' : '1px solid rgba(0, 168, 89, 0.2)',
          }}
        />
      </div>

      {/* 3D Animated Showcase Platform */}
      <div
        className={autoRotate && !isHovered ? 'alexion-autorotate-active' : ''}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: isHovered
            ? `rotateY(${mouseOffset.x}deg) rotateX(${mouseOffset.y}deg)`
            : undefined,
          transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.8s ease',
          willChange: 'transform',
          maxWidth: '92%',
        }}
      >
        {/* Main Toshiba Alexion 16-Slice CT Image Container */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            padding: '12px 18px',
            background: isLight
              ? 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 40%, rgba(241, 245, 249, 0.7) 100%)'
              : 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.85) 40%, rgba(7, 13, 24, 0.95) 100%)',
            boxShadow: isLight
              ? '0 20px 40px -15px rgba(3, 78, 162, 0.16), 0 2px 8px rgba(0,0,0,0.04)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px rgba(14, 165, 233, 0.15)',
            border: isLight
              ? '1px solid rgba(226, 232, 240, 0.8)'
              : '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Active Medical Helical Laser Scan Line */}
          <div className="alexion-laser-scanner" />

          {/* Authentic Toshiba Alexion CT Scanner Photograph */}
          <img
            src="/assets/toshiba_alexion_ct_cropped.png"
            alt="Toshiba Alexion 16 Slice CT Scanner - Sampoorna Diagnostic Center"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '560px',
              height: 'auto',
              maxHeight: '340px',
              objectFit: 'contain',
              filter: isLight
                ? 'drop-shadow(0 14px 24px rgba(0, 0, 0, 0.12))'
                : 'drop-shadow(0 16px 30px rgba(0, 0, 0, 0.6))',
            }}
          />

          {/* Model Identification Floating Chip */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(8px)',
              padding: '4px 10px',
              borderRadius: '9999px',
              border: isLight ? '1px solid rgba(3, 78, 162, 0.15)' : '1px solid rgba(56, 189, 248, 0.25)',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: isLight ? '#034ea2' : '#38bdf8',
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#00a859',
                boxShadow: '0 0 6px #00a859',
              }}
            />
            <span>Toshiba Alexion™ 16-Slice</span>
          </div>

          {/* Active Dose Reduction Tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '20px',
              background: isLight ? 'rgba(240, 253, 244, 0.92)' : 'rgba(6, 78, 59, 0.7)',
              backdropFilter: 'blur(6px)',
              padding: '3px 9px',
              borderRadius: '6px',
              border: '1px solid rgba(0, 168, 89, 0.3)',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: isLight ? '#00a859' : '#4ade80',
            }}
          >
            AIDR 3D • Ultra-Low Dose
          </div>
        </div>

        {/* Dynamic Ground Contact Shadow */}
        <div
          className="alexion-shadow-pulse"
          style={{
            width: '85%',
            height: '22px',
            borderRadius: '50%',
            background: isLight
              ? 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.22) 0%, transparent 75%)'
              : 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.75) 0%, transparent 75%)',
            marginTop: '10px',
            filter: 'blur(4px)',
          }}
        />
      </div>

      {/* Interactive Control Hint Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: isLight ? 'rgba(255, 255, 255, 0.88)' : 'rgba(7, 13, 24, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: '4px 12px',
          borderRadius: '9999px',
          fontSize: '0.74rem',
          color: isLight ? '#475569' : '#94a3b8',
          border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none',
          boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00a859' }} />
        <span>3D Tilt: Move Cursor • {autoRotate ? 'Auto Rotation ON' : 'Paused'}</span>
      </div>

      {/* Scoped CSS Keyframes for Smooth Medical 3D Rotation Animation */}
      <style>{`
        @keyframes alexionSmoothRotation {
          0% {
            transform: translateY(0px) rotateY(-8deg) rotateX(1.5deg);
          }
          25% {
            transform: translateY(-5px) rotateY(-2deg) rotateX(-1deg);
          }
          50% {
            transform: translateY(-8px) rotateY(8deg) rotateX(1.5deg);
          }
          75% {
            transform: translateY(-4px) rotateY(1deg) rotateX(-1deg);
          }
          100% {
            transform: translateY(0px) rotateY(-8deg) rotateX(1.5deg);
          }
        }

        @keyframes alexionShadowSync {
          0%, 100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.95;
          }
        }

        @keyframes alexionLaserSweep {
          0% {
            top: 5%;
            opacity: 0;
          }
          15% {
            opacity: 0.75;
          }
          85% {
            opacity: 0.75;
          }
          100% {
            top: 92%;
            opacity: 0;
          }
        }

        @keyframes alexionRingSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .alexion-autorotate-active {
          animation: alexionSmoothRotation 9s ease-in-out infinite;
        }

        .alexion-shadow-pulse {
          animation: alexionShadowSync 9s ease-in-out infinite;
        }

        .alexion-pulse-ring-1 {
          animation: alexionRingSpin 40s linear infinite;
        }

        .alexion-pulse-ring-2 {
          animation: alexionRingSpin 60s linear infinite reverse;
        }

        .alexion-laser-scanner {
          position: absolute;
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(0, 229, 255, 0.2) 15%, #00e5ff 50%, rgba(0, 229, 255, 0.2) 85%, transparent 100%);
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.85);
          pointer-events: none;
          z-index: 10;
          animation: alexionLaserSweep 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
