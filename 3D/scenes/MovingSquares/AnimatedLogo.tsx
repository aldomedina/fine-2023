import { useRef, useState } from "react";
import { Group, MathUtils } from "three";
import FineBase from "./FineBase";
import { GroupProps, useFrame } from "@react-three/fiber";
import isMobile from "@/utils/isMobile";

const QUANTITY = 30;
const TARGET_ROTATION = MathUtils.degToRad(45);
const SCALAR = -0.02;
const BASE_SPEED = 0.05;
const DELAY = 0.003;

interface MovingLogoProps extends GroupProps {
  delay: number;
}

const MovingLogo = ({ delay, ...props }: MovingLogoProps) => {
  const [isRotatingBack, setRotatingBack] = useState(false);
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (!ref.current) return;
    const cube = ref.current;
    if (!isRotatingBack) {
      if (cube.rotation.z < TARGET_ROTATION) {
        cube.rotation.z += BASE_SPEED * delay;
      } else {
        setRotatingBack(true);
      }
    } else {
      if (cube.rotation.z > TARGET_ROTATION * -1) {
        cube.rotation.z -= BASE_SPEED * delay;
      } else {
        setRotatingBack(false);
      }
    }
  });
  return (
    <group {...props} ref={ref}>
      <FineBase />
    </group>
  );
};
const BASE_SCALE = isMobile() ? 0.8 : 2;

const AnimatedLogo = () => (
  <>
    {Array(QUANTITY)
      .fill("")
      .map((_, i) => i)
      .map((i) => (
        <MovingLogo
          key={i}
          position={[0, 0, i * -0.02]}
          delay={i * DELAY}
          scale={[
            SCALAR * i + BASE_SCALE,
            SCALAR * i + BASE_SCALE,
            SCALAR * i + BASE_SCALE,
          ]}
        />
      ))}
  </>
);

export default AnimatedLogo;
