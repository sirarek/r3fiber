import {createRoot,} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import React from "react";

    import {loader as projectLoader} from "./Room";
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            loader:projectLoader,


            children:[



         {     element: <App/>,
             path: "/:projId",


         }]}
    ])

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);