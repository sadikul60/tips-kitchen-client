import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import review1 from '../../../assets/review1.png'
import review2 from '../../../assets/review2.png'
import review3 from '../../../assets/review3.png'

const ClientFeedback = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold pb-5'>Some Client Feedback</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
                <div className='px-6 shadow-xl rounded-xl'>
                    <img src={review1} alt="" />
                    <div className='flex text-2xl font-semibold mt-6 justify-between items-center'>
                        <h4 className=''>Hi!</h4>
                        <div className='flex text-yellow-500'>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        </div>
                    </div>
                    <p className='text-xl pb-8 font-bold text-start'>
                        I am Chitti. At first take my salam. Hope everyone is well.
                        I basically love to cook different types of food. And they reach you.
                        Hope you like my services. And pray that I can give you something new like this.
                        I hope you will always be by my side.</p>
                </div>
                <div className='px-6 shadow-xl rounded-xl'>
                    <img src={review2} alt="" />
                    <div className='flex text-2xl font-semibold mt-6 justify-between items-center'>
                        <h4 className=''>Hi!</h4>
                        <div className='flex text-yellow-500'>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        </div>
                    </div>
                    <p className='text-xl pb-8 font-bold text-start'>
                        I am Rita. At first take my salam. Hope everyone is well.
                        I basically love to cook different types of food. And they reach you.
                        Hope you like my services. And pray that I can give you something new like this.
                        I hope you will always be by my side.</p>
                </div>
                <div className='px-6 shadow-xl rounded-xl'>
                    <img src={review3} alt="" />
                    <div className='flex text-2xl font-semibold mt-6 justify-between items-center'>
                        <h4 className=''>Hi!</h4>
                        <div className='flex text-yellow-500'>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        </div>
                    </div>
                    <p className='text-xl pb-8 font-bold text-start'>
                        I am Rony. At first take my salam. Hope everyone is well.
                        I basically love to cook different types of food. And they reach you.
                        Hope you like my services. And pray that I can give you something new like this.
                        I hope you will always be by my side.</p>
                </div>
            </div>
            <Link ><button className='btn btn-primary mt-12'>See More</button></Link>
        </div>
    );
};

export default ClientFeedback;