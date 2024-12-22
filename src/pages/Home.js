import React from 'react';
import HeroSection from '../components/HeroSection';
import MainServices from '../components/MainServices';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <MainServices />
            <ContactForm />
        </div>
    );
};

export default Home;
