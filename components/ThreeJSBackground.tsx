"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import ParticleSystem from "./ParticleSystem";
import FloatingGeometry from "./FloatingGeometry";

export default function ThreeJSBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Fallback background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          alpha: false, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        style={{ 
          width: '100%', 
          height: '100%',
          display: 'block'
        }}
      >
        <color attach="background" args={['#0a0a0a']} />
        <Suspense fallback={null}>
          {/* Stars background */}
          <Stars 
            radius={500} 
            depth={100} 
            count={3000} 
            factor={8} 
            saturation={1}
            fade={false}
          />
          
          {/* Particle System */}
          <ParticleSystem />
          
          {/* Floating Geometries */}
          <FloatingGeometry />
          
          {/* Orbit Controls - subtle mouse interaction */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          {/* Lighting */}
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

