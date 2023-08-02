import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ChairModel = (props) => {
  const onClickHandler = props.onClick;
  const gltf = useLoader(GLTFLoader, "/chair.glb");
  const scene = useMemo(() => gltf.scene.clone(true), []);

  return (
    <primitive
      object={scene}
      scale={1}
      position={props.position}
      matrix={props.matrix}
      onClick={onClickHandler}
      userData={{ id: props.id }}
    />
  );
};

export default ChairModel;
