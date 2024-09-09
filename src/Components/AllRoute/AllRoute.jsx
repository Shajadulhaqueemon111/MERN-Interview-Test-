
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Error from "../ErrorPage/Error";
import Home from "../HomePage/Home";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;
  
