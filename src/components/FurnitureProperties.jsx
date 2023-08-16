import { Html } from "@react-three/drei"
import {useRef,useState, useLayoutEffect} from "react"
import useDimensionStore from "../store/store"
const FurnitureProperties = ({id,changeWidthHandler,data}) =>{

	const closeHandler =useDimensionStore(state =>state.clickChair)
	const htmlRef = useRef();
	const ref = useRef();
	 const [currentDimension, setCurrentDimension] = useState({
    depth: 1,
    width: 1,
    height: 1,
  });
	const handleClickOutside = (event) => {
		if (htmlRef.current && !htmlRef.current.contains(event.target)) {
			closeHandler("");
		}
	};

	useLayoutEffect(() => {
		console.log("hyh");
	console.log(data)
		if(data.morphTargetInfluences){
			console.log("if")
		 setCurrentDimension((prevDimension) => ({
        ...prevDimension,
        width: data.morphTargetInfluences[data.morphTargetDictionary["width"]],
        height: data.morphTargetInfluences[data.morphTargetDictionary["height"]],
        depth: data.morphTargetInfluences[data.morphTargetDictionary["depth"]],
      }));
		}else{
			console.log("else")
			setCurrentDimension((prevDimension) => ({
        ...prevDimension,
        depth: data.scale.z,
        width: data.scale.x,
        height: data.scale.y,
      }));		}
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [data]);
	return(
		<Html position={[0, 4, 0]} className="text-id"  ref={htmlRef}>
		<div id="close-button" onClick={()=>{closeHandler("")}}>X</div>
		<label htmlFor="width"> width
		<input ref={ref} className="width-input"id={id} type={"number"} max={5} defaultValue={currentDimension.width}  onChange={(e)=>changeWidthHandler(e,'width')} />
		</label>  
		<label htmlFor="height"> height
		<input className="width-input"id={id} type={"number"} max={5}  defaultValue={currentDimension.height}  onChange={(e)=>changeWidthHandler(e,'height')} />
		</label>  <label htmlFor="width"> depth

		<input className="width-input"id={id+"depth"} type={"number"} max={5}  defaultValue={currentDimension.depth} onChange={(e)=>changeWidthHandler(e,'depth')} />
		</label>
		{/*{id.toString().slice(0, 4)}*/}
		</Html>

	)
}

export default FurnitureProperties
