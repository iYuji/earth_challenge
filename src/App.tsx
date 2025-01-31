import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { EarthGlobe } from "./components/EarthGlobe";
import { DayAndNight } from "./components/DayAndNight";
import { CameraControls } from "@react-three/drei";
import { useState } from "react";
import { Caixa } from "./components/Interface";

const App = () => {
  const [locations, setLocations] = useState<string[]>([]);

  const addLocation = (location: string) => {
    setLocations((prevLocations) => [...prevLocations, location]);
  };

  return (
    <div>
      <Caixa locations={locations} />
      <Canvas>
        <CameraControls />
        <DayAndNight />
        <EarthGlobe
          position={new THREE.Vector3(0, 0, 0)}
          raio={2}
          onLocationAdd={addLocation}
        />
      </Canvas>
    </div>
  );
};

export default App;
