import React from 'react';

const ManageBlogs = () => {
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
                                <button className='btn btn-sm btn-outline btn-error mx-1'>Delete</button>
                                <button className='btn btn-sm btn-outline btn-success'>Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBlogs;