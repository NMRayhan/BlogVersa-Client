import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from './Spiner/Spiner';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Blog = (props) => {
    const { id, title, details, category } = props.details
    const [user, loading, error] = useAuthState(auth);
    const handleSubmitComment = (e) => {
        e.preventDefault()
        const commentText = e.target.comment.value;
        console.log(commentText);
        e.target.reset();
    }
    if (loading) {
        return <Spinner />
    }

    if (error) {
        toast.error(error.message)
    }
    return (
        <div className="card w-full bg-base-100 shadow-2xl my-5">
            <div className="card-body">
                <div className='flex flex-row'>
                    <h2 className="text-2xl font-medium text-teal-400 text-left basis-9/12">
                        {title}
                    </h2>
                    <div className='basis-3/12'>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                </div>
                <p className='text-left'>{details}</p>
            </div>
            <div className='grid gap-2 grid-cols-2 justify-center items-center'>
                <button className="btn btn-ghost gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Like
                </button>
                <form onSubmit={handleSubmitComment}>
                    <div className='flex flex-row justify-center items-center'>
                        <input type="text" placeholder="Comment here" name="comment" className="input focus:outline-0 w-full max-w-full" />
                        <input type='submit' value="submit" className='btn btn-accent mr-5'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Blog;