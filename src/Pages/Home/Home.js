import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import InfoCard from './InfoCard';
import SummaryStat from './SummaryStat';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <InfoCard />
            <SummaryStat />


        </div>
    );
};

export default Home;