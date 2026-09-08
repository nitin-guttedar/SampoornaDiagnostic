import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DigitalXRay3D() {
  const beamRef = useRef();
  const tubeHeadRef = useRef();

  useFrame((state, delta) => {
    // Pulsing X-ray acquisition beam
    if (beamRef.current) {
      beamRef.current.material.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
    }
    // Gentle floating angle adjustment of tube head
    if (tubeHeadRef.current) {
      tubeHeadRef.current.rotation.x = -0.1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    }
  });

  return (
    <group position={[0, -0.6, 0]} scale={1.1}>
      {/* ===== OVERHEAD CEILING CARRIAGE & TELESCOPIC COLUMN ===== */}
      {/* Ceiling Rails */}
      <mesh position={[0, 2.7, 0]}>
        <boxGeometry args={[3.2, 0.12, 0.35]} />
        <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cross Carriage Slider */}
      <mesh position={[-0.4, 2.58, 0]}>
        <boxGeometry args={[0.7, 0.15, 0.45]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Telescopic Vertical Column */}
      <mesh position={[-0.4, 2.05, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 1.0, 24]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[-0.4, 1.45, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.7, 24]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* ===== X-RAY TUBE HOUSING & COLLIMATOR ===== */}
      <group ref={tubeHeadRef} position={[-0.4, 1.0, 0]}>
        {/* Main X-ray Tube Cylinder */}
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.75, 32]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.3} />
        </mesh>
        {/* End Caps (Sampoorna Blue) */}
        <mesh position={[0.39, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.27, 0.27, 0.06, 32]} />
          <meshStandardMaterial color="#034ea2" roughness={0.3} />
        </mesh>
        <mesh position={[-0.39, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.27, 0.27, 0.06, 32]} />
          <meshStandardMaterial color="#034ea2" roughness={0.3} />
        </mesh>

        {/* High Voltage Cable Conduits */}
        <mesh position={[0.25, 0.35, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 12]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
        <mesh position={[-0.25, 0.35, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 12]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>

        {/* Collimator Box */}
        <mesh position={[0, -0.32, 0]} castShadow>
          <boxGeometry args={[0.42, 0.36, 0.42]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Laser Targeting Crosshair Aperture */}
        <mesh position={[0, -0.51, 0]}>
          <boxGeometry args={[0.28, 0.02, 0.28]} />
          <meshStandardMaterial
            color="#00a859"
            emissive="#00a859"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Collimator Adjustment Knobs */}
        <mesh position={[0.22, -0.32, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.05, 16]} />
          <meshStandardMaterial color="#0b58ca" />
        </mesh>
        <mesh position={[-0.22, -0.32, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.05, 16]} />
          <meshStandardMaterial color="#0b58ca" />
        </mesh>

        {/* Projecting X-Ray Exposure / Alignment Cone towards Detector */}
        <mesh
          ref={beamRef}
          position={[0.75, -0.2, 0]}
          rotation={[0, 0, -Math.PI / 2.3]}
        >
          <coneGeometry args={[0.85, 1.7, 32, 1, true]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* ===== DIGITAL FLAT PANEL RECEPTOR STAND (BUCKEY) ===== */}
      {/* Vertical Wall/Floor Stand Column */}
      <mesh position={[1.4, 0.9, 0]}>
        <boxGeometry args={[0.18, 2.2, 0.18]} />
        <meshStandardMaterial color="#475569" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[1.4, -0.15, 0]}>
        <boxGeometry args={[0.65, 0.08, 0.65]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Digital Flat-Panel Detector (FPD) Plate */}
      <group position={[1.25, 0.9, 0]}>
        {/* Backer Frame */}
        <mesh>
          <boxGeometry args={[0.06, 1.15, 1.0]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.6} />
        </mesh>
        {/* Active Carbon-Fiber Radiographic Imaging Face */}
        <mesh position={[-0.035, 0, 0]}>
          <boxGeometry args={[0.01, 1.05, 0.9]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#0284c7"
            emissiveIntensity={0.3}
            roughness={0.3}
          />
        </mesh>
        {/* Grid Cross Alignment Reticle */}
        <mesh position={[-0.042, 0, 0]}>
          <planeGeometry args={[0.9, 0.8]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
}
