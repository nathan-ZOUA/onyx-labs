import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function OnyxSculpture({ theme, scrollProgress = 0 }) {
  const groupRef = useRef();
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const pointerX = state.pointer.x * 0.35;
    const pointerY = state.pointer.y * 0.25;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      t * 0.18 + pointerX + scrollProgress * Math.PI,
      0.06
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointerY + scrollProgress * 0.4,
      0.06
    );

    if (coreRef.current) {
      coreRef.current.rotation.z = -t * 0.12;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.25;
      ring2Ref.current.rotation.z = t * 0.18;
    }
  });

  const isDark = theme === 'dark';

  return (
    <group ref={groupRef}>
      <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.6}>
        {/* Noyau central en Onyx facetté */}
        <mesh ref={coreRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color={isDark ? '#0B0E17' : '#1E293B'}
            metalness={0.92}
            roughness={0.14}
          />
        </mesh>

        {/* Cage géométrique externe en métal poli */}
        <mesh scale={1.52}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color={isDark ? '#8B5CF6' : '#7357E8'}
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>

        {/* Anneaux gyroscopiques orbitaux */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.15, 0.028, 24, 120]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.55, 0.02, 24, 120]} />
          <meshStandardMaterial
            color="#35D9D0"
            emissive="#35D9D0"
            emissiveIntensity={0.7}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </Float>

      <Sparkles
        count={70}
        scale={7}
        size={1.8}
        speed={0.35}
        color={isDark ? '#35D9D0' : '#7357E8'}
      />
    </group>
  );
}

export default function OnyxHeroScene({ theme = 'dark', scrollProgress = 0 }) {
  return (
    <div className="w-full h-full relative" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.5 : 1.1} />
        <pointLight position={[5, 4, 4]} intensity={3.2} color="#8B5CF6" />
        <pointLight position={[-5, -3, 3]} intensity={2.8} color="#35D9D0" />
        <directionalLight position={[0, 6, 2]} intensity={1.2} color="#FFFFFF" />
        <OnyxSculpture theme={theme} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
