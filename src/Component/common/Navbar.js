import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">BlogVersa</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Nur Mohammad Rayhan
                                    </a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div> 
        </div>
    );
};

export default Navbar;