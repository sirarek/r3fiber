import { useRef } from "react"
import { PointLightHelper } from "three"
import { useHelper } from "@react-three/drei"


const Lights = () => {

    const light = useRef()
    useHelper(light,PointLightHelper, 0.5,'black')
    return  (<pointLight intensity={1} position={[0,2.2,0]} ref={light} castShadow/>)

}
export default Lights