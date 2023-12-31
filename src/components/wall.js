import {useFrame, useThree} from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  Vector3,
  Matrix4,
  Box3,
  BoxHelper,
  Plane,
  Matrix3,
  PlaneHelper,
  MeshBasicMaterial,
  QuadraticBezier,
  DoubleSide,
  BackSide,
  FrontSide,
} from "three";
import React from "react";
import useDimensionStore from "../store/store";

const Wall = (props,ref) => {
  const wallsRestriction = useDimensionStore((state) => state.wallsResrticrion);

  // const ref = useRef();
  const ref2 = useRef();
  const refBox = useRef();
  const {scene,camera} = useThree();
  let cam  = camera.position.x




  // useFrame(_=> {
  //   // console.log()
  //       if (cam != _.camera.position.x){
  //         cam = _.camera.position.x
  //         let obj ={
  //           x:cam,
  //           y:camera.position.y,
  //           z:camera.position.z
  //
  //         }
  //         console.log(obj)
  //         console.log(ref.current.position)
  //
  //       }
  //     }
  // )


  // const cp = new Plane(new Vector3(0.5, 0, -0.5), 0);
  // const ph = new PlaneHelper(cp,10)



  return (
    <group >
      { wallsRestriction &&

    <mesh rotation={props.rotation} position={props.position}>
        <boxGeometry args={props.geometry} />
        <meshBasicMaterial
          color={0xf1f1f1}
          side={DoubleSide}

          clippingPlanes={[props.plane]}
        />
      </mesh>}
      <mesh
          ref={ ref}
        rotation={props.rotation}
        position={props.position}
        onPointerDown={props.handler}
       
      >
        <boxGeometry args={props.geometry} ref={refBox} />

        <meshBasicMaterial
          ref={ref2}


          color={props.color ? props.color : 0xf1f1f1}
         clippingPlanes={wallsRestriction?[props.plane]:[]}
        />
       
      </mesh>
    </group>
  );
};
export default React.forwardRef( Wall);

// cone.quaternion.setFromUnitVectors(
//   new THREE.Vector3(0, 1, 0),
//   intersects[0].normal
//     .clone()
//     .transformDirection(intersects[0].object.matrixWorld)
// );
