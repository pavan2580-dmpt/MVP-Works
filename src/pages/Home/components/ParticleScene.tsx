import React, { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// @ts-ignore - Font JSON import
import helvetikerFont from 'three/examples/fonts/helvetiker_bold.typeface.json?url';

// 1. Extend Three.js with TextGeometry so R3F can use it
extend({ TextGeometry });

/**
 * Procedurally generates a soft glow texture for the particles
 * so we don't need to load external images.
 */
const createGlowTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(0, 255, 255, 1)'); // Cyan core
  gradient.addColorStop(0.5, 'rgba(0, 100, 255, 0.2)'); // Blue glow
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

const ParticleText = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();
  const font = new FontLoader().parse(helvetikerFont);
  
  // Configuration
  const PARTICLE_SIZE = 0.15;
  const TEXT = "MVP Works";
  const REPULSION_RADIUS = 3;
  const REPULSION_STRENGTH = 4;
  const RETURN_SPEED = 0.08; // How fast they reform
  
  // 2. Generate the text geometry to get vertex positions
  const { particles, initialPositions } = useMemo(() => {
    const textGeo = new TextGeometry(TEXT, {
      font: font,
      size: 2,
      height: 0, // Flat text
      curveSegments: 12,
      bevelEnabled: false,
    });
    // Center the text
    textGeo.computeBoundingBox();
    const centerOffset = -0.5 * (textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x);
    const centerY = -0.5 * (textGeo.boundingBox!.max.y - textGeo.boundingBox!.min.y);
    textGeo.translate(centerOffset, centerY, 0);
    // Extract vertices
    const posAttribute = textGeo.attributes.position;
    const count = posAttribute.count;
    
    // Create arrays for our particle system
    const positions = new Float32Array(count * 3); // Current positions
    const targets = new Float32Array(count * 3);   // Target text positions
    
    for (let i = 0; i < count; i++) {
      // Get target position from text geometry
      const tx = posAttribute.getX(i);
      const ty = posAttribute.getY(i);
      const tz = posAttribute.getZ(i);
      // Store target
      targets[i * 3] = tx;
      targets[i * 3 + 1] = ty;
      targets[i * 3 + 2] = tz;
      // Set initial position (randomly scattered around screen)
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return { 
      particles: positions, 
      initialPositions: targets,
      count 
    };
  }, [font]);
  const glowTexture = useMemo(() => createGlowTexture(), []);
  
  // 3. Animation Loop
  useFrame((state) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime();
    // Map mouse to 3D world space (approximate at z=0)
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    for (let i = 0; i < particles.length / 3; i++) {
      const i3 = i * 3;
      
      // Current positions
      let px = positions[i3];
      let py = positions[i3 + 1];
      let pz = positions[i3 + 2];
      
      // Target positions
      const tx = initialPositions[i3];
      const ty = initialPositions[i3 + 1];
      const tz = initialPositions[i3 + 2];
      // A. Calculate Physics
      
      // 1. Distance to Mouse
      const dx = mouseX - px;
      const dy = mouseY - py;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      let forceX = 0;
      let forceY = 0;
      let forceZ = 0;
      // 2. Mouse Repulsion (The "Antigravity" effect)
      if (dist < REPULSION_RADIUS) {
        const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
        // Push away from mouse
        forceX -= (dx / dist) * force;
        forceY -= (dy / dist) * force;
        forceZ -= Math.random() * force * 0.5; // Slight Z scatter
      }
      // 3. Gentle Sine Wave Noise (Floating effect)
      const noiseX = Math.sin(time * 0.5 + py * 0.5) * 0.02;
      const noiseY = Math.cos(time * 0.3 + px * 0.5) * 0.02;
      // 4. Return to Target (Lerp)
      // We add the force to the target position, then lerp current pos towards that
      const targetX = tx + forceX + noiseX;
      const targetY = ty + forceY + noiseY;
      const targetZ = tz + forceZ;
      // Smoothly interpolate current position to target
      px += (targetX - px) * RETURN_SPEED;
      py += (targetY - py) * RETURN_SPEED;
      pz += (targetZ - pz) * RETURN_SPEED;
      // Update array
      positions[i3] = px;
      positions[i3 + 1] = py;
      positions[i3 + 2] = pz;
    }
    // Tell Three.js the positions have changed
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={glowTexture}
        size={PARTICLE_SIZE}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.9}
        color="#00ffff" // Neon Blue
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const ParticleScene = () => {
  return (
    <div className="w-full h-[80vh] bg-slate-950">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* Ambient light for subtle depth if we used meshes, but optional for PointsMaterial */}
        <ambientLight intensity={0.5} />
        
        {/* The Particle System */}
        <ParticleText />
        
      </Canvas>
    </div>
  );
};

export default ParticleScene;

