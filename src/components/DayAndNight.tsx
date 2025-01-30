import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const DayAndNight = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(Date.now() * 0.0002) * 5;
      lightRef.current.position.z = Math.cos(Date.now() * 0.0002) * 5;
      lightRef.current.position.y = Math.sin(Date.now() * 0.0002) * 2;
    }
  });

  return <directionalLight ref={lightRef} intensity={3} />;
};
