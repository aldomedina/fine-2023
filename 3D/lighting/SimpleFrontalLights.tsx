import { useFrame, useThree } from "@react-three/fiber";
import { Group } from "three";
import React, { useRef } from "react";

const Lights = () => {
  const ref = useRef<Group>(null);
  useFrame((_) => {
    if (ref.current) ref.current.rotation.x = _.clock.elapsedTime;
  });

  return (
    <>
      <ambientLight intensity={0.4} />

      <spotLight
        penumbra={1}
        angle={1}
        castShadow
        position={[0, 0, 6]}
        intensity={1}
        shadow-mapSize={[512, 512]}
      />
    </>
  );
};

export default Lights;
