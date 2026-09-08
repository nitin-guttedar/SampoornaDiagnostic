import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DnaHelix3D() {
  const groupRef = useRef();
  const particleGroupRef = useRef();

  // Generate base pairs along double helix
  const pairs = useMemo(() => {
    const items = [];
    const count = 30;
    const radius = 0.85;
    const height = 4.2;

    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 4;
      const y = (i / count) * height - height / 2;
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;

      items.push({
        id: i,
        pos1: [x1, y, z1],
        pos2: [x2, y, z2],
        center: [(x1 + x2) / 2, y, (z1 + z2) / 2],
        rotationY: t,
        colorPair: i % 2 === 0 ? ['#034ea2', '#f59e0b'] : ['#00a859', '#38bdf8']
      });
    }
    return items;
  }, []);

  // Floating molecular particles
  const floatingParticles = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      pts.push({
        id: i,
        pos: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4.5,
          (Math.random() - 0.5) * 4
        ],
        size: 0.03 + Math.random() * 0.05,
        color: ['#00a859', '#38bdf8', '#f59e0b', '#034ea2'][Math.floor(Math.random() * 4)]
      });
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8;
    }
    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]} scale={1.05}>
      {/* Rotating DNA Helix */}
      <group ref={groupRef}>
        {pairs.map((pair) => (
          <group key={pair.id}>
            {/* Strand 1 Node */}
            <mesh position={pair.pos1}>
              <sphereGeometry args={[0.09, 16, 16]} />
              <meshStandardMaterial
                color={pair.colorPair[0]}
                emissive={pair.colorPair[0]}
                emissiveIntensity={0.6}
                roughness={0.2}
              />
            </mesh>
            {/* Strand 2 Node */}
            <mesh position={pair.pos2}>
              <sphereGeometry args={[0.09, 16, 16]} />
              <meshStandardMaterial
                color={pair.colorPair[1]}
                emissive={pair.colorPair[1]}
                emissiveIntensity={0.6}
                roughness={0.2}
              />
            </mesh>
            {/* Connecting Base Pair Hydrogen Bond Rung */}
            <mesh
              position={pair.center}
              rotation={[0, -pair.rotationY, Math.PI / 2]}
            >
              <cylinderGeometry args={[0.02, 0.02, 1.7, 8]} />
              <meshStandardMaterial
                color="#e2e8f0"
                metalness={0.5}
                roughness={0.4}
                transparent
                opacity={0.7}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* Floating Biochemical Sparkles */}
      <group ref={particleGroupRef}>
        {floatingParticles.map((p) => (
          <mesh key={p.id} position={p.pos}>
            <sphereGeometry args={[p.size, 8, 8]} />
            <meshBasicMaterial color={p.color} transparent opacity={0.6} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
