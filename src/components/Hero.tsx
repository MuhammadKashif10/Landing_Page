import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Digital
            <span className="gradient-text"> Vision</span>
          </h1>
          <p className="hero-subtitle">
            We create stunning web experiences that drive results and captivate your audience
          </p>
          <button className="cta-button" onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get Started Today
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
