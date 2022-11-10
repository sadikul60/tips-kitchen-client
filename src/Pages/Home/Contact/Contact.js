import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img from '../../../assets/contact.png';
import img2 from '../../../assets/contacts/phone.png';
import img3 from '../../../assets/contacts/gmail.png';
import img4 from '../../../assets/contacts/fb.png';

const Contact = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold pb-5'>Contact Me</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 bg-slate-400 shadow-xl rounded-xl items-center'>
                <div className='p-5 lg:p-12'>
                    <h1 className='text-2xl text-primary animate-pulse font-bold mb-3'>Choose option</h1>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full' src={img2} alt="" />
                        <p className='p-4 lg:text-xl font-bold'>01708******</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full' src={img3} alt="" />
                        <p className='p-4 lg:text-xl font-bold'>anisuddin@gmail.com</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full' src={img4} alt="" />
                        <p className='p-4 lg:text-xl font-bold'>https://www.facebook.com/</p>
                    </div>
                </div>
                <div>
                    <img className='className="w-full rounded-xl' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;