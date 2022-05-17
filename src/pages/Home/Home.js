import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactHome from './ContactHome';
import DentalBanner from './DentalBanner';
import HomeCard from './HomeCard';
import Services from './Services';
import Textimonial from './Textimonial';
import Footer from '../Sheare/Footer/Footer';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Services></Services>
            <DentalBanner></DentalBanner>
            <Appointment></Appointment>
            <Textimonial></Textimonial>
            <ContactHome></ContactHome>
            <Footer></Footer>

        </div>
    );
};

export default Home;