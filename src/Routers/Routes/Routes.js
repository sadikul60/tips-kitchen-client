import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import AddReviews from '../../Pages/AddReviews/AddReviews';
import AddServices from '../../Pages/AddServices/AddServices';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import UpdateReview from '../../Pages/MyReviews/UpdateReview';
import ServiceDetails from '../../Pages/Services/ServiceDetails';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRouter from '../PrivateRouter/PrivateRouter';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://service-review-server-lilac.vercel.app/services/limit')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://service-review-server-lilac.vercel.app/services')
            },
            {
                path: '/services/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://service-review-server-lilac.vercel.app/services/${params.id}`)
            },
            {
                path: '/services/review/:id',
                element: <AddReviews></AddReviews>,
                loader: ({params}) => fetch(`https://service-review-server-lilac.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>,
                loader: () => fetch('https://service-review-server-lilac.vercel.app/reviews')
            },
            {
                path: '/update/:id',
                element: <PrivateRouter><UpdateReview></UpdateReview></PrivateRouter>,
                loader: ({params}) => fetch(`https://service-review-server-lilac.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/add_services',
                element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
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