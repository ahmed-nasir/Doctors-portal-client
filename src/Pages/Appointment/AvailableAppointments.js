import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const formatedDate= format(date,'PP');

    useEffect(() => {
        //http://localhost:5000/available?date=${formatedDate}
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formatedDate])
    return (
        <div>
            <h2 className='text-secondary text-xl text-center mt-12 mb-5'>Available Appointment On: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal 
                date={date}
                 treatment={treatment}
                 setTreatment={setTreatment}
                 ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;