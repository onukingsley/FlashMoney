import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'

import './index.css'
import Layout from "./layouts/layout";
import App from "./App.jsx";
import route from "./router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={route} />

  </StrictMode>
)
