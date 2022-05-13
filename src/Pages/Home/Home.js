import React from 'react';
import Banner from './Banner';
import Infoo from './Infoo';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Infoo></Infoo>
            <Services></Services>
        </div>
    );
};

export default Home;