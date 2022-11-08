import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import ServiceDetails from '../../Pages/Services/ServiceDetails';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])

export default routes;