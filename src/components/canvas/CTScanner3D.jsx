import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CTScanner3D() {
  const gantryRotorRef = useRef();
  const scanRingRef = useRef();
  const couchRef = useRef();

  useFrame((state, delta) => {
    // Spin the internal tomography detection ring
    if (gantryRotorRef.current) {
      gantryRotorRef.current.rotation.z += delta * 1.8;
    }
    // Subtle laser beam pulse
    if (scanRingRef.current) {
      scanRingRef.current.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 4) * 0.3;
    }
    // Smooth breathing motion of patient examination table
    if (couchRef.current) {
      couchRef.current.position.z = -0.2 + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group position={[0, -0.4, 0]}>
      {/* ===== GANTRY MAIN BODY ===== */}
      {/* Outer Gantry Ring */}
      <mesh position={[0, 1.3, -0.8]} castShadow receiveShadow>
        <cylinderGeometry args={[1.7, 1.7, 0.9, 48, 1, false]} />
        <meshStandardMaterial
          color="#f1f5f9"
          roughness={0.2}
          metalness={0.15}
        />
      </mesh>

      {/* Gantry Front Bezel & Accent Trim */}
      <mesh position={[0, 1.3, -0.34]}>
        <ringGeometry args={[0.92, 1.68, 48]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Brand Blue Accent Ring on Gantry */}
      <mesh position={[0, 1.3, -0.33]}>
        <ringGeometry args={[1.5, 1.58, 48]} />
        <meshStandardMaterial color="#034ea2" roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Emerald Green Status Indicator Ring */}
      <mesh position={[0, 1.3, -0.32]}>
        <ringGeometry args={[0.94, 0.97, 48]} />
        <meshStandardMaterial
          color="#00a859"
          emissive="#00a859"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Gantry Bore Opening (Inner Cavity) */}
      <mesh position={[0, 1.3, -0.8]}>
        <cylinderGeometry args={[0.9, 0.9, 0.92, 36, 1, true]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} side={THREE.BackSide} />
      </mesh>

      {/* Rotating Internal Tomography Detector Ring */}
      <group ref={gantryRotorRef} position={[0, 1.3, -0.8]}>
        <mesh>
          <torusGeometry args={[0.82, 0.04, 16, 32]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#1d72e8"
            emissiveIntensity={1.2}
          />
        </mesh>
        {/* Tomography X-ray Source & Detectors */}
        <mesh position={[0.82, 0, 0]}>
          <boxGeometry args={[0.15, 0.25, 0.15]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[-0.82, 0, 0]}>
          <boxGeometry args={[0.12, 0.3, 0.12]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Glowing Laser Scan Ring Inside Bore */}
      <mesh ref={scanRingRef} position={[0, 1.3, -0.7]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.88, 0.015, 16, 48]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.6} />
      </mesh>

      {/* Gantry Base Pedestal */}
      <mesh position={[0, 0.35, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.7, 1.1]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.3} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.05, -0.8]}>
        <boxGeometry args={[2.8, 0.1, 1.3]} />
        <meshStandardMaterial color="#034ea2" roughness={0.4} />
      </mesh>

      {/* Digital Control Display on Gantry Crown */}
      <mesh position={[0, 2.7, -0.4]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[0.6, 0.25, 0.06]} />
        <meshStandardMaterial color="#1e293b" roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.7, -0.36]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[0.54, 0.2]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>

      {/* ===== MOTORIZED PATIENT COUCH / TABLE ===== */}
      {/* Heavy Base Support Column */}
      <mesh position={[0, 0.45, 0.7]} castShadow>
        <boxGeometry args={[0.8, 0.7, 1.4]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Floor Mounting Baseplate */}
      <mesh position={[0, 0.06, 0.7]} receiveShadow>
        <boxGeometry args={[1.1, 0.12, 1.8]} />
        <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Sliding Examination Table */}
      <group ref={couchRef}>
        {/* Table Carriage */}
        <mesh position={[0, 0.88, 0.6]} castShadow>
          <boxGeometry args={[0.7, 0.08, 2.4]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.1} />
        </mesh>
        {/* Ergonomic Patient Cushion */}
        <mesh position={[0, 0.94, 0.6]}>
          <boxGeometry args={[0.62, 0.04, 2.3]} />
          <meshStandardMaterial color="#034ea2" roughness={0.6} />
        </mesh>
        {/* Patient Headrest */}
        <mesh position={[0, 0.98, -0.45]}>
          <cylinderGeometry args={[0.22, 0.22, 0.28, 24]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#0b58ca" roughness={0.5} />
        </mesh>
      </group>

      {/* Floor Medical Calibration Grid Ring */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 2.2, 48]} />
        <meshBasicMaterial color="#00a859" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}
