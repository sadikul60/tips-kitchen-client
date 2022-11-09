import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const reviews = useLoaderData();

    return (
        <div className='container mx-auto my-20'>
            <h3 className='text-3xl font-bold pb-5'>Total Reviews: {reviews.length}</h3>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            
          </label>
        </th>
        <th>User Name</th>
        <th>Service</th>
        <th>message</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        reviews.length > 0 ?
        reviews.map(review => <ReviewRow
            key={review._id}
            review = {review}
        ></ReviewRow>)
        :
        <p>No Reviews were Added!</p>
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyReviews;