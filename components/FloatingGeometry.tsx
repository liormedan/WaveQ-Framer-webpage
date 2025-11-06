"use client";

import { Float } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function FloatingGeometry() {
  const materialProps = {
    color: "#ffffff",
    emissive: "#ffffff",
    emissiveIntensity: 0.6,
    transparent: true,
    opacity: 0.7,
    metalness: 0.8,
    roughness: 0.2,
  };

  return (
    <>
      {/* Floating Cube */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={0.5}
      >
        <mesh position={[2, 0, -1]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      </Float>

      {/* Floating Sphere */}
      <Float
        speed={1.5}
        rotationIntensity={0.8}
        floatIntensity={0.4}
      >
        <mesh position={[-2, 0, -1]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      </Float>

      {/* Floating Torus */}
      <Float
        speed={2.5}
        rotationIntensity={1.2}
        floatIntensity={0.6}
      >
        <mesh position={[0, 1, -2]}>
          <torusGeometry args={[1, 0.5, 16, 100]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      </Float>
    </>
  );
}

