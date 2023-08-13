const FurnitureProperties = props =>{
	return(
		<Html position={[0, 2, 0]} className="text-id">

		<label htmlFor="width"> width
		<input className="width-input"id={props.id} type={"number"} max={5} onFocus={()=>{setFocus(true)}} onBlur={isActiveHandler}  onChange={changeWidthHandler} />
		</label>  
		<label htmlFor="height"> height
		<input className="width-input"id={props.id} type={"number"} max={5} onFocus={()=>{setFocus(true)}} onBlur={isActiveHandler}  onChange={changeWidthHandler} />
		</label>  <label htmlFor="width"> depth

		<input className="width-input"id={props.id+"depth"} type={"number"} max={5} onFocus={()=>{setFocus(true)}} onBlur={isActiveHandler}  onChange={changeWidthHandler} />
		</label>
		{/*{props.id.toString().slice(0, 4)}*/}
		</Html>

	)
}

export default FurnitureProperties
