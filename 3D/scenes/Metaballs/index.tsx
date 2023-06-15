import {
  Bounds,
  Environment,
  Html,
  PerformanceMonitor,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import SimpleFrontalLights from "../../lighting/SimpleFrontalLights";
import Metaballs from "./Metaballs";
import { Suspense, useState } from "react";
import FineBase from "../MovingSquares/FineBase";
import isMobile from "@/utils/isMobile";

const MetaballsScene = () => {
  const [perfSucks, degrade] = useState(false);
  const scale = isMobile() ? 0.18 : 0.3;
  return (
    <Canvas
      dpr={[1, perfSucks ? 1.1 : 2]}
      camera={{ position: [0, 0, 5], fov: 25 }}
    >
      <PerformanceMonitor onDecline={() => degrade(true)} />

      <SimpleFrontalLights />
      <color attach="background" args={["white"]} />
      <ambientLight intensity={2} />
      <FineBase scale={[scale, scale, scale]} />
      {!isMobile() && (
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Metaballs />
          <Bounds fit clip observe margin={1}>
            <mesh visible={false}>
              <boxGeometry />
            </mesh>
          </Bounds>
          <Environment files="/old_depot_2k.hdr" />
        </Suspense>
      )}
    </Canvas>
  );
};

export default MetaballsScene;
