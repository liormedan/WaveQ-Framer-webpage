"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const CONNECTION_DISTANCE = 1.5;

// Responsive particle count
function getParticleCount() {
  if (typeof window === "undefined") return 800;
  const width = window.innerWidth;
  if (width < 768) return 300; // Mobile
  if (width < 1024) return 500; // Tablet
  return 800; // Desktop
}

export default function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null);
  const connectionsRef = useRef<THREE.LineSegments>(null);
  const [particleCount, setParticleCount] = useState(800);
  
  // Get mouse from useThree - this hook only works inside Canvas
  const { mouse } = useThree();

  useEffect(() => {
    setParticleCount(getParticleCount());
    const handleResize = () => setParticleCount(getParticleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate particle positions
  const { positions, connections } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const connections: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }

    return { positions, connections };
  }, [particleCount]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const time = state.clock.elapsedTime;
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    // Animate particles with smooth movement
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const offset = i * 0.01;
      positions[i3] += Math.sin(time * 0.5 + offset) * 0.001;
      positions[i3 + 1] += Math.cos(time * 0.5 + offset) * 0.001;
      positions[i3 + 2] += Math.sin(time * 0.3 + offset) * 0.001;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;

    // Rotate based on mouse position (subtle)
    particlesRef.current.rotation.x += (mouse.y * 0.1 - particlesRef.current.rotation.x) * 0.05;
    particlesRef.current.rotation.y += (mouse.x * 0.1 - particlesRef.current.rotation.y) * 0.05;
  });

  // Generate connections between nearby particles
  const connectionGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const connectionPositions: number[] = [];
    
    // Use initial positions for connections (simplified for performance)
    const maxConnections = Math.min(particleCount, 150);
    for (let i = 0; i < maxConnections; i++) {
      for (let j = i + 1; j < maxConnections; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < CONNECTION_DISTANCE) {
          connectionPositions.push(
            positions[i3],
            positions[i3 + 1],
            positions[i3 + 2],
            positions[j3],
            positions[j3 + 1],
            positions[j3 + 2]
          );
        }
      }
    }

    if (connectionPositions.length > 0) {
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(connectionPositions), 3)
      );
    }

    return geometry;
  }, [particleCount, positions]);

  return (
    <>
      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#ffffff"
          transparent
          opacity={1}
          sizeAttenuation={false}
        />
      </points>

      {/* Connections */}
      <lineSegments ref={connectionsRef}>
        <primitive object={connectionGeometry} />
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.4}
          linewidth={2}
        />
      </lineSegments>
    </>
  );
}

