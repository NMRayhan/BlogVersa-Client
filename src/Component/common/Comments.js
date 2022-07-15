import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = (props) => {
    const _id = props.blogId;
    const [userComments, setUserComments] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/comments/${_id}`
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(data => setUserComments(data))
    }, [_id])
    return (
        <div>
            {
                userComments.map(comment => <Comment commentDetails={comment} key={comment._id} />)
            }
        </div>
    );
};

export default Comments;