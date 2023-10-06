import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Kick from "./Kick.js";
import Toyota from "./Toyota.js";
import Kotak from "./Kotak.js";
import Car from "./Car.js";

import { OrbitControls } from "@react-three/drei/OrbitControls";
import "./styles.css";

export default function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Car />
        </Suspense>
      </Canvas>
    </>
  );
}
