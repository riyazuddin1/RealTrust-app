import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrap">
          <div className="about-collage" aria-hidden="true">
            {/* Removed building image as requested */}
            <div className="about-img about-img-2">
              <img src="/images/pexels-brett-sayles-2881232-2.svg" alt="" />
            </div>
            <div className="about-img about-img-3">
              <img src="/images/pexels-brett-sayles-2881232-3.svg" alt="" />
            </div>
          </div>

          <div className="about-text">
            <h2>About Us</h2>
            <div className="about-underline" />
            <p>
              We're a team focused on consultation, design, and marketing. Our goal is to build
              trust-first experiences that help you connect with customers and grow your business.
            </p>
            <div className="about-details">
            <div className="detail-item">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="detail-item">
              <strong>500+</strong>
              <span>Projects Done</span>
            </div>
            <div className="detail-item">
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
          </div>
            <p className="about-mission">
              Our mission is to empower businesses with innovative solutions that drive growth, 
              enhance customer engagement, and deliver measurable results. We believe in building 
              long-term partnerships based on trust, transparency, and excellence.
            </p>
            <button className="about-btn" type="button">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

