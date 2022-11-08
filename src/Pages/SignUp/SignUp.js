import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/sign-up.png'
import { AuthContext } from '../../contexs/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            handleUpdateProfile(name);
            form.reset();
        })
        .catch(err => console.log(err))
    }

    const handleUpdateProfile = (name) => {
        const profile = {
            displayName: name
        }

        updateUserProfile(profile)
        .then(result => { })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="hero bg-base-200 py-20">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="text-center lg:text-left">
                        <img className='md:w-3/4 mx-auto rounded-lg' src={img} alt="" />
                    </div>
                    <div className="card w-full shadow-2xl bg-slate-400">
                    <h1 className="text-3xl font-bold pt-3">Sign Up now!</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Have an account? <Link to='/login' className="link link-hover text-primary font-bold">Login</Link></p>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;