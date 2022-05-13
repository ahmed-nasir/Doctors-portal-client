import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Infoo = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opennig Hours" description="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" description="Brooklyn, NY 10036, United States" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" description="+000 123 456789" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Infoo;