import { BoxGeometry } from "three";
const Door = (props) => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />

      <meshPhysicalMaterial wireframe={true} />
    </mesh>
  );
};
export default Door;
