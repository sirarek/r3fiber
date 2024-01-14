import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'

import {loader as projectLoader} from "./Room";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        loader:projectLoader,
        children:[


     {
         path: "/:projId",
        element: <App/>,

     }]}
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
