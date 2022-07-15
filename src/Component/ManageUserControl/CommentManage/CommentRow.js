import React from 'react';

const CommentRow = ({ commentDetails, index, setCommentDetails }) => {
    const { _id, commentText, BlogTitle } = commentDetails;
    return (
        <tr className="hover">
            <th>{index += 1}</th>
            <td>{commentText}</td>
            <td>{BlogTitle}</td>
            <td>
                <label
                    htmlFor="delete-comment-confirm"
                    className='btn btn-sm btn-outline btn-error mx-1'
                    onClick={() => setCommentDetails(commentDetails)}
                >
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default CommentRow;