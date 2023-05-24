import { useFrame } from "@react-three/fiber";
import { Depth, LayerMaterial, Noise } from "lamina";
import { useRef } from "react";
import { BackSide } from "three";

export default function NoisyBackground() {
  const ref = useRef(null);
  useFrame((state) => {
    //@ts-ignore
    if (!ref.current.layers) return;
    const sin = Math.sin(state.clock.elapsedTime / 2);
    const cos = Math.cos(state.clock.elapsedTime / 2);
    //@ts-ignore
    ref.current.layers[0].origin.set(cos / 2, 0, 0);
    //@ts-ignore
    ref.current.layers[1].origin.set(cos, sin, cos);
    //@ts-ignore
    ref.current.layers[2].origin.set(sin, cos, sin);
    //@ts-ignore
    ref.current.layers[3].origin.set(cos, sin, cos);
  });
  const gradient = 0.7;
  return (
    <mesh scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={BackSide} ref={ref}>
        <Depth
          colorA="#CCD9E8"
          colorB="black"
          alpha={1}
          mode="normal"
          near={0.5 * gradient}
          far={0.5}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA="#262526"
          colorB="#8E919E"
          alpha={1}
          mode="add"
          near={2 * gradient}
          far={2}
          origin={[0, 1, 1]}
        />
        <Depth
          colorA="#8F8D91"
          colorB="#D7D5DB"
          alpha={1}
          mode="add"
          near={3 * gradient}
          far={3}
          origin={[0, 1, -1]}
        />
        <Depth
          colorA="white"
          colorB="#332E33"
          alpha={1}
          mode="overlay"
          near={1.5 * gradient}
          far={1.5}
          origin={[1, -1, -1]}
        />

        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}
