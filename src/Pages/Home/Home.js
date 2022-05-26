import React from 'react';
import Banner from './Banner';
import HomeTools from './HomeTools';
import SummaryStat from './SummaryStat';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <HomeTools />
            <SummaryStat />
        </div>
    );
};

export default Home;