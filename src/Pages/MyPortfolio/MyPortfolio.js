import React from 'react';

const MyPortfolio = () => {
    return (
        <div class="hero  bg-base-200">
            <div class="hero-content min-h-screen flex-col lg:flex-row-reverse">
                <img className='h-40 w-40' src="https://i.ibb.co/zPGVRD0/111-1112693-portfolio-my-portfolio.jpg" />
                <div>
                    <h1 class="text-3xl font-bold">About Me</h1>
                    <p className='text-xl'>
                        Name: Md. Ishtiaq Hasan
                    </p>
                    <p>Email: ishtiaqhasan1992@gmail.com</p>
                    <p>Educational Qualification: B.Sc. in Electrical & Electronic Engineering</p>
                    <p>Institution: Independent University, Bangladesh</p>
                    <p>My Projects:</p>
                    <p>
                        <a className='btn btn-xs' href="https://book-stock-98acf.web.app/">1. Stock Manage (Client Side)</a>
                        <a className='btn btn-xs' href="https://limitless-castle-30383.herokuapp.com/">Stock Manage (server side)</a>
                    </p>
                    <p>
                        <a className='btn btn-xs' href="https://learn-quran-3f0fa.web.app/">2. Learn Quran (self-learning website)</a>

                    </p>
                    <p>
                        <a className='btn btn-xs' href="https://gleaming-squirrel-a6e6c5.netlify.app/home">3. Review Wensite</a>

                    </p>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;