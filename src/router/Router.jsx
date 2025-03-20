import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetals/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplicaton from "../pages/myApplicaton/MyApplicaton";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Route not found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>,
                //  loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/myApplication',
                element: <PrivateRoute>
                    <MyApplicaton></MyApplicaton>
                </PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default Router