import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from './Spinner/Spinner';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Comments from './Comments';
import { useQuery, refetch } from 'react-query';

const Blog = (props) => {
    const { _id, title, details, category, img } = props.details
    const [user, loading, error] = useAuthState(auth);
    const handleSubmitComment = (e) => {
        e.preventDefault()
        const commentText = e.target.comment.value;
        const commentorEmail = user?.email;
        const commentorName = user?.displayName;
        const blogId = _id;
        const BlogTitle = title;
        const comment = { commentText, commentorEmail, commentorName, blogId, BlogTitle }
        const url = `http://localhost:5000/postComment`
        if (user !== null) {
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(comment),
            }).then(res => res.json()).then(data => console.log(data))
            e.target.reset();
        } else {
            toast.warning("Write a comment please login first!!!")
            e.target.reset();
        }
    }
    if (loading) {
        return <Spinner />
    }

    if (error) {
        toast.error(error.message)
    }
    return (
        <article className="card w-full bg-base-100 shadow-2xl my-5">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <div>
                    <div className='flex flex-row'>
                        <h2 className="text-2xl font-medium text-teal-400 text-left basis-9/12">
                            {title}
                        </h2>
                        <div className='basis-3/12'>
                            <div className="badge badge-secondary">{category}</div>
                        </div>
                    </div>
                    <p className='text-left'>{
                        details
                    }</p>
                </div>
                <div className='grid gap-2 grid-cols-1 justify-center items-center'>
                    <form onSubmit={handleSubmitComment}>
                        <div className='grid grid-cols-1 justify-center items-center'>
                            <textarea placeholder="Comment here" name="comment" rows="1" className='textarea textarea-success focus:outline-0 w-full max-w-full my-2'>
                            </textarea>
                            <input type='submit' value="submit" className='btn btn-sm btn-outline btn-success' />
                        </div>
                    </form>
                </div>
                {<Comments blogId={_id} refetch={refetch} />}
            </div>
        </article>
    );
};

export default Blog;