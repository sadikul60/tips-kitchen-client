import React, { useContext } from 'react';
import { HiStar } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexs/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviesField from './ReviesField';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const {_id, img, name, price, description, ratings} = service;

    // added route title
    useTitle('Details');
    
    return (
        <div className='container mx-auto my-20'>
            <div className=' gap-12 items-center'>
                <div className="card w-11/12 lg:w-full mx-auto bg-slate-400 rounded-none shadow-xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <figure className="p-6">
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img src={img} alt="Shoes" className="w-full h-full rounded-xl" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body text-start">
                            <h2 className="text-3xl font-semibold">{name}</h2>
                            <p className='text-2xl font-bold text-start'>Price: ${price}</p>
                            <div className='flex justify-between items-center text-2xl'>
                                <p className='flex text-warning'> 
                                    <HiStar />
                                    <HiStar />
                                    <HiStar />
                                    <HiStar />
                                    <HiStar />
                                </p>
                                <p className='text-end font-bold'>{ratings}k</p>
                            </div>
                            <p className='text-xl mt-4'>{description}</p>
                            <div className="flex justify-between gap-4">
                                <Link to='/services' className='btn btn-primary mt-3 w-6/12'><button className="text-xl">Go Back</button></Link>
                                <Link to={`/services/review/${_id}`} className='btn btn-primary mt-3 w-6/12'><button className="text-xl">Add Review</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* review section  */}
                
            </div>
        </div>
    );
};

export default ServiceDetails;