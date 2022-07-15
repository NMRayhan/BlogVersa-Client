import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import Spinner from './Spinner/Spinner';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    if (loading) {
        return <Spinner />
    }
    if (error) {
        toast.error(error.message)
    }
    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost normal-case text-xl">BlogVersa</Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered focus:outline-none" />
                        </div>
                        {
                            user == null ? (<Link to="/login" className='btn btn-secondary'>Login</Link>) : (<div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.providerData[0]?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li ><Link to="/dashboard">Manage User Control</Link></li>
                                    <li onClick={() => logout()}><a>Logout</a></li>
                                </ul>
                            </div>)
                        }

                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Navbar;