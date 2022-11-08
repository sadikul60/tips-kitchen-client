import React from 'react';
import img1 from '../../../assets/banner/banner1.png'
import img2 from '../../../assets/banner/banner2.png'
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
          image: img1,
          prev: 2,
          id: 1,
          next: 2
        },
        {
          image: img2,
          prev: 1,
          id: 2,
          next: 1
        },
      ]
    return (
        <div className="carousel w-full h-96">
             
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide = {slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;