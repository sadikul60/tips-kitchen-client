import React from 'react';


const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
                <img src={image} alt='' className="w-full" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-40 top-1/2">
                    <h1 className='text-5xl text-center animate-bounce text-orange-600 font-bold'>
                    <span className='text-primary text-6xl font-bold'>W</span>elcome! To <br /> 
                    Tips <span className='text-primary text-6xl font-bold'>K</span>itchen</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
                <a href={`#slide${prev}`} className="btn btn-circle btn-primary mr-4">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle btn-primary">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;