import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexs/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
  const {user, logOut} = useContext(AuthContext);
    const reviews = useLoaderData();
    const [displayReview, setDisplayReviews] = useState(reviews);

    // added route title
    useTitle('My Reviews');

    useEffect( () => {
      fetch(`https://service-review-server-lilac.vercel.app/reviews?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        if(res.status === 401 || res.status === 403){
          return logOut();
        }
        return res.json()
      })
      .then(data => (data))
    }, [user?.email, logOut])

    const handleDelete = id => {
      const procced = window.confirm('Are you sure? you want to delete this Review.');

      if(procced){
        fetch(`https://service-review-server-lilac.vercel.app/reviews/${id}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          
          const remainingReviews = displayReview.filter(review => review._id !== id);
          setDisplayReviews(remainingReviews);
          toast.success('Review Deleted successfully.');
        })
      }
    }

    return (
        <div className='container mx-auto my-20'>
            <h3 className='text-3xl font-bold pb-5'>Total Reviews: {displayReview.length}</h3>
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