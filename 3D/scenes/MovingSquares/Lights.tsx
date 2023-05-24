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
      {/* <group ref={ref}>
        <rectAreaLight
          width={15}
          height={100}
          position={[30, 30, -10]}
          intensity={0.1}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </group> */}
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
