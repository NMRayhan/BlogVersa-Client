import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const SocialAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (error) {
        return toast.error(error.message)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button className='btn btn-secondary' onClick={() => signInWithGoogle()}>Continue with google</button>
        </div>
    );
};

export default SocialAuth;