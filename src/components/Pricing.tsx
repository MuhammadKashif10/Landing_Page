import React, { useState } from 'react';
import { pricingData } from '../data/pricingData';
import '../styles/pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            Flexible pricing options for every budget
          </p>
        </div>
        
        <div className="pricing-toggle">
          <span className={!isYearly ? 'active' : ''}>Monthly</span>
          <div className="toggle-switch" onClick={() => setIsYearly(!isYearly)}>
            <div className={`toggle-slider ${isYearly ? 'yearly' : ''}`}></div>
          </div>
          <span className={isYearly ? 'active' : ''}>
            Yearly 
            <span className="discount-badge">-20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">
                    {isYearly ? Math.floor(plan.monthlyPrice * 12 * 0.8) : plan.monthlyPrice}
                  </span>
                  <span className="period">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact">
              <button className={`plan-button ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.buttonText}
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
