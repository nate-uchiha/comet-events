import React from "react";
import './HeroSection.css';
import heroVideo from '../assets/videos/3141208-uhd_3840_2160_25fps.mp4';

const HeroSection = () => {
    return (
        <section className="hero">
            <video autoPlay muted loop className="hero-video">
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-content">
                <h1>Welcome to Comet Events</h1>
                <p>Your perfect event, perfectly executed.</p>
            </div>
        </section>
    )
}

export default HeroSection