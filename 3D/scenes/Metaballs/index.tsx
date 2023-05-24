import { Bounds, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import SimpleFrontalLights from "../../lighting/SimpleFrontalLights";
import Metaballs from "./Metaballs";
import { Suspense } from "react";
import FineBase from "../MovingSquares/FineBase";
import isMobile from "@/utils/isMobile";

const MetaballsScene = () => {
  const scale = isMobile() ? 0.18 : 0.3;
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 25 }}>
      <SimpleFrontalLights />
      <color attach="background" args={["white"]} />
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <FineBase scale={[scale, scale, scale]} />
        <Metaballs />
        <Bounds fit clip observe margin={1}>
          <mesh visible={false}>
            <boxGeometry />
          </mesh>
        </Bounds>
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
};

export default MetaballsScene;
