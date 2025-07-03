
import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import '../styles/testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it
          </p>
        </div>
        
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "{testimonialsData[currentIndex].text}"
              </p>
              <div className="testimonial-author">
                <img 
                  src={testimonialsData[currentIndex].avatar} 
                  alt={testimonialsData[currentIndex].name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonialsData[currentIndex].name}</h4>
                  <p className="author-position">{testimonialsData[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slider-controls">
            <button className="slider-btn prev" onClick={prevTestimonial}>
              ←
            </button>
            <div className="slider-dots">
              {testimonialsData.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="slider-btn next" onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
