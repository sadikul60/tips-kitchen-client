import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);

    // added route title
    useTitle('Update Review');
    
    const handleUpdateReview = (event, id) => {
        event.preventDefault();

        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Review Updated successfully.');
                event.target.reset();
            }
            console.log(data);
        })

    }

    // handleOnChange
    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }
    
    return (
        <div className='container mx-auto my-20'>
            <div className="card w-11/12 lg:w-1/2 mx-auto shadow-2xl bg-slate-400">
                <h1 className="text-3xl font-bold pt-3">Update Review now!</h1>
                <form onSubmit={handleUpdateReview} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input onChange={handleChange} type="text" name='name' defaultValue={storedReview.name} placeholder="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input onChange={handleChange} type="text" name='photoURL' defaultValue={storedReview?.photoURL} placeholder="photoURL" readOnly className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={handleChange} type="email" name='email' defaultValue={storedReview?.email} placeholder="email" readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ServiceId</span>
                        </label>
                        <input onChange={handleChange} type="text" name='serviceId' defaultValue={storedReview?.serviceId} placeholder="serviceId" readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ServiceName</span>
                        </label>
                        <input onChange={handleChange} type="text" name='serviceName' defaultValue={storedReview?.serviceName} placeholder="service Name" readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea onChange={handleChange} name='message' defaultValue={storedReview?.message} className="textarea textarea-bordered" placeholder="message" required />
                    </div>
                    
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Update Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;