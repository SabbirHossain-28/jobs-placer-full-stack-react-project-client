import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import AddJob from "../Pages/AddJob/AddJob";
import MyAddedJobs from "../Pages/MyAddedJobs/MyAddedJobs";
import UpdateJobData from "../Pages/UpdateJobData/UpdateJobData";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AllJobs from "../Pages/AllJobs/AllJobs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path:"/allJobs",
        element:<AllJobs></AllJobs>
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_LOCAL_URL}/jobDetails/${params.id}`),
      },
      {
        path: "/addJob",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "myAddedJobs",
        element: (
          <PrivetRoute>
            <MyAddedJobs></MyAddedJobs>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateJobData/:id",
        element: (
          <PrivetRoute>
            <UpdateJobData></UpdateJobData>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_LOCAL_URL}/jobDetails/${params.id}`),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivetRoute>
            <AppliedJobs></AppliedJobs>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
