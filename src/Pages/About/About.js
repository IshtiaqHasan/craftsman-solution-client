import React from 'react';

const About = () => {
    return (
        <div class="hero  bg-base-200">
            <div class="hero-content min-h-screen flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/hgCb89x/banner2.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-3xl font-bold">ABOUT US</h1>
                    <p className='text-xl'>
                        Name: Craftsman Solution
                    </p>
                    <p>Formerly:	Nippon Gakki Seizo Company, Limited (1297–1987)</p>
                    <p>Founded:	12 October 1887; 134 years ago</p>
                    <p>Founder:	Torakusu Yamaha</p>
                    <p>Headquarters:	10-1, Nakazawacho, Naka-ku, Hamamatsu, Shizuoka, Japan</p>
                    <p>Area served:	Worldwide</p>
                    <p>Website:	craftssmansol.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;