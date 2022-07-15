import React from 'react';

const Comment = ({ commentDetails }) => {
    const { _id, commentText, commentorEmail, commentorName, blogId } = commentDetails
    return (
        <div>
            <div>
                <div className='form-control shadow-lg mt-3 bg-slate-800 rounded-lg'>
                    <label className='label'>
                        <span class="label-text">{commentorName}</span>
                    </label>
                    <input type="text" value={commentText} className="input focus:outline-none text-primary bg-slate-800" readOnly />
                </div>
            </div>
        </div>
    );
};

export default Comment;