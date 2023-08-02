import DimensionsInput from "./dimensions";
import Switch from "./Switch"

const Controls =(props)=>{
    return <>
    <DimensionsInput handler = {props.handler}/>
    <Switch/>
    </>

}
export default Controls;