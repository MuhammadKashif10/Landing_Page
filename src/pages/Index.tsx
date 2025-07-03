import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/global.css';

const Index = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <section id="about" className="about-section enhanced-section">
        <div className="container about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>We are a passionate team dedicated to delivering top-notch digital solutions for businesses of all sizes.</p>
          </div>
          <div className="about-image">
            <Link to="/about">
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" alt="About Us" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
        </div>
      </section>
      <section id="team" className="team-section enhanced-section">
        <div className="container team-content">
          <div className="team-image">
            <Link to="/team">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80" alt="Our Team" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
          <div className="team-text">
            <h2>Our Team</h2>
            <p>Meet our talented professionals who make everything possible.</p>
          </div>
        </div>
      </section>
      <section id="careers" className="careers-section enhanced-section">
        <div className="container careers-content">
          <div className="careers-text">
            <h2>Careers</h2>
            <p>Interested in joining us? Explore exciting career opportunities and become part of our journey.</p>
          </div>
          <div className="careers-image">
            <Link to="/careers">
              <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" alt="Careers" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
        </div>
      </section>
      <section id="blog" className="blog-section enhanced-section">
        <div className="container blog-content">
          <div className="blog-text">
            <h2>Blog</h2>
            <p>Read our latest articles, insights, and updates on technology, design, and business growth.</p>
          </div>
          <div className="blog-image">
            <Link to="/blog">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Blog" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
        </div>
      </section>
      <section id="portfolio" className="portfolio-section enhanced-section">
        <div className="container portfolio-content">
          <div className="portfolio-image">
            <Link to="/portfolio">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Portfolio" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
          <div className="portfolio-text">
            <h2>Portfolio</h2>
            <p>Explore our portfolio to see the projects we've delivered for clients across various industries.</p>
          </div>
        </div>
      </section>
      <section id="case-studies" className="case-studies-section enhanced-section">
        <div className="container case-studies-content">
          <div className="case-studies-text">
            <h2>Case Studies</h2>
            <p>Discover how we've helped businesses achieve their goals through our innovative solutions.</p>
          </div>
          <div className="case-studies-image">
            <Link to="/case-studies">
              <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=600&q=80" alt="Case Studies" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
        </div>
      </section>
      <section id="support" className="support-section enhanced-section">
        <div className="container support-content">
          <div className="support-image">
            <a href="#contact">
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Support" style={{ cursor: 'pointer' }} />
            </a>
          </div>
          <div className="support-text">
            <h2>Support</h2>
            <p>Need help? Our support team is here to assist you with any questions or issues you may have.</p>
          </div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <Statistics />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
