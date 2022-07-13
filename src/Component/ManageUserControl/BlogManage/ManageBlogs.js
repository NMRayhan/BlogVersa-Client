import React, { useState } from 'react';
import DeleteConfirm from '../DeleteConfirm';

const ManageBlogs = () => {
    const [productDetails, setProductDetails] = useState(null);
    return (
        <div className="min-h-screen">
            <h1>Manage User Blogs</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Blog Type</th>
                            <th>Take Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>
                                <label
                                    htmlFor="delete-confirm-modal"
                                    onClick={() => setProductDetails(details)}
                                    className='btn btn-sm btn-outline btn-error mx-1'
                                >
                                    Delete
                                </label>
                                <button className='btn btn-sm btn-outline btn-success'>Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {productDetails && (
                    <DeleteConfirm
                        details={productDetails}
                        key={productDetails._id}
                        setProductDetails={setProductDetails} />
                )}
            </div>
        </div>
    );
};

export default ManageBlogs;