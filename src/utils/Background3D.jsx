import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import AIAvatar from './AIAvatar';
import Floating3DShapes from './Floating3DShapes';

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF6B00" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#FFFFFF" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <AIAvatar />
        <Floating3DShapes />
      </Canvas>
    </div>
  );
};

export default Background3D;
