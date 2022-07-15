import React from 'react';

const BlogRow = ({ blogDetails, index, setProductDetails, refetch }) => {
    const { _id, title, details, category } = blogDetails;
    return (
        <tr className="hover">
            <th>{index += 1}</th>
            <td>{title}</td>
            <td>{details}</td>
            <td>{category}</td>
            <td>
                <label
                    htmlFor="delete-confirm-modal"
                    className='btn btn-sm btn-outline btn-error mx-1'
                    onClick={() => setProductDetails(blogDetails)}
                >
                    Delete
                </label>
                <label
                    htmlFor='update-modal'
                    className='btn btn-sm btn-outline btn-success'
                    onClick={() => setProductDetails(blogDetails)}
                >
                    Update
                </label>
            </td>
        </tr>
    );
};

export default BlogRow;