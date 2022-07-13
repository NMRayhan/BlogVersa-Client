import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spiner from '../../common/Spiner/Spiner';
import SocialAuth from '../SocialAuth/SocialAuth';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmitLoginInfo = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
        event.target.reset();
    }

    if (user) {
        navigate(from, { replace: true });
      }

    if (loading) {
        return <Spiner />
    }

    if (error) {
        toast.error(error.message)
    }

    return (
        <div className=''>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-96 max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h3 className='text-2xl font-semibold'>Login Now</h3>
                            <form onSubmit={handleSubmitLoginInfo}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div>
                                    <label className='label'>
                                        <p>Have no account, Please <Link to='/registration' className='label-text text-primary link link-hover'>Register</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Login" />
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <SocialAuth />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;