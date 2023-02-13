import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const UpdateBlog = ({ blogDetails, setProductDetails, refetch }) => {
    const { _id } = blogDetails;
    const [categorys, setCategory] = useState([])
    const [newBlogDetails, setNewBlogdetails] = useState([]);
    const [user, loading, error] = useAuthState(auth)

    useEffect(() => {
        fetch(`https://obscure-fjord-00550.herokuapp.com/category`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        const url = `https://obscure-fjord-00550.herokuapp.com/blog/update/${_id}`
        fetch(url, {
            method: "GET"
        }).then(res => res.json()).then(data => setNewBlogdetails(data))
    }, [_id])

    const handleTitleChange = (e) => {
        const { title, ...rest } = blogDetails;
        const newTitle = e.target.value;
        setNewBlogdetails({ title: newTitle, ...rest });
    }

    const handleDetailsChange = (e) => {
        const { details, ...rest } = blogDetails;
        const newDetails = e.target.value;
        setNewBlogdetails({ details: newDetails, ...rest });
    }

    const handleUpdateBlog = (e) => {
        const CLIENT_API_KEY = `7e411a53cb33bd888f58071eabce8e4e`;
        e.preventDefault()
        const title = e.target.title.value;
        const details = e.target.details.value;
        const category = e.target.category.value;
        const blogEmail = e.target.blogEmail.value;

        const formData = new FormData();
        const imgURL = e.target.blogImg.files[0];
        formData.append("image", imgURL);

        const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        title, details, category, blogEmail, img
                    };
                    // console.log(blog);
                    fetch(`https://obscure-fjord-00550.herokuapp.com/updateBlog/${_id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(blog),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            toast.success("Blog Update Successfully done!!!")
                            setProductDetails(null)
                            refetch()
                        });
                }
            });
    }

    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="update-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <div>
                        <h2 className='text-center font-semibold text-2xl text-green-500'>Update Blog</h2>
                        <form onSubmit={handleUpdateBlog}>
                            <div className='form-control mt-4'>
                                <label className='label'>
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" name="blogEmail" className='input input-success focus:outline-none' readOnly value={user?.email} />
                            </div>
                            <div className='form-control mt-4'>
                                <input type="text" className='input input-primary focus:outline-none' name="title" value={newBlogDetails.title} onChange={handleTitleChange} />
                            </div>
                            <div className='form-control mt-4'>
                                <textarea className='textarea textarea-info focus:outline-none' name="details" rows="5" cols="10" value={newBlogDetails.details} onChange={handleDetailsChange}></textarea>
                            </div>
                            <div className='grid gap-5 grid-cols-3 justify-center items-center'>
                                <div className='form-control mt-4'>
                                    <select name="category" className="select select-info w-full max-w-3xl focus:outline-none">
                                        <option disabled selected>Select Category</option>
                                        {
                                            categorys.map((category, index) => <option index={index} value={category.name}>{category.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='form-control mt-4'>
                                    <input
                                        name="blogImg"
                                        type="file"
                                        className="block w-full text-sm text-slate-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-violet-50 file:text-info
                                            hover:file:bg-violet-100"
                                    />
                                </div>
                                <div className='form-control mt-4'>
                                    <button type='submit' className='btn btn-outline btn-success'>Save Blog</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;