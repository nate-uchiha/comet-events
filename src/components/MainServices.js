import React from 'react';// We'll style this later


const services = [
    { name: "Wedding", description: "Make your wedding day truly special with personalized planning and flawless execution.", img: "https://via.placeholder.com/300" },
    { name: "Corporate Events", description: "Impress your team and clients with a seamless corporate event that boosts your brand.", img: "https://via.placeholder.com/300" },
    { name: "MICE", description: "Meetings, Incentives, Conferences, and Exhibitions organized to perfection.", img: "https://via.placeholder.com/300" },
    { name: "Promotions", description: "Boost your business with promotional events designed to engage and excite.", img: "https://via.placeholder.com/300" },
    { name: "Themed Events", description: "Bring your vision to life with a creative themed event, tailor-made for your occasion.", img: "https://via.placeholder.com/300" },
];

const MainServices = () => {
    return (
        <section className="main-services">
            <h2>Our Main Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.img} alt={service.name} />
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainServices;
