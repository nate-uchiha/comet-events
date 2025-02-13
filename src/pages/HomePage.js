import React from "react";
import IntroVideo from '../assets/video.mp4';
import WeddingImage from '../assets/wedding.jpg';
import CorporateEventsImage from '../assets/corpevents.jpg';
import MiceImage from '../assets/mice.jpg';
import EventPlanImage from '../assets/eventplan.jpg';
import EntertainmentImage from '../assets/entertainment.jpg';
import ThemedImage from '../assets/themed.jpg';
import TeamImage from '../assets/team.jpg';
import InstagramImage from '../assets/instagram.png';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <header>
        <nav>
          <div className="logo">Comet Events & Entertainment</div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={IntroVideo} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
        <div className="hero-content">
          <h1>Comet Events & Entertainment</h1>
          <p>Shining Bright, Creating Stellar Events</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        {[
          { title: "Weddings", image: WeddingImage, description: "We understand that a wedding is one of the most significant days in a couple's life. Our team works closely with couples to design and orchestrate a personalized wedding experience that reflects their unique style and love story." },
          { title: "Corporate Events", image: CorporateEventsImage, description: "Comet Events & Entertainment offers comprehensive event management solutions for corporate clients. Whether it's a product launch, annual conference, or client appreciation gathering, our professionals ensure that your event is impactful." },
          { title: "MICE", image: MiceImage, description: "We specialize in the planning and execution of Meetings, Incentives, Conferences, and Exhibitions. Our experienced team manages everything from logistics to attendee engagement, ensuring a seamless experience for all participants." },
          { title: "Event Planning", image: EventPlanImage, description: "From concept to execution, we handle all aspects of event planning, ensuring a seamless experience from start to finish." },
          { title: "Entertainment Solutions", image: EntertainmentImage, description: "Discover a wide range of entertainment options, including live performances, DJs, and interactive experiences that will leave your guests talking long after the event." },
          { title: "Themed Events", image: ThemedImage, description: "Transform your occasion with our custom themes, tailored to reflect your unique style and preferences." }
        ].map((service, index) => (
          <div key={index} className="service-card" style={{ backgroundImage: `url(${service.image})` }}>
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={TeamImage} alt="Event Planning" />
          </div>
          <div className="about-details">
            <p>At Comet Events & Entertainment, we specialize in crafting unforgettable experiences for our clients. With a focus on creativity, innovation, and a commitment to excellence, we bring a personal touch to every event.</p>
            <ul>
              <li><strong>Expertise:</strong> With years of experience in the events industry, we bring a wealth of knowledge and insight to every project.</li>
              <li><strong>Personalized Approach:</strong> We tailor our services to meet the unique needs and preferences of each client, ensuring a bespoke experience.</li>
              <li><strong>Creativity & Innovation:</strong> Our team thrives on creativity, constantly exploring new ideas and trends to enhance your event.</li>
              <li><strong>Commitment to Excellence:</strong> We are committed to delivering high-quality service and exceeding client expectations at every stage of the event planning process.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-container">
          {[
            { name: "Ankit", role: "Founder", image: "founder.jpg", link: 'https://www.instagram.com/jaat9519?igsh=MTZlNXdmb3IzZjd0dw==' },
            { name: "Nikhil Bhardwaj", role: "Operations Head", image: "founder.jpg", link: 'https://www.instagram.com/baman._.nikhil7?igsh=MXN3NW15MWtjYzBzdg==' },
            { name: "Karuna", role: "Sales Head", image: "founder.jpg", link: 'https://www.instagram.com/jaat9519?igsh=MTZlNXdmb3IzZjd0dw==' },
            { name: "Sandhesh", role: "Production Head", image: "founder.jpg", link: 'https://www.instagram.com/inspire______you?igsh=OTBjYmltczIzN2xz' }
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-photo" />
              <div className="team-details">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <div className="social-links">
                  <a href={member.link} className="social-icon">
                    <img src="linkedin.svg" alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Our Office</h3>
            <p className="address">
              G225A G-BLOCK, Gali No. 4, Saraswati Enclave, Sector 37A, Sector 37, Gurugram, Haryana, India
            </p>
            <p className="contact-number">Phone: +91 9815542360</p>
          </div>

          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/comet_events_entertainment?igsh=cjRmZXI2cmVyZXZl" rel="noreferrer" target="_blank" className="social-icon">
                <img src={InstagramImage} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Comet Events. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
