import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../common/Spinner/Spinner';
import BlogRow from './BlogRow';
import { useQuery } from 'react-query';
import DeleteConfirm from './DeleteConfirm';
import UpdateBlog from './UpdateBlog';

const ManageBlogs = () => {
    const [productDetails, setProductDetails] = useState(null);
    const [user, loading, error] = useAuthState(auth);

    const {
        isLoading,
        error2,
        refetch,
        data
    } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/userBlogs/${user?.email}`, {
            method: "GET"
        }).then(res =>
            res.json()
        ))

    if (loading || isLoading) {
        return <Spinner />
    }

    if (error || error2) {
        toast.error(error.message || error2.message)
    }

    return (
        <div className="min-h-screen">
            <h2 className="text-primary text-2xl my-2">Your Total Blog : {data.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Blog Type</th>
                            <th>Take Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((blog, index) => <BlogRow
                                key={blog._id}
                                index={index}
                                blogDetails={blog}
                                setProductDetails={setProductDetails}
                            />)
                        }
                    </tbody>
                </table>
                {productDetails && (
                    <DeleteConfirm
                        blogDetails={productDetails}
                        key={productDetails._id}
                        refetch={refetch}
                        setProductDetails={setProductDetails}
                    />
                )}
                {productDetails && (
                    <UpdateBlog
                        blogDetails={productDetails}
                        key={productDetails._id}
                        refetch={refetch}
                        setProductDetails={setProductDetails}
                    />
                )}
            </div>
        </div>
    );
};

export default ManageBlogs;