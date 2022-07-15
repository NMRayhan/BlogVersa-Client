import React from 'react';

const DeleteCommentConfirm = ({ commentDetails, refetch, setCommentDetails }) => {
    const { _id } = commentDetails;
    const handleDelete = (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/deleteComment/${_id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                refetch()
                setCommentDetails(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-comment-confirm" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="delete-comment-confirm"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        Are You sure want to delete this Comment?
                    </h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-primary">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCommentConfirm;