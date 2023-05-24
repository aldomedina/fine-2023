import { Environment, OrbitControls, Reflector } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedLogo from "./AnimatedLogo";
import { degToRad } from "three/src/math/MathUtils";
import SimpleFrontalLights from "../../lighting/SimpleFrontalLights";
import { Suspense } from "react";

const MovingSquares = () => {
  return (
    <Canvas shadows>
      <OrbitControls />
      <SimpleFrontalLights />
      <AnimatedLogo />
    </Canvas>
  );
};

export default MovingSquares;
