import React from 'react';
import Blog from './Blog'

const Blogs = () => {
    const userBlogs = [
        { id: 1, title: "After Elizabeth Holmes, ex-Theranos president Sunny Balwani found guilty of fraud", details: "Ramesh 'Sunny' Balwani, former president and chief operating officer (COO) of Theranos and ex-boyfriend of founder Elizabeth Holmes, arrives during jury deliberations at his federal trial for wire fraud and conspiracy to commit wire fraud in San Jose, California, U.S. June 28, 2022. REUTERS/Brittany Hosea-Small", category: "sports" },
        { id: 2, title: "Russia barely got started in Ukraine: Putin", details: "President Vladimir Putin said on Thursday that Russia had barely got started in Ukraine and dared the West to try to defeat it on the battlefield, while insisting that Moscow was still open to the idea of peace talks In a hawkish speech to parliamentary leaders more than four months into the war, Putin said the prospects for any negotiation would grow dimmer the longer the conflict dragged on.", category: "economics" },
        { id: 3, title: "Agro-preneurship and enhancing farm income", details: "Value-addition in agriculture through post-harvest processing is considered a critical element which requires a fresh look in the agricultural technology system. Although the growth rate in the country is considered favourable in spite of the impact of the coronavirus pandemic and other global phenomena, sluggish employment needs to be addressed.", category: "Business" },
        { id: 4, title: "Sri Lanka hikes interest rates, warns trouble ahead", details: "Officials said the hike was aimed at containing runaway prices, which were forecast to rise 80 per cent by year's end, and reduce any build-up of demand pressures in the shattered economy Acute shortages of food and fuel, alongside lengthy electricity blackouts, have led to months of widespread anti-government demonstrations calling for President Gotabaya Rajapaksa's resignation.", category: "sports" },
    ]
    return (
        <div className='py-4'>
            {
                userBlogs.map(blog => <Blog details={blog} key={blog.id} />)
            }
        </div>
    );
};

export default Blogs;