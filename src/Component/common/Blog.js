import React from 'react';

const Blog = (props) => {
    const { id, title, details, category } = props.details
    return (
        <div class="card w-full bg-base-100 shadow-2xl my-5">
            <div class="card-body">
                <div className='flex flex-row'>
                    <h2 class="text-2xl font-medium text-teal-400 text-left basis-9/12">
                        {title}
                    </h2>
                    <div className='basis-3/12'>
                        <div class="badge badge-outline">{category}</div>
                    </div>
                </div>
                <p className='text-left'>{details}</p>
            </div>
            <div className='grid gap-2 grid-cols-2 justify-center items-center'>
                <button class="btn btn-ghost gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Like
                </button>
                <div>
                    <input type="text" placeholder="Comment here" class="input focus:outline-0 w-full max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default Blog;