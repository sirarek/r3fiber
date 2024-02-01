import React from 'react';
import {useThree} from "@react-three/fiber";
import {Html} from "@react-three/drei";

function SaveAsScreenshotButton(props) {
    const {gl,scene, camera } = useThree();
    function handleClick (){
        console.log(gl);
        gl.render(scene, camera)
        const screenshot = gl.domElement.toDataURL()
        const link = document.createElement('a')
        link.setAttribute('download', 'canvas.png')
        link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
        link.click()


    }
    return (<Html>
        <button className={"screen-shot-save"} onClick={handleClick} type={"button"}>Save as a screenshot</button>
        </Html>
    );
}

export default SaveAsScreenshotButton;