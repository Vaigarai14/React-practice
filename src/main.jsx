import React from "react";
import ReactDOM from "react-dom/client"
import '../src/style.css';
import Header from "./Components/Header";
import Body from "./Components/Body"
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Restauranteachitem } from "./Components/Restauranteachitem";

const roots = ReactDOM.createRoot(document.getElementById('root'))


let App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "restaurant/:resId",
                element: <Restauranteachitem />
            }
        ]
    }
])

roots.render(< RouterProvider router={Router} />);