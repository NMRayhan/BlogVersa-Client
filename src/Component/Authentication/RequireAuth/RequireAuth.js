import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../common/Spinner/Spinner';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Spinner/>
    }
    if (!user) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    return children;
};

export default RequireAuth;