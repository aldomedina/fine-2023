import NoisyBackground from "@/3D/backgrounds/NoisyBackground";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const MovingSquares = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0] }}>
      <OrbitControls />
      <NoisyBackground />
    </Canvas>
  );
};

export default MovingSquares;
