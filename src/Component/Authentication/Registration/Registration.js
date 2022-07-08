import React from 'react';
import SocialAuth from '../SocialAuth/SocialAuth';
import { Link } from "react-router-dom"

const Registration = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-96 max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-2xl font-semibold'>Registration User</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Display Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Password" className="input input-bordered" />
                        </div>
                        <div>
                            <label className='label'>
                                <p>I Have an account, <Link to='/login' className='label-text text-primary link link-hover'>Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <div class="divider">OR</div>
                        <SocialAuth />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;