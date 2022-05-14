import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className='p-8 lg:py-20 rounded-md'>
            <div className='text-center my-6'>
                <h2 className='text-primary text-xl font-bold'>Contact Us</h2>
                <p className='text-3xl text-white'>Stay connected with us</p>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-2 '>
                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default ContactUs;