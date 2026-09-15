import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Procedural Canvas Textures for Authentic Toshiba Alexion Details
// ---------------------------------------------------------------------------

function createAlexionScreenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');

  // Deep tech background
  const bgGrad = ctx.createRadialGradient(256, 160, 20, 256, 160, 260);
  bgGrad.addColorStop(0, '#023e8a');
  bgGrad.addColorStop(0.4, '#001845');
  bgGrad.addColorStop(1, '#000814');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 512, 320);

  // Radial scan vortex / nebula (Signature Alexion wallpaper)
  ctx.save();
  ctx.translate(256, 160);
  for (let i = 0; i < 24; i++) {
    const angle = (i * Math.PI) / 12;
    ctx.rotate(0.26);
    ctx.beginPath();
    ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 + (i % 3) * 0.08})`;
    ctx.lineWidth = 1.5;
    ctx.arc(0, 0, 20 + i * 5, 0, Math.PI * 1.5);
    ctx.stroke();
  }
  ctx.restore();

  // Burst light in center
  const burstGrad = ctx.createRadialGradient(220, 150, 2, 220, 150, 90);
  burstGrad.addColorStop(0, '#ffffff');
  burstGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.9)');
  burstGrad.addColorStop(0.7, 'rgba(3, 78, 162, 0.4)');
  burstGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = burstGrad;
  ctx.beginPath();
  ctx.arc(220, 150, 90, 0, Math.PI * 2);
  ctx.fill();

  // "Alexion" signature script logo
  ctx.font = 'italic bold 44px "Outfit", "Segoe UI", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = '#00e5ff';
  ctx.shadowBlur = 12;
  ctx.fillText('Alexion', 300, 165);
  ctx.shadowBlur = 0;

  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('16-SLICE MULTISLICE CT', 305, 185);

  // Header Bar
  ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
  ctx.fillRect(0, 0, 512, 26);
  ctx.font = 'bold 11px monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('TOSHIBA MEDICAL SYSTEMS • ACQUISITION CONSOLE', 12, 17);
  ctx.fillStyle = '#4ade80';
  ctx.fillText('● SYSTEM READY', 400, 17);

  // Telemetry Box at Bottom
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.fillRect(0, 275, 512, 45);
  ctx.font = '11px monospace';
  ctx.fillStyle = '#e2e8f0';
  ctx.fillText('kV: 120   mA: 200   ROT: 0.75s   SLICE: 16 x 0.5mm', 14, 295);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('AIDR 3D: ACTIVE (DOSE REDUCTION -40%)', 14, 310);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createGantryBrandTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 512, 128);

  // Toshiba Logo (Center-top)
  ctx.font = 'bold 28px "Outfit", "Helvetica Neue", sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.textAlign = 'center';
  ctx.fillText('TOSHIBA', 256, 42);

  // Alexion Signature Script
  ctx.font = 'italic bold 36px "Brush Script MT", "Outfit", cursive, sans-serif';
  ctx.fillStyle = '#0284c7';
  ctx.textAlign = 'left';
  ctx.fillText('Alexion', 30, 85);

  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#00a859';
  ctx.fillText('16', 158, 76);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createControlPanelTexture(isRight = false) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 384;
  const ctx = canvas.getContext('2d');

  // Panel background (soft Alexion ice blue)
  const grad = ctx.createLinearGradient(0, 0, 128, 384);
  grad.addColorStop(0, '#c7e2ef');
  grad.addColorStop(0.5, '#b0d5e8');
  grad.addColorStop(1, '#98c5dd');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 384);

  // Subtle panel border
  ctx.strokeStyle = '#7daec7';
  ctx.lineWidth = 3;
  ctx.strokeRect(4, 4, 120, 376);

  // Digital LED Display Screen at top
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(14, 18, 100, 55);
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(14, 18, 100, 55);

  // 7-segment digital readouts
  ctx.font = 'bold 15px monospace';
  ctx.fillStyle = '#4ade80';
  ctx.fillText(isRight ? '16 SLC' : '145 mm', 22, 40);
  ctx.font = 'bold 12px monospace';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText(isRight ? 'TLT 0.0°' : 'SCAN ON', 22, 60);

  // Membrane round tactile buttons (2 columns)
  const colors = ['#ffffff', '#38bdf8', '#4ade80', '#fbbf24', '#ffffff', '#38bdf8'];
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 2; col++) {
      const x = 36 + col * 56;
      const y = 96 + row * 44;

      // Button shadow / rim
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#64748b';
      ctx.fill();

      // Button cap
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fillStyle = colors[(row + col) % colors.length];
      ctx.fill();

      // Micro center ring
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.fill();
    }
  }

  // Red Emergency Stop button on Right panel
  if (isRight) {
    ctx.beginPath();
    ctx.arc(64, 350, 18, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    ctx.strokeStyle = '#b91c1c';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = 'bold 9px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('E-STOP', 64, 354);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createTowerFrontTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 384;
  const ctx = canvas.getContext('2d');

  // Metal case background
  ctx.fillStyle = '#dcdfe4';
  ctx.fillRect(0, 0, 256, 384);

  // Optical drive slot (CD/DVD DICOM)
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(24, 24, 208, 30);
  ctx.fillStyle = '#94a3b8';
  ctx.fillRect(28, 48, 140, 2);
  ctx.beginPath();
  ctx.arc(210, 39, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#4ade80';
  ctx.fill();

  // Power switch & LEDs
  ctx.beginPath();
  ctx.arc(200, 75, 8, 0, Math.PI * 2);
  ctx.fillStyle = '#64748b';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(200, 75, 6, 0, Math.PI * 2);
  ctx.fillStyle = '#0284c7';
  ctx.fill();

  // Activity LED indicators
  ctx.beginPath();
  ctx.arc(160, 75, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = '#22c55e';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(175, 75, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = '#f59e0b';
  ctx.fill();

  // Cooling air intake grille louvers
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(24, 105, 208, 245);

  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 2.5;
  for (let y = 115; y < 340; y += 8) {
    ctx.beginPath();
    ctx.moveTo(34, y);
    ctx.lineTo(222, y);
    ctx.stroke();
  }

  // Alexion / Toshiba stamp
  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.textAlign = 'left';
  ctx.fillText('TOSHIBA RECON SYSTEM', 26, 370);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// ---------------------------------------------------------------------------
// Main 3D Component: Exact Replica of Toshiba Alexion 16-Slice CT Scanner
// ---------------------------------------------------------------------------

export default function CTScanner3D() {
  const gantryRotorRef = useRef();
  const scanLaserRef = useRef();
  const couchRef = useRef();
  const bellowsRef = useRef();
  const statusLightRef = useRef();

  // Memoize generated textures for optimal performance
  const screenTex = useMemo(() => createAlexionScreenTexture(), []);
  const brandTex = useMemo(() => createGantryBrandTexture(), []);
  const leftPanelTex = useMemo(() => createControlPanelTexture(false), []);
  const rightPanelTex = useMemo(() => createControlPanelTexture(true), []);
  const towerTex = useMemo(() => createTowerFrontTexture(), []);

  // Shared medical materials matching Toshiba Alexion aesthetic
  const medicalWhite = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#f8fafc',
        roughness: 0.18,
        metalness: 0.08,
      }),
    []
  );

  const medicalWarmGray = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#e2e8f6',
        roughness: 0.35,
        metalness: 0.12,
      }),
    []
  );

  const darkPlinth = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#334155',
        roughness: 0.45,
        metalness: 0.4,
      }),
    []
  );

  const alexionCyanAccent = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#70b5d9',
        roughness: 0.25,
        metalness: 0.15,
      }),
    []
  );

  const deepBlueMattress = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#034ea2',
        roughness: 0.65,
        metalness: 0.05,
      }),
    []
  );

  const chromeMetal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#e2e8f0',
        roughness: 0.15,
        metalness: 0.85,
      }),
    []
  );

  // Animation cycle: Table advancing smoothly through helical scan volume
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // High-speed slip-ring gantry rotor spinning inside the bore (16-slice acquisition)
    if (gantryRotorRef.current) {
      gantryRotorRef.current.rotation.z -= delta * 2.8;
    }

    // Patient table smooth translation (enters bore, pauses, returns)
    if (couchRef.current) {
      // Periodic translation range: z between -0.45 and 0.45
      const cycle = Math.sin(time * 0.7);
      couchRef.current.position.z = cycle * 0.35 - 0.1;
    }

    // Subtle breathing expansion on the bellows as table shifts weight
    if (bellowsRef.current) {
      const bScale = 1.0 + Math.sin(time * 0.7) * 0.015;
      bellowsRef.current.scale.set(1, bScale, 1);
    }

    // Sagittal & axial positioning laser beam pulse
    if (scanLaserRef.current) {
      scanLaserRef.current.material.opacity = 0.45 + Math.sin(time * 5.0) * 0.35;
    }

    // Status indicator glow pulsation
    if (statusLightRef.current) {
      statusLightRef.current.intensity = 0.6 + Math.sin(time * 3.5) * 0.4;
    }
  });

  return (
    <group position={[-0.3, -0.45, 0]}>
      {/* ===================================================================== */}
      {/* 1. TOSHIBA ALEXION GANTRY STRUCTURE                                  */}
      {/* ===================================================================== */}
      <group position={[0, 0, -0.9]}>
        {/* Recessed Dark Plinth Base (Floor Footing) */}
        <mesh position={[0, 0.1, 0]} material={darkPlinth} castShadow receiveShadow>
          <boxGeometry args={[2.7, 0.2, 1.2]} />
        </mesh>
        {/* Plinth Beveled Trim */}
        <mesh position={[0, 0.22, 0]} material={chromeMetal}>
          <boxGeometry args={[2.62, 0.04, 1.15]} />
        </mesh>

        {/* Main Gantry Cabinet Body (Sculpted Rounded Envelope) */}
        {/* Lower Main Gantry Block */}
        <mesh position={[0, 0.85, 0]} material={medicalWhite} castShadow receiveShadow>
          <boxGeometry args={[2.55, 1.25, 0.95]} />
        </mesh>

        {/* Curved Upper Gantry Dome (Signature Arched Top of Alexion) */}
        <mesh
          position={[0, 1.48, 0]}
          rotation={[0, 0, Math.PI / 2]}
          material={medicalWhite}
          castShadow
        >
          <cylinderGeometry args={[1.275, 1.275, 0.95, 48, 1, false, 0, Math.PI]} />
        </mesh>

        {/* Soft Beveled Front Face Plate */}
        <mesh position={[0, 1.45, 0.48]} material={medicalWhite}>
          <boxGeometry args={[2.48, 1.7, 0.03]} />
        </mesh>

        {/* Front Shoulder Taper Wings (Left & Right aerodynamic rounded contour) */}
        <mesh position={[-1.24, 1.35, 0.05]} material={medicalWarmGray}>
          <boxGeometry args={[0.1, 1.5, 0.85]} />
        </mesh>
        <mesh position={[1.24, 1.35, 0.05]} material={medicalWarmGray}>
          <boxGeometry args={[0.1, 1.5, 0.85]} />
        </mesh>

        {/* Centered Top Canopy Bevel with Laser Indicator Housing */}
        <mesh position={[0, 2.76, 0.05]} material={medicalWarmGray}>
          <boxGeometry args={[0.5, 0.08, 0.6]} />
        </mesh>
        {/* Top Center Sagittal Laser Projector Notch */}
        <mesh position={[0, 2.2, 0.5]}>
          <boxGeometry args={[0.04, 0.08, 0.02]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>

        {/* Toshiba & Alexion Branding Emblems (Front Top Face) */}
        <mesh position={[0, 2.38, 0.505]}>
          <planeGeometry args={[1.1, 0.28]} />
          <meshBasicMaterial map={brandTex} transparent />
        </mesh>

        {/* =================================================================== */}
        {/* GANTRY PATIENT BORE & APERTURE COLLAR                               */}
        {/* =================================================================== */}
        {/* Flared Entry Bezel Ring */}
        <mesh position={[0, 1.42, 0.5]}>
          <ringGeometry args={[0.78, 1.05, 48]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.2} metalness={0.1} />
        </mesh>
        {/* Soft Tapered Inner Inset Collar */}
        <mesh position={[0, 1.42, 0.44]}>
          <ringGeometry args={[0.75, 0.82, 48]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Internal Patient Tunnel (Bore Cavity) */}
        <mesh position={[0, 1.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.74, 0.74, 0.98, 48, 1, true]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} side={THREE.DoubleSide} />
        </mesh>
        {/* Rear Bore Exit Ring */}
        <mesh position={[0, 1.42, -0.49]}>
          <ringGeometry args={[0.72, 0.98, 48]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
        </mesh>

        {/* =================================================================== */}
        {/* HIGH-SPEED 16-SLICE ROTOR ASSEMBLY (INSIDE BORE)                    */}
        {/* =================================================================== */}
        <group ref={gantryRotorRef} position={[0, 1.42, 0]}>
          {/* Slip-ring rotating framework */}
          <mesh>
            <torusGeometry args={[0.7, 0.025, 16, 48]} />
            <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* 16-Slice Multi-Row Ceramic Detector Arc */}
          <mesh position={[0, 0.67, 0]}>
            <boxGeometry args={[0.42, 0.08, 0.18]} />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#0284c7"
              emissiveIntensity={0.6}
              metalness={0.5}
            />
          </mesh>

          {/* Opposing High-Capacity X-Ray Tube with Heat Exchanger Housing */}
          <mesh position={[0, -0.66, 0]}>
            <boxGeometry args={[0.32, 0.1, 0.22]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Collimator Shutter Housing */}
          <mesh position={[0, -0.58, 0]}>
            <boxGeometry args={[0.16, 0.05, 0.14]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
        </group>

        {/* Active Laser Scan Ring (Inside Bore) */}
        <mesh ref={scanLaserRef} position={[0, 1.42, 0.05]}>
          <torusGeometry args={[0.73, 0.012, 16, 48]} />
          <meshBasicMaterial color="#00e5ff" transparent opacity={0.65} />
        </mesh>

        {/* Ambient Bore Illumination Halo */}
        <pointLight
          ref={statusLightRef}
          position={[0, 1.42, 0.1]}
          color="#38bdf8"
          intensity={0.8}
          distance={1.6}
        />

        {/* =================================================================== */}
        {/* DUAL CONTROL CONSOLES (FLANKING THE BORE - LEFT & RIGHT)            */}
        {/* =================================================================== */}
        {/* Left Alexion Control Console Pod */}
        <group position={[-1.02, 1.5, 0.5]}>
          <mesh castShadow>
            <boxGeometry args={[0.26, 0.85, 0.03]} />
            <meshStandardMaterial color="#e0f2fe" roughness={0.3} />
          </mesh>
          {/* Canvas texture display & buttons */}
          <mesh position={[0, 0, 0.018]}>
            <planeGeometry args={[0.24, 0.82]} />
            <meshBasicMaterial map={leftPanelTex} />
          </mesh>
        </group>

        {/* Right Alexion Control Console Pod */}
        <group position={[1.02, 1.5, 0.5]}>
          <mesh castShadow>
            <boxGeometry args={[0.26, 0.85, 0.03]} />
            <meshStandardMaterial color="#e0f2fe" roughness={0.3} />
          </mesh>
          {/* Canvas texture display & buttons + E-Stop */}
          <mesh position={[0, 0, 0.018]}>
            <planeGeometry args={[0.24, 0.82]} />
            <meshBasicMaterial map={rightPanelTex} />
          </mesh>
        </group>
      </group>

      {/* ===================================================================== */}
      {/* 2. MOTORIZED PATIENT COUCH / ACCORDION BELLOWS TABLE                  */}
      {/* ===================================================================== */}
      <group position={[0, 0, 0.7]}>
        {/* Connecting Floor Track to Gantry Base */}
        <mesh position={[0, 0.02, -0.65]} material={darkPlinth} receiveShadow>
          <boxGeometry args={[0.36, 0.04, 0.9]} />
        </mesh>
        <mesh position={[0, 0.04, -0.65]} material={chromeMetal}>
          <boxGeometry args={[0.12, 0.02, 0.88]} />
        </mesh>

        {/* Heavy Charcoal Floor Runner Baseplate (Contoured Nose) */}
        <mesh position={[0, 0.06, 0.35]} material={darkPlinth} castShadow receiveShadow>
          <boxGeometry args={[0.82, 0.12, 1.85]} />
        </mesh>
        {/* Front Rounded Nose Cap on Base */}
        <mesh
          position={[0, 0.06, 1.27]}
          rotation={[0, 0, 0]}
          material={darkPlinth}
          castShadow
        >
          <cylinderGeometry args={[0.41, 0.41, 0.12, 24, 1, false, 0, Math.PI]} />
        </mesh>

        {/* ACCORDION PLEATED BELLOWS LIFT COLUMN (Exact Alexion Signature!) */}
        <group ref={bellowsRef} position={[0, 0.48, 0.3]}>
          {/* 7 Stacked Accordion Pleats with realistic faceted geometry */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            const y = (i - 3) * 0.09;
            return (
              <group key={i} position={[0, y, 0]}>
                {/* Outward Pleat Rim */}
                <mesh castShadow>
                  <boxGeometry args={[0.76, 0.045, 1.55]} />
                  <meshStandardMaterial color="#f1f5f9" roughness={0.4} metalness={0.08} />
                </mesh>
                {/* Inward Crease Notch */}
                <mesh position={[0, -0.025, 0]}>
                  <boxGeometry args={[0.66, 0.04, 1.45]} />
                  <meshStandardMaterial color="#94a3b8" roughness={0.6} />
                </mesh>
              </group>
            );
          })}
        </group>

        {/* Top Intermediate Carriage Sub-frame */}
        <mesh position={[0, 0.82, 0.3]} material={medicalWhite} castShadow>
          <boxGeometry args={[0.74, 0.06, 1.68]} />
        </mesh>

        {/* =================================================================== */}
        {/* HORIZONTALLY SLIDING PATIENT CRADLE & TABLETOP                      */}
        {/* =================================================================== */}
        <group ref={couchRef} position={[0, 0.88, 0.3]}>
          {/* Cradle Foundation */}
          <mesh position={[0, 0.04, 0]} material={medicalWhite} castShadow>
            <boxGeometry args={[0.68, 0.07, 2.35]} />
          </mesh>

          {/* Sweeping Alexion Sky-Blue / Cyan Side Wings (Left & Right) */}
          {/* Left sweeping curved cyan wing */}
          <mesh position={[-0.345, 0.04, 0]} material={alexionCyanAccent} castShadow>
            <boxGeometry args={[0.025, 0.09, 2.25]} />
          </mesh>
          <mesh position={[-0.35, 0.02, 0.4]} material={alexionCyanAccent}>
            <boxGeometry args={[0.02, 0.07, 1.2]} />
          </mesh>

          {/* Right sweeping curved cyan wing */}
          <mesh position={[0.345, 0.04, 0]} material={alexionCyanAccent} castShadow>
            <boxGeometry args={[0.025, 0.09, 2.25]} />
          </mesh>
          <mesh position={[0.35, 0.02, 0.4]} material={alexionCyanAccent}>
            <boxGeometry args={[0.02, 0.07, 1.2]} />
          </mesh>

          {/* Ergonomic Contoured Medical Cushion Mattress */}
          <mesh position={[0, 0.1, 0.05]} material={deepBlueMattress} castShadow>
            <boxGeometry args={[0.58, 0.045, 2.15]} />
          </mesh>

          {/* Rounded Ergonomic Patient Headrest (Bore End) */}
          <group position={[0, 0.12, -1.05]}>
            <mesh material={deepBlueMattress}>
              <cylinderGeometry
                args={[0.16, 0.16, 0.32, 24, 1, false, 0, Math.PI]}
                rotation={[0, 0, -Math.PI / 2]}
              />
            </mesh>
            <mesh position={[0, -0.03, 0]} material={chromeMetal}>
              <boxGeometry args={[0.34, 0.02, 0.18]} />
            </mesh>
          </group>

          {/* Foot-End Curved Arch Loop Grab Handle (Signature Alexion Feature!) */}
          <group position={[0, 0.14, 1.15]}>
            {/* Curved tubular arch handle in baby blue */}
            <mesh
              position={[0, 0.06, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              material={alexionCyanAccent}
              castShadow
            >
              <torusGeometry args={[0.18, 0.022, 16, 32, Math.PI]} />
            </mesh>
            {/* End Cap Mechanical Housing */}
            <mesh position={[0, -0.04, -0.02]} material={medicalWarmGray} castShadow>
              <boxGeometry args={[0.66, 0.12, 0.12]} />
            </mesh>
          </group>

          {/* Longitudinal Red Laser Patient Positioning Crosshair Line */}
          <mesh position={[0, 0.128, 0]}>
            <planeGeometry args={[0.008, 2.1]} />
            <meshBasicMaterial color="#ff2a2a" />
          </mesh>
        </group>
      </group>

      {/* ===================================================================== */}
      {/* 3. ALEXION OPERATOR WORKSTATION CONSOLE & TOWER CART                  */}
      {/* (Prominently featured on the right side of the machine)               */}
      {/* ===================================================================== */}
      <group position={[1.75, 0, 0.05]} rotation={[0, -0.32, 0]}>
        {/* Workstation Base Wheels / Casters */}
        {[-0.32, 0.32].map((x, i) =>
          [-0.24, 0.24].map((z, j) => (
            <mesh key={`${i}-${j}`} position={[x, 0.04, z]} material={darkPlinth}>
              <cylinderGeometry args={[0.035, 0.035, 0.04, 16]} />
            </mesh>
          ))
        )}

        {/* Lower Shelf Platform (Hosts Tower) */}
        <mesh position={[0, 0.08, 0]} material={medicalWarmGray} castShadow receiveShadow>
          <boxGeometry args={[0.74, 0.04, 0.58]} />
        </mesh>

        {/* Vertical Metallic Tubular Support Frame Legs */}
        {[-0.32, 0.32].map((x, i) => (
          <mesh key={i} position={[x, 0.55, 0.18]} material={chromeMetal} castShadow>
            <cylinderGeometry args={[0.026, 0.026, 0.96, 20]} />
          </mesh>
        ))}

        {/* Alexion High-Speed Reconstruction Processor Tower Computer */}
        <group position={[0.02, 0.32, -0.02]}>
          <mesh material={medicalWarmGray} castShadow>
            <boxGeometry args={[0.42, 0.44, 0.48]} />
          </mesh>
          {/* Front Panel Canvas Texture (Cooling Louvers, DVD Slot, LEDs) */}
          <mesh position={[0, 0, 0.242]}>
            <planeGeometry args={[0.4, 0.42]} />
            <meshBasicMaterial map={towerTex} />
          </mesh>
          {/* Handle bar on tower */}
          <mesh position={[0, 0.2, 0.25]} material={chromeMetal}>
            <boxGeometry args={[0.22, 0.018, 0.02]} />
          </mesh>
        </group>

        {/* Upper Main Desktop Working Platform */}
        <mesh position={[0, 1.04, 0.05]} material={medicalWhite} castShadow>
          <boxGeometry args={[0.82, 0.04, 0.62]} />
        </mesh>

        {/* Medical Keyboard & Trackball Tray */}
        <group position={[0, 1.07, 0.14]}>
          {/* Keyboard chassis */}
          <mesh castShadow>
            <boxGeometry args={[0.46, 0.015, 0.18]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
          </mesh>
          {/* Keybed */}
          <mesh position={[-0.04, 0.01, 0]}>
            <boxGeometry args={[0.32, 0.01, 0.14]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
          {/* Optical Trackball / Mouse Unit */}
          <mesh position={[0.16, 0.015, 0]}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshStandardMaterial color="#0284c7" metalness={0.7} roughness={0.2} />
          </mesh>
        </group>

        {/* Intercom Microphone Stalk (For Patient Voice Guidance) */}
        <group position={[-0.32, 1.08, -0.08]}>
          <mesh material={chromeMetal}>
            <cylinderGeometry args={[0.006, 0.008, 0.28, 12]} rotation={[0.2, 0, 0.15]} />
          </mesh>
          <mesh position={[0.03, 0.27, -0.04]}>
            <sphereGeometry args={[0.016, 12, 12]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
        </group>

        {/* ALEXION HIGH-RESOLUTION WIDESCREEN LCD MONITOR */}
        <group position={[0, 1.38, -0.06]} rotation={[-0.08, -0.15, 0]}>
          {/* Heavy Base Stand */}
          <mesh position={[0, -0.3, 0]} material={darkPlinth}>
            <boxGeometry args={[0.24, 0.02, 0.22]} />
          </mesh>
          {/* Monitor Articulated Neck */}
          <mesh position={[0, -0.16, -0.03]} material={chromeMetal}>
            <boxGeometry args={[0.05, 0.28, 0.04]} />
          </mesh>

          {/* Monitor Enclosure Housing */}
          <mesh material={darkPlinth} castShadow>
            <boxGeometry args={[0.68, 0.44, 0.045]} />
          </mesh>
          {/* Screen Bezel Trim */}
          <mesh position={[0, 0, 0.022]}>
            <boxGeometry args={[0.66, 0.42, 0.004]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} />
          </mesh>
          {/* High-Resolution Screen Texture (Signature Alexion Blue Nebula + Telemetry) */}
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[0.62, 0.38]} />
            <meshBasicMaterial map={screenTex} />
          </mesh>
        </group>
      </group>

      {/* ===================================================================== */}
      {/* 4. FLOOR MEDICAL CALIBRATION RING & AMBIENT LASER GRID               */}
      {/* ===================================================================== */}
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 2.3, 64]} />
        <meshBasicMaterial color="#00a859" transparent opacity={0.2} />
      </mesh>
      <mesh position={[0, 0.004, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.9, 1.0, 48]} />
        <meshBasicMaterial color="#0284c7" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
