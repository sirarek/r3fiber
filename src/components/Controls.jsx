import DimensionsInput from "./dimensions";
import Switch from "./Switch"
import ItemSelector from "./itemSelector";
import ProjectSelector from "./ProjectSelector";
import SaveIButton from "./SaveIButton";



const Controls =(props)=>{

    return <>
    <DimensionsInput handler = {props.handler}/>
        <ItemSelector/>
        <ProjectSelector/>
        <SaveIButton/>
    <Switch/>

    </>

}
export default Controls;