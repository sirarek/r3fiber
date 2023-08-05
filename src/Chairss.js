import { Cone, OrbitControls, PivotControls, Text } from "@react-three/drei";
import useDimensionStore from "./store/store";
import { Vector3, Quaternion } from "three";
import Chair from "./Chair";
import React, {  Suspense } from "react";

const Chairss = (props) => {
  const chairs = useDimensionStore((state) => state.chairs);
  console.log(chairs)
  return chairs.map((el, i) => {

    return (
      <Suspense>
        
      <Chair position={el.position} id={el.id}  key={i} type={el.type}></Chair>
      </Suspense>

    );
  });
};

export default Chairss;
