import React from 'react';
import img from '../../../assets/serviceman.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const About = () => {
    return (
        <div className=''>
            <h1 className='text-3xl font-bold pb-5'>About Me</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 bg-slate-400 shadow-xl rounded-xl items-center'>
                <div>
                    <PhotoProvider>
                        <PhotoView src={img} >
                            <div >
                                <img className='className="w-full rounded-xl' src={img} alt="" />
                            </div>
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-3'>Hello Friends!</h1>
                    <p className='text-xl font-bold p-8 text-start'>
                        I am Anis Uddin. At first take my salam. Hope everyone is well.
                        I basically love to cook different types of food. And they reach you.
                        Hope you like my services. And pray that I can give you something new like this.
                        I hope you will always be by my side.</p>
                </div>
            </div>
        </div>
    );
};

export default About;