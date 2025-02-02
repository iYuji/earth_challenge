import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { EarthGlobe } from "./components/EarthGlobe";
import { DayAndNight } from "./components/DayAndNight";
import { CameraControls } from "@react-three/drei";
import { useState } from "react";
import { Caixa } from "./components/Interface";

const App = () => {
  const [locations, setLocations] = useState<{name: string; link: string}[]>([]);

  const [clearTrigger, setClearTrigger] = useState(false);

  const addLocation = (name: string, link:string) => {
    setLocations((prevLocations) => [...prevLocations,{name,link}]);
  };
  const onClearPins = () => {
    setLocations([]);

    setClearTrigger((prev) => !prev);

  };

  return (
    <div>
      <Caixa locations={locations} onClearPins={onClearPins} />
      <Canvas>
        <CameraControls />
        <DayAndNight />
        <EarthGlobe
          position={new THREE.Vector3(0, 0, 0)}
          raio={2}
          onLocationAdd={addLocation}          
          clearTrigger={clearTrigger}
        />
      </Canvas>
    </div>
  );
};

export default App;
