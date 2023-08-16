import { Html } from "@react-three/drei"
import {useRef, useEffect} from "react"
import useDimensionStore from "../store/store"
const FurnitureProperties = ({id,changeWidthHandler}) =>{

	const closeHandler =useDimensionStore(state =>state.clickChair)
	const htmlRef = useRef();
	const ref = useRef();
	 const handleClickOutside = (event) => {
    if (htmlRef.current && !htmlRef.current.contains(event.target)) {
      closeHandler("");
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
	return(
		<Html position={[0, 4, 0]} className="text-id" ref={htmlRef}>
		<div id="close-button" onClick={()=>{closeHandler("")}}>X</div>
		<label htmlFor="width"> width
		<input ref={ref} className="width-input"id={id} type={"number"} max={5}   onChange={(e)=>changeWidthHandler(e,'width')} />
		</label>  
		<label htmlFor="height"> height
		<input className="width-input"id={id} type={"number"} max={5}    onChange={(e)=>changeWidthHandler(e,'height')} />
		</label>  <label htmlFor="width"> depth

		<input className="width-input"id={id+"depth"} type={"number"} max={5}    onChange={(e)=>changeWidthHandler(e,'depth')} />
		</label>
		{/*{id.toString().slice(0, 4)}*/}
		</Html>

	)
}

export default FurnitureProperties
