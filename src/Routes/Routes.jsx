import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import AddJob from "../Pages/AddJob/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader:({params})=>fetch(`${import.meta.env.VITE_LOCAL_URL}/jobDetails/${params.id}`),
      },
      {
        path:"/addJob",
        element:<PrivetRoute>
            <AddJob></AddJob>
        </PrivetRoute>
      }
    ],
  },
]);

export default router;
