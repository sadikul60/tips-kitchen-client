import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import review1 from '../../../assets/review1.png'
import review2 from '../../../assets/review2.png'
import review3 from '../../../assets/review3.png'

const RegularCustomer = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold pb-5'>My Regular Customer</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
                <div className='card-two px-6 shadow-xl rounded-xl'>
                    <img className='py-4' src={review1} alt="" />
                    <div className='font-semibold mt-6'>
                        <div className='text-center'>
                            <h5 className='text-2xl'>Chitti</h5>
                            <p className='text-xl mb-20'>Kolkata, India</p>
                        </div>
                    </div>
                </div>
                <div className='card-two px-6 shadow-xl rounded-xl'>
                    <img className='py-4' src={review2} alt="" />
                    <div className='font-semibold mt-6'>
                        <div className='text-center'>
                            <h5 className='text-2xl'>Rita</h5>
                            <p className='text-xl mb-20'>New Dilhi, India</p>
                        </div>
                    </div>
                </div>
                <div className=' card-two px-6 shadow-xl rounded-xl'>
                    <img className=' py-4' src={review3} alt="" />
                    <div className='font-semibold mt-6'>
                        <div className='text-center'>
                            <h5 className='text-2xl'>Rony</h5>
                            <p className='text-xl mb-20'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to=''><button className='text-xl btn btn-primary mt-12'>See More</button></Link>
        </div>
    );
};

export default RegularCustomer;