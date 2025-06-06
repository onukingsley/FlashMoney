import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Layout from "./layouts/layout";
import Index from "./pages";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout/> ,
        children: [
            {
                path: '/index',
                child: <Index/>
            },

        ]
    }
])

export default route;