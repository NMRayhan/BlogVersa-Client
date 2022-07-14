import React from 'react';

const UpdateBlog = () => {
    const handleUpdateBlog = () => {

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
                        <form>
                            <div className='form-control mt-4'>
                                <input type="text" className='input input-primary focus:outline-none' />
                            </div>
                            <div className='form-control mt-4'>
                                <textarea className='textarea textarea-info focus:outline-none' rows="5" cols="10"></textarea>
                            </div>
                            <div className='grid gap-5 grid-cols-3 justify-center items-center'>
                                <div className='form-control mt-4'>
                                    <select name="category" class="select select-info w-full max-w-3xl focus:outline-none">
                                        <option disabled selected>Select Category</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Economics">Economics</option>
                                        <option value="Business">Business</option>
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