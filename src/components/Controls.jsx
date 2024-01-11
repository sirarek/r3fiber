import DimensionsInput from "./dimensions";
import Switch from "./Switch"
import ItemSelector from "./itemSelector";
import ProjectSelector from "./ProjectSelector";



const Controls =(props)=>{

    return <>
    <DimensionsInput handler = {props.handler}/>
        <ItemSelector/>
        <ProjectSelector/>
    <Switch/>

    </>

}
export default Controls;