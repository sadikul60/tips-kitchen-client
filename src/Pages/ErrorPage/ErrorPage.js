import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/errorPage.png';

const ErrorPage = () => {
    return (
        <div className='py-12'>
            <div>
                <img className='w-3/12 mx-auto' src={image} alt="" />
            </div>
            <h2 className='text-6xl text-cyan-700 font-bold animate-bounce'>404</h2>
            <p className='text-3xl font-bold'>Sorry, Page not found.</p>
            <Link to='/'><button className='btn btn-primary mt-4'>Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;