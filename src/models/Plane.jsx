import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
