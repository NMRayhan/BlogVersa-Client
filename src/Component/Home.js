import React from 'react';
import { Link } from 'react-router-dom';
import Blogs from './common/Blogs';

const Home = () => {
    return (
        <div>
            <Link to="/addPost" className="btn btn-link link-hover">
                Add Post
            </Link>
            <Blogs />
        </div>
    );
};

export default Home;