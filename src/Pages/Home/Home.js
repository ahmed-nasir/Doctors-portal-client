import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';
import Infoo from './Infoo';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Infoo></Infoo>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;