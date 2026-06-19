import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, Box, Octahedron, Float } from '@react-three/drei';

const Shape = ({ component: Component, position, color, speed, rotationIntensity, scale }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01 * speed;
      ref.current.rotation.y += 0.015 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={2}>
      <Component ref={ref} position={position} scale={scale}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} wireframe={true} />
      </Component>
    </Float>
  );
};

const Floating3DShapes = ({ isMobile = false }) => {
  // On mobile: bring shapes closer to center so they're visible
  // On desktop: spread them to the edges like before
  const shapes = useMemo(() => {
    if (isMobile) {
      return [
        { type: TorusKnot, pos: [-2.5, 2.5, -4], color: '#00D9FF', scale: 0.35, speed: 1.5 },
        { type: Box, pos: [2.5, -2, -5], color: '#FF4DA6', scale: 0.5, speed: 1.2 },
        { type: Octahedron, pos: [-2, -3, -3], color: '#8B5CF6', scale: 0.4, speed: 2 },
        { type: TorusKnot, pos: [3, 2.5, -6], color: '#00D9FF', scale: 0.25, speed: 1 },
      ];
    }
    return [
      { type: TorusKnot, pos: [-5, 3, -4], color: '#00D9FF', scale: 0.5, speed: 1.5 },
      { type: Box, pos: [4, -3, -5], color: '#FF4DA6', scale: 0.8, speed: 1.2 },
      { type: Octahedron, pos: [-4, -4, -3], color: '#8B5CF6', scale: 0.6, speed: 2 },
      { type: TorusKnot, pos: [6, 4, -6], color: '#00D9FF', scale: 0.4, speed: 1 },
      { type: Box, pos: [-6, 0, -8], color: '#FF4DA6', scale: 1, speed: 0.8 },
    ];
  }, [isMobile]);

  return (
    <group>
      {shapes.map((shape, i) => (
        <Shape
          key={i}
          component={shape.type}
          position={shape.pos}
          color={shape.color}
          scale={shape.scale}
          speed={shape.speed}
          rotationIntensity={2}
        />
      ))}
    </group>
  );
};

export default Floating3DShapes;
