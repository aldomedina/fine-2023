import { Environment, OrbitControls, Reflector } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedLogo from "./AnimatedLogo";
import { degToRad } from "three/src/math/MathUtils";
import Lights from "./Lights";
import { Suspense } from "react";

const MovingSquares = () => {
  return (
    <Canvas shadows>
      <OrbitControls />

      <group>
        <AnimatedLogo />
      </group>
      <Suspense fallback={null}>
        <Lights />
        {/* 
        <spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
        <Environment preset="warehouse" /> */}
      </Suspense>
    </Canvas>
  );
};

export default MovingSquares;
