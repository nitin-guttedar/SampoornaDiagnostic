import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';
import CTScanner3D from './CTScanner3D';
import Microscope3D from './Microscope3D';
import DigitalXRay3D from './DigitalXRay3D';
import UltrasoundDoppler3D from './UltrasoundDoppler3D';
import DnaHelix3D from './DnaHelix3D';

function ModelSwitcher({ modelKey }) {
  switch (modelKey) {
    case 'ctScan':
      return <CTScanner3D />;
    case 'microscope':
      return <Microscope3D />;
    case 'xray':
      return <DigitalXRay3D />;
    case 'ultrasound':
      return <UltrasoundDoppler3D />;
    case 'dna':
      return <DnaHelix3D />;
    default:
      return <CTScanner3D />;
  }
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color="#00a859" wireframe />
    </mesh>
  );
}

export default function DiagnosticScene({ activeModel = 'ctScan', autoRotate = true, interactive = true, theme = 'light' }) {
  const isLight = theme === 'light';

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [2.8, 1.8, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Medical Studio Lighting - Adapted for Light/Dark themes */}
        <ambientLight intensity={isLight ? 1.2 : 0.8} />
        
        {/* Main Key Light */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={isLight ? 1.8 : 1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        {/* Cool Medical Cyan Fill Light */}
        <pointLight position={[-4, 3, -3]} intensity={isLight ? 1.0 : 1.2} color="#0284c7" />
        
        {/* Sampoorna Emerald Rim Light */}
        <pointLight position={[4, -2, -3]} intensity={isLight ? 0.9 : 1.0} color="#00a859" />
        
        {/* Solar Gold Specular Highlight */}
        <pointLight position={[0, 4, 3]} intensity={0.7} color="#f59e0b" />

        <Suspense fallback={<Loader />}>
          <Float
            speed={1.5}
            rotationIntensity={0.15}
            floatIntensity={0.2}
            floatingRange={[-0.05, 0.05]}
          >
            <ModelSwitcher modelKey={activeModel} />
          </Float>

          {/* Soft Ground Contact Shadow */}
          <ContactShadows
            position={[0, -1.3, 0]}
            opacity={isLight ? 0.45 : 0.65}
            scale={7}
            blur={2.5}
            far={4}
            color={isLight ? '#64748b' : '#021024'}
          />
        </Suspense>

        {interactive && (
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={2.5}
            maxDistance={7.5}
            maxPolarAngle={Math.PI / 2 + 0.05}
            minPolarAngle={Math.PI / 6}
            autoRotate={autoRotate}
            autoRotateSpeed={0.8}
            makeDefault
          />
        )}
      </Canvas>

      {/* Interactive 3D Control Hint Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(7, 13, 24, 0.75)',
          backdropFilter: 'blur(8px)',
          padding: '4px 12px',
          borderRadius: '9999px',
          fontSize: '0.74rem',
          color: isLight ? '#475569' : '#94a3b8',
          border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none',
          userSelect: 'none',
          boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00a859' }} />
        <span>3D View: Drag to Rotate • Scroll to Zoom</span>
      </div>
    </div>
  );
}
