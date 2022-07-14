import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const PostBlog = () => {
    const [categorys, setCategory] = useState([])
    const [user, loading, error] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/category`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    const handleNewBlogPost = (e) => {
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
                    console.log(blog);
                    fetch("http://localhost:5000/addBlog", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(blog),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            toast.success("Blog Post Share Successfully done!!!")
                            e.target.reset();
                        });
                }
            });
    }
    return (
        <div className='min-h-screen w-full'>
            <h1 className='text-2xl font-semibold text-teal-400 my-5'>Post A Blog</h1>
            <form onSubmit={handleNewBlogPost}>
                <div>
                    <div className='form-control mt-4'>
                        <label className='label'>
                            <span class="label-text">User Email</span>
                        </label>
                        <input type="email" name="blogEmail" className='input input-success focus:outline-none' readOnly value={user?.email} />
                    </div>
                    <div className='form-control mt-4'>
                        <input type="text" className='input input-info focus:outline-none' name="title" required placeholder='Enter Blog Title' />
                    </div>
                    <div className='form-control mt-4'>
                        <textarea type="text" className='textarea textarea-info focus:outline-none w-full' required cols="30" rows="5" name="details" placeholder='Enter Blog Details'></textarea>
                    </div>
                    <div className='grid gap-5 grid-cols-3 justify-center items-center'>
                        <div className='form-control mt-4'>
                            <select name="category" class="select select-info w-full max-w-3xl focus:outline-none">
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
                            <button type='submit' className='btn btn-outline btn-success'>Post Blog</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostBlog;