import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import AIAvatar from './AIAvatar';
import Floating3DShapes from './Floating3DShapes';

const Background3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // On mobile: pull camera back a little (z=9) and widen FOV to show full scene
  // On desktop: keep original tight view
  const cameraConfig = isMobile
    ? { position: [0, 0, 9], fov: 75 }
    : { position: [0, 0, 8], fov: 60 };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={cameraConfig}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF6B00" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#FFFFFF" />

        <Stars radius={100} depth={50} count={isMobile ? 1500 : 3000} factor={4} saturation={0} fade speed={1} />

        <AIAvatar />
        <Floating3DShapes isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default Background3D;
