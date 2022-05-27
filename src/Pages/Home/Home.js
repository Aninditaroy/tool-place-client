import React from 'react';
import Banner from './Banner';
import HomeTools from './HomeTools';
import SummaryStat from './SummaryStat';
import InfoCard from './InfoCard';
import Contact from './Contact';
import ShowReview from '../Dashboard/ShowReview';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <HomeTools />
            <InfoCard />
            <ShowReview />
            <SummaryStat />
            <Contact />
        </div>
    );
};

export default Home;