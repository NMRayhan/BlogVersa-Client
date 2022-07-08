import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user);
    return (
        <div>
            <button className='btn btn-secondary' onClick={() => signInWithGoogle()}>Continue with google</button>
        </div>
    );
};

export default SocialAuth;