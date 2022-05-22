import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Reviews from './Reviews';
import Summary from './Summary';
import Toolsinfo from './Toolsinfo';
import Upcoming from './Upcoming';
import Upcomings from './Upcomings';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toolsinfo></Toolsinfo>
            <Summary></Summary>
            <Contact></Contact>
            <Reviews></Reviews>
            <Upcomings></Upcomings>
            <Footer></Footer>
        </div>
    );
};

export default Home;