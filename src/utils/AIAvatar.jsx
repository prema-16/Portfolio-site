import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const AIAvatar = () => {
  const groupRef = useRef();
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smoothly follow pointer
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.pointer.y * Math.PI) / 4, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.pointer.x * Math.PI) / 4, 0.05);
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.4;
      innerRef.current.rotation.y = -time * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Positioned towards the right side to balance Hero section */}
        <group position={[3, 0, -2]}>
          <Icosahedron ref={meshRef} args={[1.5, 1]} scale={1.2}>
            <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.6} />
          </Icosahedron>

          <Sphere ref={innerRef} args={[1.2, 32, 32]}>
            <MeshDistortMaterial
              color="#111111"
              attach="material"
              distort={0.35}
              speed={1.5}
              roughness={0.1}
              metalness={0.9}
              emissive="#FF6B00"
              emissiveIntensity={0.4}
              transparent
              opacity={0.95}
            />
          </Sphere>
          
          <pointLight color="#FF6B00" intensity={2.5} distance={10} />
        </group>
      </Float>
    </group>
  );
};

export default AIAvatar;
