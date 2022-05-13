import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className='p-8 lg:py-20 rounded-md'>
            <div className='text-center my-6'>
                <h2 className='text-primary text-xl font-bold'>Contact Us</h2>
                <p className='text-3xl text-white'>Stay connected with us</p>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-2 '>
                <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
            </div>
        </div>
    );
};

export default ContactUs;