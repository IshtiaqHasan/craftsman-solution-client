import React from 'react';
import banner from '../../images/banner/banner.jpg'


const Banner = () => {
    return (
        <div
            style={{
                background: `url(${banner})`,
                backgroundSize: 'cover'
            }}
            className="hero min-h-screen" >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">FOR THOSE WHO MAKE THE WORLD.</h1>
                    <p className="mb-5">For the builders and protectors, for the makers and explorers, for those shaping and reshaping our world through hard work and inspiration, CRAFTSMAN provides the tools and innovative solutions you can trust to get the job done</p>
                    <button className="btn btn-accent text-white uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;