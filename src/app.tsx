import React from 'react';
import { Canvas } from '@react-three/fiber';
import { auto } from 'manate/react';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

const App = auto(() => {
  const { cubeInAir } = useControls({
    cubeInAir: false,
  });
  return (
    <Canvas camera={{ position: [0, 3, 3] }}>
      <OrbitControls />
      <ContactShadows />
      <directionalLight position={[5, 5, 5]} intensity={0.2} />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />
      <mesh rotation-y={Math.PI / 4} position-y={cubeInAir ? 1 : 0}>
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[1, 1, 1]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
});

export default App;
