import React from 'react';
import Banner from './Banner';
import Infoo from './Infoo';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Infoo></Infoo>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;