import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Floor from "./components/floor";
import Wall from "./components/wall";
import useDimensionStore from "./store/store";
import {
  Vector3,
  Matrix4,
  Box3,
  BoxHelper,
  Plane,
  PlaneHelperm,
  PlaneHelper,
} from "three";
import {
  Center,
  Cone,
  OrbitControls,
  PivotControls,
  Text,
  Html,
  useHelper,
} from "@react-three/drei";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";

const Room = ({ floorDimensions }) => {
  const wallsHeight = useDimensionStore((state) => state.wallsHeight);
  const floorX = Number(useDimensionStore((state) => state.floorX));
  const floorY = Number(useDimensionStore((state) => state.floorY));
  const thickness = Number(useDimensionStore((state) => state.thickness));
  const chairs = useDimensionStore((state) => state.chairs);
  const addChair = useDimensionStore((state) => state.addChair);
  const selectedFurniture = useDimensionStore(
    (state) => state.selectedFurniture,
  );
  const angle = Math.asin(
    floorX / Math.sqrt(Math.pow(floorX, 2) + Math.pow(floorY, 2)),
  );

  const v3 = new Vector3(1, 0, 0).applyAxisAngle(new Vector3(0, 1, 0), angle);
  const plane = new Plane(v3, 0);

  const wallsRestriction = useDimensionStore((state) => state.wallsResrticrion);

  const helper = new PlaneHelper(plane, wallsRestriction ? 100 : 0);
  // const [showWall,setShowWall] = useState([100,100,100,100])  // const [showWall,setShowWall] = useState([100,100,100,100])
  const addConeHandler = (e) => {
    e.stopPropagation();

    console.log("adding chair");

    chairs.length < 2 &&
      addChair({
        position: e.point,
        id: crypto.randomUUID(),
        type: selectedFurniture,
        dimensions: {},
      });
  };
  const { scene, camera } = useThree();
  let cam = camera.position.x;
  const wall1 = useRef();
  const wall2 = useRef();
  const wall3 = useRef();
  const wall4 = useRef();

  useFrame((_) => {
    // console.log()
    wall1.current.visible = camera.position.x > wall1.current.position.x;
    wall2.current.visible = camera.position.x < wall2.current.position.x;
    wall3.current.visible = camera.position.z < -wall3.current.position.y;
    wall4.current.visible = camera.position.z > -wall4.current.position.y;
  });
  useEffect(() => {
    console.log(angle);
    if (!wallsRestriction) {
      scene.children = scene.children.filter((el) => el.type != "PlaneHelper");
    } else {
      scene.children = scene.children.filter((el) => el.type != "PlaneHelper");

      scene.add(helper);
    }
    // console.log(scene)
  }, [wallsRestriction, angle]);

  return (
    <group
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={(e) => {
        console.log(e);
      }}
    >
      {/* <group rotation={[-Math.PI / 2, 0, -Math.PI / 4]}> */}
      <Floor data={floorDimensions} handler={addConeHandler} />

      <Wall
        // handler={addConeHandler}
        key={1}
        ref={wall1}
        geometry={[wallsHeight, floorY + thickness * 2, thickness]}
        position={[-floorX / 2 - thickness / 2, 0, wallsHeight / 2]}
        rotation={[0, Math.PI / 2, 0]}
        plane={plane}
      ></Wall>
      <Wall
        window={true}
        plane={plane}
        ref={wall2}
        // handler={addConeHandler}
        key={2}
        geometry={[wallsHeight, floorY + thickness * 2, thickness]}
        position={[floorX / 2 + thickness / 2, 0, wallsHeight / 2]}
        rotation={[0, -Math.PI / 2, 0]}
        ax={"x"}
      />

      <Wall
        plane={plane}
        ref={wall3}
        // handler={addConeHandler}
        key={3}
        geometry={[floorX + thickness * 2, wallsHeight, thickness]}
        position={[0, -floorY / 2 - thickness / 2, wallsHeight / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Wall
        plane={plane}
        ref={wall4}
        // handler={addConeHandler}
        key={4}
        geometry={[floorX + thickness * 2, wallsHeight, thickness]}
        position={[0, floorY / 2 + thickness / 2, wallsHeight / 2]}
        rotation={[Math.PI / 2, 0, 0]}
        ax={"y"}
      ></Wall>
    </group>
  );
};
export default Room;
