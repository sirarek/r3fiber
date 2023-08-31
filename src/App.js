import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState, useContext, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Floor from "./components/floor";
import Mline from "./components/MLine";
import {debounce} from "throttle-debounce"
 
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Wall from "./components/wall";
import Lights from "./components/Lights";
import * as THREE from "three";
import DimensionsInput from "./components/dimensions";
import Slider from "./components/slider";
import {
  Cone,
  CameraControls,
  PivotControls,
  Text,
  Environment,
 
} from "@react-three/drei";
import useDimensionStore from "./store/store";
import { Vector3, Quaternion, Box3,Sphere } from "three";
import ChairModel from "./components/chairModel";
import Room from "./Room";
import Controls from "./components/Controls";
import Chair from "./Chair";
import Chairss from "./Chairss";
import CameraControl from "./components/CameraContro";

import TestBox from "./Box";
const log = (c) => {
  console.log(c);
};

function App() {
  
  const [floorDimensions, setFloorDimensions] = useState({ x: 5, y: 5 });
  // const [acitvePivot, setActivePivot] = useState(false);
  // const [background,   
  
  // const isCameraControlsActive = useDimensionStore(
  //   (state) => state.cameraControlsAcitve
  // );


  return (
    <>
      <Controls handler={setFloorDimensions} />
      <Slider />
      <Canvas
    shadows
        // style={{ background: `#${background.toString(16)}` }}
        // onKeyDown={(e) => {
        //   return e.code == "Escape" ? setActivePivot(false) : false;
        // }}
        tabIndex={0}
        camera={{
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.01,
          far: 10000,
          position: [0, -10, 0],
        }}
        gl={{localClippingEnabled:true}}
    ><Environment preset="apartment"/>
        <Mline/>
        <Room />
              <Chairss />
        {/* <TestBox></TestBox> */}
       <CameraControl/>
        <Lights />
      </Canvas>
    </>
  );
}
export default App;


