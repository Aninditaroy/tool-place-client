import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import HomeTools from './HomeTools';
import InfoCard from './InfoCard';
import SummaryStat from './SummaryStat';
import ToolsCard from './ToolsCard';

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