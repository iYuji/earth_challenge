import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { generateUUID } from "three/src/math/MathUtils.js";

interface EarthGlobeProps {
  position: THREE.Vector3;
  raio: number;
  onLocationAdd: (location: string) => void;
  onClearPins?: () => void;
}

export function EarthGlobe({ position, raio, onLocationAdd }: EarthGlobeProps) {
  const ref = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const starsRef = useRef<THREE.Mesh>(null);

  const texture = useLoader(TextureLoader, "./globe_texture.png");
  const cloudTexture = useLoader(TextureLoader, "./cloud_texture.png");
  const starTexture = useLoader(TextureLoader, "./stars_texture.jpg");

  useFrame(() => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.001;
    }
  });

  const [pinPosition, setPinPosition] = useState<THREE.Vector3[]>([]);
  const [locationCount, setLocationCount] = useState(1);

  return (
    <group position={position}>
      <group
        onPointerDown={(e) => {
          const newLocation = e.point;
          setPinPosition((oldArray) => [...oldArray, newLocation]);
          onLocationAdd(`Localização ${locationCount}`);
          setLocationCount((prevCount) => prevCount + 1);
        }}
      >
        <mesh position={position} ref={ref}>
          <sphereGeometry args={[raio]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        {pinPosition.map((mapLocal) => {
          return (
            <mesh position={mapLocal} ref={ref} key={generateUUID()}>
              <sphereGeometry args={[raio - 1.98]} />
              <meshBasicMaterial color={"red"} />
            </mesh>
          );
        })}
      </group>

      <mesh position={position} ref={cloudsRef}>
        <sphereGeometry args={[raio + 0.01]} />
        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh position={position} ref={starsRef}>
        <sphereGeometry args={[raio + 5]} />
        <meshBasicMaterial
          map={starTexture}
          side={THREE.BackSide}
          color={new THREE.Color(0xaaaaaa)}
        />
      </mesh>
    </group>
  );
}
