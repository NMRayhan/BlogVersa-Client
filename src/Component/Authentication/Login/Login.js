import React from 'react';
import {Link} from "react-router-dom"
import SocialAuth from '../SocialAuth/SocialAuth';

const Login = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-96 max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h3 className='text-2xl font-semibold'>Login Now</h3>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div class="divider">OR</div>
                            <SocialAuth/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;