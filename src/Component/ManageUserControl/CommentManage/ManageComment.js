import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useQuery } from 'react-query';
import Spinner from '../../common/Spinner/Spinner';
import { toast } from 'react-toastify';
import CommentRow from './CommentRow';
import DeleteCommentConfirm from './DeleteCommentConfirm';

const ManageComment = () => {
    const [user, loading, error] = useAuthState(auth);
    const [commentDetails, setCommentDetails] = useState(null);
    const url = `https://obscure-fjord-00550.herokuapp.com/commentbyUser/${user?.email}`
    const {
        isLoading,
        error2,
        refetch,
        data } = useQuery('repoData', () =>
            fetch(url, {
                method: "GET"
            }).then(res =>
                res.json()
            ))

    if (isLoading || loading) {
        return <Spinner />
    }

    if (error || error2) {
        return toast.error(error.message || error2.message)
    }
    return (
        <div className="min-h-screen">
            <h1>Manage User comment {data.length}</h1>
            <div className='overflow-x-auto'>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Comment</th>
                            <th>Blog Title</th>
                            <th>Take Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((comment, index) => <CommentRow
                                key={comment._id}
                                index={index}
                                commentDetails={comment}
                                setCommentDetails={setCommentDetails}
                            />)
                        }
                    </tbody>
                </table>
                {commentDetails && (
                    <DeleteCommentConfirm
                        key={commentDetails._id}
                        commentDetails={commentDetails}
                        refetch={refetch}
                        setCommentDetails={setCommentDetails}
                    />
                )}
            </div>
        </div>
    );
};

export default ManageComment;