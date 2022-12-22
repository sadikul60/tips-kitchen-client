import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexs/AuthProvider/AuthProvider';
import ReviesField from '../Services/ReviesField';

const AddReviews = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();

    return (
        <div className='w-11/12 md:w-3/4 lg:w-1/2 mx-auto'>
            <div className='my-20'>
                {
                    user?.uid ?
                    <ReviesField
                        service = {service}
                    ></ReviesField>
                    :
                    <div className='flex w-11/12 lg:w-full h-96 mx-auto justify-center items-center bg-slate-400 p-3 shadow-2xl rounded-xl'>
                        <p className='text-sm md:text-2xl lg:text-3xl font-bold'>Please login to add a Review <Link to ='/login'><button className='btn btn-primary'>Login</button></Link></p>
                    </div>
                }    
            </div> 
        </div>
    );
};

export default AddReviews;