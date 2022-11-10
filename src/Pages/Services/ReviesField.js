import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexs/AuthProvider/AuthProvider';

const ReviesField = ({service}) => {
    const {user} = useContext(AuthContext);
    const { _id, name } = service;

    const handleReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const serviceId = form.serviceId.value;
        const serviceName = form.serviceName.value;
        const message = form.message.value;
        // console.log(name, photoURL, email, serviceId, message, serviceName);

        const reviews = {
            name,
            photoURL,
            email,
            serviceId,
            serviceName,
            message
        }

        fetch('https://service-review-server-lilac.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Review Added successfully.');
                form.reset();
            }
            console.log(data);
        })

    }
    return (
        <div className="card w-11/12 lg:w-full mx-auto shadow-2xl bg-slate-400">
            <h1 className="text-3xl font-bold pt-3">Review now!</h1>
                <form onSubmit={handleReview} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name='photoURL' defaultValue={user?.photoURL} placeholder="photoURL" readOnly className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ServiceId</span>
                        </label>
                        <input type="text" name='serviceId' defaultValue={_id} placeholder="serviceId" readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ServiceName</span>
                        </label>
                        <input type="text" name='serviceName' defaultValue={name} placeholder="service Name" readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name='message' className="textarea textarea-bordered" placeholder="message" required />
                    </div>
                    
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Add Review</button>
                    </div>
                </form>
        </div>
    );
};

export default ReviesField;