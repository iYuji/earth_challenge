import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { generateUUID } from "three/src/math/MathUtils.js";

function convertToLatLon(position: THREE.Vector3) {
  const normalized = position.clone().normalize();
  const lat = Math.fround(Math.asin(normalized.y) * (180 / Math.PI));
  let lon = Math.fround(
    Math.atan2(normalized.x, normalized.z) * (180 / Math.PI)
  );

  const offset = -90;
  lon = lon + offset;

  if (lon > 180) lon -= 360;
  if (lon < -180) lon += 360;

  return { lat, lon };
}

function generateGoogleMapsLink(lat: number, lon: number) {
  return `https://www.google.com/maps?q=${lat},${lon}`;
}

interface EarthGlobeProps {
  position: THREE.Vector3;
  raio: number;
  onLocationAdd: (location: string, link: string) => void;
  clearTrigger: boolean;
}

export function EarthGlobe({
  position,
  raio,
  onLocationAdd,
  clearTrigger,
}: EarthGlobeProps) {
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

  useEffect(() => {
    setPinPosition([]);
    setLocationCount(1);
  }, [clearTrigger]);

  return (
    <group position={position}>
      <group
        onPointerDown={(e) => {
          const newLocation = e.point;
          const { lat, lon } = convertToLatLon(newLocation);
          const mapsLink = generateGoogleMapsLink(lat, lon);

          setPinPosition((oldArray) => [...oldArray, newLocation]);
          onLocationAdd(`Localização ${locationCount}`, mapsLink);
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
