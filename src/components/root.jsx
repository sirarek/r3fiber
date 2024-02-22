import * as THREE from 'three';
import {extend,createRoot,events} from "@react-three/fiber";
import App from "../App";

extend(THREE);


const root = createRoot(document.querySelector('canvas'))
root.configure({ events, camera: { position: [0, 0, 50] } })
window.addEventListener('resize', () => {
    root.configure({ size: { width: window.innerWidth, height: window.innerHeight } })
})
window.dispatchEvent(new Event('resize'))

root.render(<App />)