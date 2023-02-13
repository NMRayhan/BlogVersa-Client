import React, { useEffect, useState } from 'react';
import Blog from './Blog'

const Blogs = () => {
    
    const [userBlogs, setUserBlogs] = useState([])
    useEffect(() => {
        const url = `https://obscure-fjord-00550.herokuapp.com/allBlogs`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserBlogs(data))
    }, [])
    return (
        <div className='py-4'>
            {
                userBlogs.map(blog => <Blog details={blog} key={blog.id} />)
            }
        </div>
    );
};

export default Blogs;