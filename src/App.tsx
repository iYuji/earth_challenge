import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { EarthGlobe } from "./components/EarthGlobe";
import { DayAndNight } from "./components/DayAndNight";
import { CameraControls } from "@react-three/drei";
import { Caixa } from "./components/Interface";

const App = () => {
  return (
    <div>
      <Caixa />
      <Canvas>
        <CameraControls />
        <DayAndNight />
        <EarthGlobe position={new THREE.Vector3(0, 0, 0)} raio={2} />
      </Canvas>
    </div>
  );
};

export default App;
