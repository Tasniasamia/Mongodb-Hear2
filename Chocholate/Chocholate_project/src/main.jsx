import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Addchocholate from './Component/Addchocholate.jsx';
import UpdateChocholate from './Component/UpdateChocholate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },{
    path:"/Addcholate",
    element:<Addchocholate></Addchocholate>
  },{
    path:"/UpdateCholate/:id",
    element:<UpdateChocholate></UpdateChocholate>,
    loader:({params})=>fetch(`http://localhost:5700/chocholates/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />
 
);