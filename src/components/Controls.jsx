import DimensionsInput from "./dimensions";
import Switch from "./Switch"
import ItemSelector from "./itemSelector";

const Controls =(props)=>{
    return <>
    <DimensionsInput handler = {props.handler}/>
        <ItemSelector/>
    <Switch/>

    </>

}
export default Controls;