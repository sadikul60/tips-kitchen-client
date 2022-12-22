import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({service}) => {
    const {_id, img, name, price, description, ratings} = service;
    return (
        <div className="card w-full bg-slate-400 shadow-xl">
            <figure className="p-6">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" className="w-full h-48 rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body text-start">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg font-bold text-start'>Price: ${price}</p>
                <div className='flex justify-between'>
                    <p className='flex text-warning text-xl'> 
                        <HiStar />
                        <HiStar />
                        <HiStar />
                        <HiStar />
                        <HiStar />
                    </p>
                    <p className='text-center'>{ratings}k</p>
                </div>
                <p className='text-xl'>{description.slice(0, 100)}...</p>
                <div>
                <Link to={`/services/details/${_id}`}><button className="btn btn-primary mt-3 w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;