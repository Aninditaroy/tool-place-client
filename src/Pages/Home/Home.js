import React from 'react';
import Banner from './Banner';
import HomeTools from './HomeTools';
import SummaryStat from './SummaryStat';
import InfoCard from './InfoCard';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <HomeTools />
            <InfoCard />
            <SummaryStat />
            <Contact />
        </div>
    );
};

export default Home;