
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'

import {loader as projectLoader} from "./Room";
import * as THREE from 'three';
import {extend,createRoot,events} from "@react-three/fiber";

extend(THREE);


const root = createRoot(document.querySelector('canvas'))
root.configure({ events, camera: { position: [0, 0, 50] } })
window.addEventListener('resize', () => {
    root.configure({ size: { width: window.innerWidth, height: window.innerHeight } })
})
window.dispatchEvent(new Event('resize'))



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        loader: projectLoader,


        children: [


            {
                element: <App/>,
                path: "/:projId",


            }]
    }
])


root.render(

        <RouterProvider router={router}/>

);