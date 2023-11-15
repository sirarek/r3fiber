import { BoxGeometry } from "three";
const Door = (props) => {
  return (
    <mesh>
      <boxGeometry args={props.geo} />

      <meshPhysicalMaterial transparent transmission={0.2} color={0xaac8e6} />
    </mesh>
  );
};
export default Door;
