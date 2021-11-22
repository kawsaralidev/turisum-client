import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Offers from '../Offers/Offers';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* Hidden gems you must visit while exploring Greece */}
            {/* How To Choose The Best Rope For Hiking */}
            {/* The Best Places To Visit With Family */}
            {/* How To Take A Best Photo When Travelling */}
            {/* What Things You Should Do When You Visit An Island */}
            {/* 10-Day New Mexico Road Trip Itinerary */}
            <Banner></Banner>
            <Services></Services>
            <Offers></Offers>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;