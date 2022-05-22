import React from 'react';
import banner3 from '../../images/banner/banner3.jpg';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${banner3})`
            }}
            className="p-20"
        >
            <div className='text-center'>
                <h3 className='text-xl text-white font-bold'>Contact Us</h3>
                <h2 className='text-3xl text-white'>Stay Connected With us</h2>
            </div>
            <div >
                <div className='text-center'>
                    <input type="text" placeholder="Email Address" className="input input-bordered  w-full max-w-xs mt-5 mb-2" />
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered  w-full max-w-xs mb-2" />
                    <br />
                    <input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs mb-4" />
                </div>
                <div className='text-center'>
                    <button className="btn btn-accent uppercase text-white font-bold  align-middle">Submit</button>
                </div>
            </div>

        </section>
    );
};

export default Contact;