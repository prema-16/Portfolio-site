import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const AIAvatar = () => {
  const groupRef = useRef();
  const meshRef = useRef();
  const innerRef = useRef();
  const { viewport, size } = useThree();

  // Detect mobile: viewport width in world units shrinks on mobile
  const isMobile = size.width < 768;

  // On mobile: center the sphere and scale it down a bit
  // On desktop: keep it on the right side like before
  const posX = isMobile ? 0 : 3;
  const posY = isMobile ? 0.5 : 0;
  const posZ = isMobile ? 0 : -2;
  const sphereScale = isMobile ? 0.85 : 1.2;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // On mobile, no pointer tracking (touch doesn't have pointer coords)
    if (groupRef.current) {
      if (!isMobile) {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.pointer.y * Math.PI) / 4, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.pointer.x * Math.PI) / 4, 0.05);
      } else {
        // Slow auto-rotation on mobile
        groupRef.current.rotation.y = time * 0.3;
      }
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
        <group position={[posX, posY, posZ]}>
          <Icosahedron ref={meshRef} args={[1.5, 1]} scale={sphereScale}>
            <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.6} />
          </Icosahedron>

          <Sphere ref={innerRef} args={[1.2, 32, 32]} scale={sphereScale}>
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
