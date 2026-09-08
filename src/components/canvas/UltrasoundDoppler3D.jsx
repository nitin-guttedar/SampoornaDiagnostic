import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function UltrasoundDoppler3D() {
  const soundWave1 = useRef();
  const soundWave2 = useRef();
  const soundWave3 = useRef();
  const probeRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    // Sound wave pulse propagation
    if (soundWave1.current) {
      const s1 = (t * 1.5) % 3;
      soundWave1.current.scale.set(1 + s1 * 0.8, 1 + s1 * 0.8, 1 + s1 * 0.8);
      soundWave1.current.material.opacity = Math.max(0, 0.7 - s1 * 0.25);
    }
    if (soundWave2.current) {
      const s2 = (t * 1.5 + 1) % 3;
      soundWave2.current.scale.set(1 + s2 * 0.8, 1 + s2 * 0.8, 1 + s2 * 0.8);
      soundWave2.current.material.opacity = Math.max(0, 0.7 - s2 * 0.25);
    }
    if (soundWave3.current) {
      const s3 = (t * 1.5 + 2) % 3;
      soundWave3.current.scale.set(1 + s3 * 0.8, 1 + s3 * 0.8, 1 + s3 * 0.8);
      soundWave3.current.material.opacity = Math.max(0, 0.7 - s3 * 0.25);
    }

    // Dynamic scanning orientation of ultrasound probe
    if (probeRef.current) {
      probeRef.current.rotation.z = Math.sin(t * 1.2) * 0.12;
      probeRef.current.position.x = -0.3 + Math.cos(t * 1.2) * 0.08;
    }
  });

  return (
    <group position={[0, -0.7, 0]} scale={1.15}>
      {/* ===== ULTRASOUND CONSOLE CART ===== */}
      {/* Mobile Base & Casters */}
      <mesh position={[0.7, 0.1, 0]} castShadow>
        <boxGeometry args={[1.0, 0.18, 0.9]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Main Machine Tower */}
      <mesh position={[0.7, 0.8, 0]} castShadow>
        <boxGeometry args={[0.8, 1.2, 0.75]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.2} />
      </mesh>
      {/* Keyboard & Trackball Operating Console Deck */}
      <mesh position={[0.7, 1.45, 0.1]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[0.9, 0.12, 0.65]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Glowing Trackball */}
      <mesh position={[0.7, 1.54, 0.15]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.5} />
      </mesh>

      {/* Articulating Monitor Column */}
      <mesh position={[0.7, 1.9, -0.15]}>
        <cylinderGeometry args={[0.06, 0.06, 0.8, 16]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} />
      </mesh>

      {/* High-Definition Diagnostic Monitor */}
      <group position={[0.7, 2.3, -0.05]} rotation={[0.08, 0, 0]}>
        {/* Monitor Bezel */}
        <mesh castShadow>
          <boxGeometry args={[1.1, 0.75, 0.08]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} />
        </mesh>
        {/* Active Color Doppler Sonogram Screen */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[1.0, 0.65]} />
          <meshBasicMaterial color="#0284c7" />
        </mesh>
        {/* Simulated Doppler Blood Flow Velocity Waveform Line */}
        <mesh position={[0, -0.1, 0.048]}>
          <planeGeometry args={[0.9, 0.15]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0, 0.12, 0.048]}>
          <planeGeometry args={[0.9, 0.15]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>
      </group>

      {/* ===== ULTRASOUND TRANSDUCER PROBE & SOUND WAVES ===== */}
      <group ref={probeRef} position={[-0.4, 1.1, 0.4]}>
        {/* Ergonomic Probe Grip Body */}
        <mesh castShadow>
          <capsuleGeometry args={[0.12, 0.4, 16, 24]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.2} metalness={0.3} />
        </mesh>
        {/* Sampoorna Emerald Grip Band */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.125, 0.125, 0.12, 24]} />
          <meshStandardMaterial color="#00a859" roughness={0.3} />
        </mesh>

        {/* Acoustic Silicon Lens (Scanning Head) */}
        <mesh position={[0, -0.32, 0]}>
          <boxGeometry args={[0.26, 0.08, 0.12]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#0284c7"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Flexible Transducer Cable */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.35, 12]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>

        {/* Acoustic Ultrasound Wave Pulses */}
        <mesh ref={soundWave1} position={[0, -0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.25, 0.02, 16, 32, Math.PI]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={soundWave2} position={[0, -0.58, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.4, 0.02, 16, 32, Math.PI]} />
          <meshBasicMaterial color="#00a859" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={soundWave3} position={[0, -0.72, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.02, 16, 32, Math.PI]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}
