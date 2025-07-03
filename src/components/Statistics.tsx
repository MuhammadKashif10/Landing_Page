
import React, { useState, useEffect, useRef } from 'react';
import '../styles/statistics.css';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0
  });
  
  const sectionRef = useRef(null);

  const finalCounts = {
    projects: 250,
    clients: 150,
    experience: 8,
    awards: 25
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(finalCounts).forEach((key) => {
        const finalValue = finalCounts[key as keyof typeof finalCounts];
        const increment = finalValue / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
        }, stepTime);
      });
    }
  }, [isVisible]);

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{counts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.experience}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.awards}+</div>
            <div className="stat-label">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
