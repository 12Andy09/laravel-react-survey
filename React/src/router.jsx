import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Survey from "./views/Survey";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLaypot";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/surveys',
                element: <Survey/>
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
        ]
    }
])

export default router;