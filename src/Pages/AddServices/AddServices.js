import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add_Service');

    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const img = form.img.value;
        const description = form.description.value;
        
        console.log(name, price, ratings, img, description);

        const service = {
            name,
            price,
            ratings,
            img,
            description
        }

        fetch('https://service-review-server-lilac.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Service Added successfully.');
                form.reset();
            }
            console.log(data);
        })

    }
    return (
        <div className='container mx-auto my-20'>
            <div className="card w-11/12 lg:w-1/2 mx-auto shadow-2xl bg-slate-400">
                <h1 className="text-3xl font-bold pt-3">Add Service now!</h1>
                <form onSubmit={handleAddService} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='name' placeholder="service name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <input type="text" name='price' placeholder="service price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name='ratings' placeholder="ratings"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="text" name='img'  placeholder="service image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="service description" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Update Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;