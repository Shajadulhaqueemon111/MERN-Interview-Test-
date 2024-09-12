
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Error from "../ErrorPage/Error";
import Home from "../HomePage/Home";
import DrawingsList from "../DraingList/DrawingList";
import DrawingPage from "../DrawingPage/DrawingPage";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/',
          element:<DrawingsList></DrawingsList>
        },
        {
          path:'/drawing/:id',
          element:<DrawingPage></DrawingPage>
        },
      ]
    },
  ]);

  export default router;
  
