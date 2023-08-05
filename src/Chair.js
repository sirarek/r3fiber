import { useLayoutEffect, useMemo, useRef, useState, } from "react";
import ChairModel from "./components/chairModel";

import useDimensionStore from "./store/store";
import {
  Center,
  Cone,
  OrbitControls,
  PivotControls,
  Text,
  Html,
  useHelper,
  
} from "@react-three/drei";
import { Vector3, Matrix4, Box3,BoxHelper} from "three";
import { useFrame } from '@react-three/fiber'
import CabinetModel from "./components/CabinetModel";



const Chair = (props) => {
  const setClickedChair = useDimensionStore((state) => state.clickChair);
  const ref = useRef();
  const chairRef = useRef();

  const floorX = useDimensionStore((state) => state.floorX);
  const floorY = useDimensionStore((state) => state.floorY);
  const clickedChair = useDimensionStore((state) => state.clickedChair);
  // const camHandler = useDimensionStore(
  //   (state) => state.setCameraControlsAcitve
  // );
  const bbox = new Box3();
  const bbox1 = new Box3();
  const min = new Vector3(-floorX / 2, 0, -floorY / 2);
  const max = new Vector3(floorX / 2, 0, floorY / 2);
  const d= new Box3(min,max);
  const _tmp = new Vector3();
  let current = new Vector3();

  const chairOnClick = (d) => {
    d.stopPropagation();
    setClickedChair(d.eventObject.userData.id);
    console.log("elo");
  };
  const mtrx = useMemo(() => {
    const pos = props.position.clone().clamp(min, max);
    return new Matrix4().setPosition(pos.x, pos.y, pos.z);
  }, [props.position]);

  const bnd = useRef(new Vector3());

  const matrix = useRef(mtrx);
  const isChairActive = props.id === clickedChair;

  useLayoutEffect(()=>{

    bbox.setFromObject(chairRef.current)
    bbox.getSize(bnd.current)
    bnd.current.multiplyScalar(0.5).negate().setY(0);
  
  },[props])
  useLayoutEffect(()=>{
    bbox.setFromObject(chairRef.current)
        bbox.getSize(bnd.current);
        bnd.current.multiplyScalar(0.5).negate().setY(0);
        bbox1.copy(d).expandByVector(bnd.current);
        const m = matrix.current
        const newPos= _tmp.set(m.elements[12], 0, m.elements[14]).clamp(bbox1.min, bbox1.max);
        m.setPosition(newPos);
        matrix.current.copy(m);
  
  },[d])
useHelper(chairRef,BoxHelper,"red")

  return (
    <PivotControls
      fixed={true}
      anchor={[0,0,0]}
      ref={ref}
      matrix={matrix.current}
      activeAxes={[isChairActive, false, isChairActive]}
      // autoTransform={props.id === clickedChair}
      visible={props.id === clickedChair}
      scale={100}
      onDrag={(m, dl, w, dw) => {
        // camHandler(false)
        // current.set(m.elements[12], 0, m.elements[14]);
        // const x = _tmp.set(m.elements[12], 0, m.elements[14]).clamp(min, max);
        // m.setPosition(x);
        // ref.current.matrix.copy(m);
        if(!matrix.current) return;
        bbox.setFromObject(chairRef.current)
        bbox.getSize(bnd.current);
        bnd.current.multiplyScalar(0.5).negate().setY(0);
        bbox1.copy(d).expandByVector(bnd.current);

        const newPos= _tmp.set(m.elements[12], 0, m.elements[14]).clamp(bbox1.min, bbox1.max);
        m.setPosition(newPos);
        matrix.current.copy(m);
        // curMtrx = m.elements;
        // console.log(curMtrx);
      }}
      // onDragStart={camHandler(false)}

    ><group  ref={chairRef}>
      <Center disableY>
        {isChairActive && (
          <Html position={[0, 1, 0]} className="text-id">
              {/*TODO: styling size change*/}
              <label for={props.id}>width
              <input id={props.id} type={"text"}/>
              </label>
            {/*{props.id.toString().slice(0, 4)}*/}
          </Html>
        )}
        <ChairModel onClick={chairOnClick} id={props.id} />


      </Center></group>
    </PivotControls>
  );
};

export default Chair;
