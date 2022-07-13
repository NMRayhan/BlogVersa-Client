import React, { useRef, useState } from 'react';
import SocialAuth from '../SocialAuth/SocialAuth';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Spinner from '../../common/Spinner/Spinner';

const Registration = () => {
    const [displayName, setDisplayName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading, error1] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const handleUserRegistration = async (event) => {
        event.preventDefault();
        await updateProfile({ displayName })
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error1 || error2) {
        const error = error1 || error2
        toast.error(error.message)
    }

    if (loading || updating) {
        return <Spinner/>
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-96 max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-2xl font-semibold'>Registration User</h3>
                        <form onSubmit={handleUserRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Display Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered" />
                            </div>
                            <div>
                                <label className='label'>
                                    <p>I Have an account, <Link to='/login' className='label-text text-primary link link-hover'>Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Registration" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <SocialAuth />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;