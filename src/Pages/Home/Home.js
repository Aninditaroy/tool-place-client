import React from 'react';
import Banner from './Banner';
import HomeTools from './HomeTools';
import SummaryStat from './SummaryStat';
import InfoCard from './InfoCard';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <HomeTools />
            <SummaryStat />
            <InfoCard />
        </div>
    );
};

export default Home;