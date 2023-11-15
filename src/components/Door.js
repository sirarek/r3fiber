import { BoxGeometry } from "three";
const Door = (props) => {
  return (
    <mesh position={props.position}>
      <boxGeometry args={props.geo} />

      <meshPhysicalMaterial
        transparent
        transmission={0.7}
        color={0xaac8e6}
        roughness={0.5}
      />
    </mesh>
  );
};
export default Door;
