import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ blogDetails, setProductDetails, refetch }) => {
    const { _id, title, details, category } = blogDetails;
    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteBlog/${_id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((result) => {
                toast.success("Your Product Delete Successfully done!");
                refetch()
                setProductDetails(null)
            });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="delete-confirm-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        Are You sure want to delete this Blog?
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

export default DeleteConfirm;