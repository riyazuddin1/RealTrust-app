import React from 'react';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-bg" aria-hidden="true">
        <img src="/images/pexels-brett-sayles-2881232.svg" alt="" />
      </div>
      <div className="container cta-content">
        <div className="cta-text">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Learn more about our comprehensive listing process, as well as our additional staging 
            and design work. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="cta-benefits">
            <div className="cta-benefit">
              <span className="cta-check">✓</span>
              <span>Free initial consultation</span>
            </div>
            <div className="cta-benefit">
              <span className="cta-check">✓</span>
              <span>Customized solutions</span>
            </div>
            <div className="cta-benefit">
              <span className="cta-check">✓</span>
              <span>Ongoing support</span>
            </div>
          </div>
          <a href="#contact" className="cta-button">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
