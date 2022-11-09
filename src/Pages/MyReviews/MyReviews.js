import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const reviews = useLoaderData();
    const [displayReview, setDisplayReviews] = useState(reviews);

    // added route title
    useTitle('My Reviews');

    const handleDelete = id => {
      const procced = window.confirm('Are you sure? you want to delete this Review.');

      if(procced){
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          
          const remainingReviews = displayReview.filter(review => review._id !== id);
          setDisplayReviews(remainingReviews);
          toast.success('Review Deleted successfully.');
          console.log(data);
        })
      }
    }

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
        displayReview.map(review => <ReviewRow
            key={review._id}
            review = {review}
            handleDelete = {handleDelete}
        ></ReviewRow>)
        :
        <p className='text-2xl font-bold p-12'>No Reviews were Added!</p>
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyReviews;