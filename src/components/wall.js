import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";

import {
  Vector3,
  BoxGeometry,
  Matrix4,
  Box3,
  BoxHelper,
  Plane,
  Matrix3,
  PlaneHelper,
  MeshBasicMaterial,
  QuadraticBezier,
  DoubleSide,
  CylinderGeometry,
  BackSide,
  FrontSide,
} from "three";
import React from "react";
import useDimensionStore from "../store/store";

const Wall = (props, ref) => {
  const wallsRestriction = useDimensionStore((state) => state.wallsResrticrion);

  // const ref = useRef();
  const ref2 = useRef();
  const refBox = useRef();
  const refBox1 = useRef();
  const door = new BoxGeometry();
  const bar = new BoxGeometry();
  const { scene, camera } = useThree();
  let cam = camera.position.x;

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
    <group ref={ref} position={props.position}>
      <mesh
        receiveShadow
        rotation={props.rotation}
        // position={props.position}
        onPointerDown={props.handler}
      >
        {props.window ? (
          <Geometry>
            <Base>
              <boxGeometry args={props.geometry} ref={refBox} />
            </Base>
            <Subtraction
              geometry={door}
              scale={[2.25, 1, 1]}
              position={[-0.24, 0, 0]}
            />
            <Addition
              geometry={bar}
              scale={[2.25, 0.1, 0.1]}
              position={[-0.14, 0, 0]}
            />
            <Addition
              geometry={bar}
              scale={[2.25, 0.1, 0.1]}
              position={[-0.15, 0.2, 0]}
            />
            <Addition
              geometry={bar}
              scale={[2.25, 0.1, 0.1]}
              position={[-0.15, 0.4, 0]}
            />
            <Addition
              geometry={bar}
              scale={[2.25, 0.1, 0.1]}
              position={[-0.15, -0.2, 0]}
            />
            <Addition
              geometry={bar}
              scale={[2.25, 0.1, 0.1]}
              position={[-0.15, -0.4, 0]}
            />
          </Geometry>
        ) : (
          <boxGeometry args={props.geometry} ref={refBox} />
        )}
        <meshStandardMaterial
          ref={ref2}
          color={props.color ? props.color : 0xf1f1f1}
        />
      </mesh>
    </group>
  );
};
export default React.forwardRef(Wall);

// cone.quaternion.setFromUnitVectors(
//   new THREE.Vector3(0, 1, 0),
//   intersects[0].normal
//     .clone()
//     .transformDirection(intersects[0].object.matrixWorld)
// );
