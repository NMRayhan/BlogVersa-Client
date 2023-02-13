import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = (props) => {
    const _id = props.blogId;
    const [userComments, setUserComments] = useState([])
    useEffect(() => {
        const url = `https://obscure-fjord-00550.herokuapp.com/comments/${_id}`
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(data => setUserComments(data))
    }, [_id])
    return (
        <div className='overflow-y-scroll max-h-72'>
            {
                userComments.map(comment => <Comment commentDetails={comment} key={comment._id} />)
            }
        </div>
    );
};

export default Comments;