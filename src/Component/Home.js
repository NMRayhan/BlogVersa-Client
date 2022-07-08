import React from 'react';
import Blogs from './common/Blogs';
import Footer from './common/Footer';
import Navbar from './common/Navbar';

const Home = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <Navbar/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Home;