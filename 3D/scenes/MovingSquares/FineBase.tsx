import {
  Edges,
  GradientTexture,
  Svg,
  Text3D,
  useGLTF,
} from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Box3, Mesh, Vector3, Object3D } from "three";

const colors = ["#65394f", "#9f448a", "#ff156a", "#d4c900", "#dee0d3"];
const FineBase = (props: GroupProps) => {
  const ref = useRef<Mesh>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.geometry.computeBoundingBox();
    const bbox = ref.current.geometry.boundingBox;
    if (bbox?.max.x)
      ref.current.position.x = ref.current.position.x - bbox?.max.x / 2;
  }, [ref.current]);

  return (
    <group {...props}>
      <Text3D
        ref={ref}
        height={0.005}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1}
        font={"/syne1.json"}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial>
          <GradientTexture
            stops={[0.2, 0.4, 0.6, 0.8, 1]}
            colors={colors}
            size={1024}
          />
        </meshStandardMaterial>
        FINE
      </Text3D>
    </group>
  );
};

export default FineBase;

// const FineBase = () => {
//     const { nodes, scene } = useGLTF("/models/fine3.glb");

//     if (!nodes) return null;
//     return (
//       <group rotation={[MathUtils.degToRad(90), 0, 0]}>
//         {nodeNames.map((el) => (
//           <mesh
//             key={nodes[el].name}
//             geometry={nodes[el].geometry}
//             castShadow
//             receiveShadow
//           >
//             <meshBasicMaterial>
//               <GradientTexture
//                 stops={[0, 1]} // As many stops as you want
//                 colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
//                 size={1024} // Size is optional, default = 1024
//               />
//             </meshBasicMaterial>
//             <Edges
//               scale={1}
//               // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
//               color="red"
//             />
//           </mesh>
//         ))}
//       </group>
//     );
//   };
