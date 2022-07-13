import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../common/Spinner/Spinner';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth)
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [displayName, setDisplayName] = useState("");

    if (loading || updating) {
        return <Spinner />;
    }
    if (error1 || error) {
        return toast.alert(error.message || error1.message);
    }

    const profileUpdate = (e) => {
        e.preventDefault();
        const CLIENT_API_KEY = `7e411a53cb33bd888f58071eabce8e4e`;
        const formData = new FormData();
        const imgURL = e.target.img.files[0];
        console.log(imgURL);
        formData.append("image", imgURL);
        const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then(async (result) => {
            if (result.success) {
              const photoURL = result.data.url;
              await updateProfile({ displayName, photoURL });
              toast.success("Updated profile");
            }
          });
      };

    return (
        <div className='min-h-screen'>
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="text-primary text-3xl">My Profile</h2>
                    <div className="avatar mt-10">
                        <div className="w-full rounded-full">
                            {user.photoURL !== null ? (
                                <img src={user.photoURL} alt={user.displayName} />
                            ) : (
                                <img src="https://i.ibb.co/56d3Hfw/images.png" alt="" />
                            )}
                        </div>
                    </div>
                    <h3 className="text-2xl font-light">
                        Display Name: <span className="text-2xl">{user?.displayName}</span>
                    </h3>
                    <h3 className="text-2xl font-light">
                        Email: <span className="text-2xl">{user?.email}</span>
                        <span className="text-xs text-red-500"> (unchangeable)</span>
                    </h3>
                </div>
                <div>
                    <form onSubmit={profileUpdate}>
                        <div className="form-control mt-5">
                            <input
                                type="text"
                                name="displayName"
                                className="input input-primary w-9/12"
                                placeholder="Display Name"
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                        </div>
                        <div className="form-control mt-5">
                            <textarea
                                name="userAddress"
                                placeholder="User Address"
                                cols="30"
                                rows="5"
                                className="textarea textarea-primary w-9/12"
                            ></textarea>
                        </div>
                        <div className="form-control mt-5">
                            <label className="label">Profile Picture</label>

                            <input
                                name="img"
                                type="file"
                                className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
                            />
                        </div>
                        <div className="flex items-center justify-center mt-5">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;