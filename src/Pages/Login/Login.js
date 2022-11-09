import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexs/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const {login, GoogleSignIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    useTitle("Login")

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('Login successfully.');
            navigate(from, {replace: true});
        })
        .catch(err => console.error(err))
    }

    // googleSignUp
    const handleGoogleLogIn = () => {
        GoogleSignIn(googleProvider)
        .then(result => {
            const user = result.user;
            toast.success('Sign Up successfully.');
            navigate(from, {replace: true});
        })
        .then(err => console.error(err))
    }
    return (
        <div className=''>
            <div className="hero bg-base-200 py-20">
                <div className="hero-content">
                    <div className="card w-full shadow-2xl bg-slate-400">
                    <h1 className="text-3xl font-bold pt-3">Login now!</h1>
                        <form onSubmit={handleSignIn} className="card-body">
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
                                <p>New to site? <Link to='/signup' className="link link-hover text-primary font-bold">Sign Up</Link></p>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="form-control mx-8 mt-3 mb-6">
                            <button onClick={handleGoogleLogIn} className="btn btn-primary"><FaGoogle className='mr-2' /> Google Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;