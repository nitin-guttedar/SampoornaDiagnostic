import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Microscope3D() {
  const turretRef = useRef();
  const slideGlowRef = useRef();
  const lightConeRef = useRef();
  const knobRef = useRef();

  useFrame((state, delta) => {
    // Subtle rotation of the objective turret for presentation
    if (turretRef.current) {
      turretRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    // Specimen bio-fluorescence pulse
    if (slideGlowRef.current) {
      slideGlowRef.current.material.emissiveIntensity = 0.8 + Math.sin(state.clock.elapsedTime * 3) * 0.4;
    }
    // Substage condenser light intensity
    if (lightConeRef.current) {
      lightConeRef.current.material.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
    // Micro focus knob turning
    if (knobRef.current) {
      knobRef.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <group position={[0, -1.1, 0]} scale={1.2}>
      {/* ===== MICROSCOPE BASE ===== */}
      {/* Heavy Horseshoe Base */}
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.1, 1.25, 0.3, 32]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Base Accent Ring (Sampoorna Brand Blue) */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.95, 1.0, 0.05, 32]} />
        <meshStandardMaterial color="#034ea2" roughness={0.2} metalness={0.5} />
      </mesh>

      {/* Substage Illuminator LED Box & Light Collector */}
      <mesh position={[0, 0.38, 0.1]}>
        <cylinderGeometry args={[0.3, 0.35, 0.15, 24]} />
        <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Substage Condenser Light Source */}
      <mesh position={[0, 0.46, 0.1]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 24]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={2.0}
        />
      </mesh>

      {/* Illuminating Beam Cone from Condenser to Stage */}
      <mesh ref={lightConeRef} position={[0, 0.85, 0.1]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.25, 0.8, 24, 1, true]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ===== VERTICAL COLUMN / CURVED ARM ===== */}
      <mesh position={[0, 1.1, -0.45]} castShadow>
        <boxGeometry args={[0.45, 1.6, 0.35]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.2} />
      </mesh>
      {/* Upper Curved Head Arch */}
      <mesh position={[0, 1.9, -0.15]} rotation={[-0.35, 0, 0]} castShadow>
        <boxGeometry args={[0.42, 0.5, 0.65]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.2} />
      </mesh>

      {/* Focus Adjustment Dials (Coarse & Fine Knobs) */}
      <group ref={knobRef} position={[0.28, 0.9, -0.45]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.12, 24]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.9} />
        </mesh>
        <mesh position={[0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
          <meshStandardMaterial color="#00a859" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>
      <group position={[-0.28, 0.9, -0.45]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.12, 24]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.9} />
        </mesh>
        <mesh position={[-0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
          <meshStandardMaterial color="#00a859" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>

      {/* ===== MECHANICAL SPECIMEN STAGE ===== */}
      <mesh position={[0, 1.15, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 0.08, 0.95]} />
        <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Stage Aperture / Central Light Hole */}
      <mesh position={[0, 1.192, 0.1]}>
        <cylinderGeometry args={[0.12, 0.12, 0.01, 24]} />
        <meshBasicMaterial color="#0284c7" />
      </mesh>

      {/* Glass Slide with Diagnostic Blood/Cell Specimen */}
      <mesh position={[0, 1.205, 0.1]}>
        <boxGeometry args={[0.65, 0.015, 0.24]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.1}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Fluorescing Biological Sample (Emerald / Amber Stain) */}
      <mesh ref={slideGlowRef} position={[0, 1.215, 0.1]}>
        <cylinderGeometry args={[0.07, 0.07, 0.01, 16]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Specimen Retaining Stage Clips */}
      <mesh position={[0.25, 1.22, 0.1]}>
        <boxGeometry args={[0.04, 0.02, 0.2]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[-0.25, 1.22, 0.1]}>
        <boxGeometry args={[0.04, 0.02, 0.2]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ===== REVOLVING NOSEPIECE & OBJECTIVE LENSES ===== */}
      <group position={[0, 1.7, 0.1]}>
        {/* Turret Disc */}
        <mesh ref={turretRef}>
          <cylinderGeometry args={[0.3, 0.35, 0.12, 24]} />
          <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.8} />
          {/* Objective 1: High Power 100x Oil Immersion (Gold Ring) */}
          <group position={[0, -0.16, 0.12]} rotation={[-0.3, 0, 0]}>
            <mesh>
              <cylinderGeometry args={[0.07, 0.05, 0.24, 16]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.075, 0.075, 0.03, 16]} />
              <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} />
            </mesh>
          </group>
          {/* Objective 2: 40x High Dry (Blue Ring) */}
          <group position={[-0.12, -0.16, -0.06]} rotation={[0.2, 0, -0.3]}>
            <mesh>
              <cylinderGeometry args={[0.07, 0.05, 0.22, 16]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.075, 0.075, 0.03, 16]} />
              <meshStandardMaterial color="#0b58ca" emissive="#0b58ca" emissiveIntensity={0.5} />
            </mesh>
          </group>
          {/* Objective 3: 10x Low Power (Green Ring) */}
          <group position={[0.12, -0.16, -0.06]} rotation={[0.2, 0, 0.3]}>
            <mesh>
              <cylinderGeometry args={[0.07, 0.05, 0.18, 16]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.075, 0.075, 0.03, 16]} />
              <meshStandardMaterial color="#00a859" emissive="#00a859" emissiveIntensity={0.5} />
            </mesh>
          </group>
        </mesh>
      </group>

      {/* ===== BINOCULAR HEAD & EYEPIECES ===== */}
      <group position={[0, 2.05, 0.05]}>
        {/* Prismatic Head Housing */}
        <mesh position={[0, 0.08, -0.05]} castShadow>
          <boxGeometry args={[0.48, 0.24, 0.35]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.2} />
        </mesh>
        {/* Left Eyepiece Tube */}
        <group position={[-0.14, 0.26, 0.1]} rotation={[-0.45, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.06, 0.06, 0.35, 16]} />
            <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
          </mesh>
          {/* Soft Rubber Eye Guard */}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.08, 0.06, 0.08, 16]} />
            <meshStandardMaterial color="#020617" roughness={0.8} />
          </mesh>
        </group>
        {/* Right Eyepiece Tube */}
        <group position={[0.14, 0.26, 0.1]} rotation={[-0.45, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.06, 0.06, 0.35, 16]} />
            <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
          </mesh>
          {/* Soft Rubber Eye Guard */}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.08, 0.06, 0.08, 16]} />
            <meshStandardMaterial color="#020617" roughness={0.8} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
