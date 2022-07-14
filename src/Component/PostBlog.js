import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const PostBlog = () => {

    const [categorys, setCategory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/category`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    const handleNewBlogPost = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const details = e.target.details.value;
        const category = e.target.category.value;
        console.log(title, details, category);
        toast.success("Blog Post Share Successfully done!!!")
        e.target.reset();
    }
    return (
        <div className='min-h-screen w-full'>
            <h1 className='text-2xl font-semibold text-teal-400 my-5'>Post A Blog</h1>
            <form onSubmit={handleNewBlogPost}>
                <div>
                    <div className='form-control'>
                        <input type="text" className='input input-success focus:outline-none' name="title" placeholder='Enter Blog Title' />
                    </div>
                    <div className='form-control mt-4'>
                        <textarea type="text" className='textarea textarea-info focus:outline-none w-full' cols="30" rows="5" name="details" placeholder='Enter Blog Details'></textarea>
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
                                name="blog-img"
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