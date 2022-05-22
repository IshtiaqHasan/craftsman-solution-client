import React from 'react';
import banner from '../../images/banner/banner.jpg'


const Banner = () => {
    return (
        <div
            style={{
                background: `url(${banner})`,
                backgroundSize: 'cover'
            }}
            class="hero min-h-screen" >
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">FOR THOSE WHO MAKE THE WORLD.</h1>
                    <p class="mb-5">For the builders and protectors, for the makers and explorers, for those shaping and reshaping our world through hard work and inspiration, CRAFTSMAN provides the tools and innovative solutions you can trust to get the job done</p>
                    <button class="btn btn-accent text-white uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;