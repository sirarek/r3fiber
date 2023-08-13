import { Html } from "@react-three/drei"
import {useRef} from "react"
const FurnitureProperties = ({id,changeWidthHandler}) =>{
	const ref = useRef();
	return(
		<Html position={[0, 4, 0]} className="text-id">
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
