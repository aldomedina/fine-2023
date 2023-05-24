//@ts-nocheck
import * as THREE from "three";

import {
  MarchingCubes,
  MeshTransmissionMaterial,
  MarchingCube,
} from "@react-three/drei";
import { Color, useFrame } from "@react-three/fiber";
import {
  BallCollider,
  Physics,
  RigidBody,
  RigidBodyOptions,
} from "@react-three/rapier";
import React, { useRef } from "react";
const colors = ["#65394f", "#9f448a", "#ff156a", "#d4c900", "#dee0d3"];
interface MetaballProps {
  color: Color;
}
function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ pointer, viewport }) => {
    if (!ref.current) return;
    const { width, height } = viewport.getCurrentViewport();
    vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0);
    ref.current.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube strength={0.5} subtract={10} color="yellow" />
      <mesh>
        <sphereGeometry args={[0.04]} />
        <meshBasicMaterial color="black" toneMapped={false} />
      </mesh>
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}

function MetaBall({
  color,
  vec = new THREE.Vector3(),
  ...props
}: MetaballProps) {
  const api = useRef(null);
  useFrame((state, delta) => {
    if (!api.current) return;
    delta = Math.min(delta, 0.1);
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiplyScalar(delta * -0.05)
    );
  });

  return (
    <RigidBody
      ref={api}
      colliders={false}
      linearDamping={4}
      angularDamping={0.95}
      {...props}
    >
      <MarchingCube strength={0.35} subtract={6} color={color} />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}

const Metaballs = () => {
  return (
    <Physics gravity={[0, 2, 0]}>
      <MarchingCubes
        resolution={80}
        maxPolyCount={10000}
        enableUvs={false}
        enableColors
      >
        <MeshTransmissionMaterial
          vertexColors
          transmissionSampler
          transmission={0.925}
          thickness={0.15}
          roughness={0.1}
          chromaticAberration={0.5}
          anisotropy={0.5}
          envMapIntensity={0.5}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          toneMapped={true}
        />
        {/* <MetaBall color="red" position={[1, 1, 0.5]} />*/}
        <MetaBall color={colors[0]} position={[-1, -1, -0.5]} />
        <MetaBall color={colors[1]} position={[2, 2, 0.5]} />
        <MetaBall color={colors[2]} position={[-2, -2, -0.5]} />
        <MetaBall color={colors[3]} position={[3, 3, 0.5]} />
        <MetaBall color={colors[4]} position={[-3, -3, -0.5]} />
        <Pointer />
      </MarchingCubes>
    </Physics>
  );
};

export default Metaballs;
