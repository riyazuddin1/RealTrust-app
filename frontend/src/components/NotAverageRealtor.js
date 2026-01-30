import React from 'react';
import './NotAverageRealtor.css';

export default function NotAverageRealtor() {
  return (
    <section className="notavg">
      <div className="container notavg-inner">
        <div className="notavg-text">
          <h2>Not Your Average Realtor</h2>
          <div className="notavg-underline" />
          <p>
            We combine consultation, design, and marketing to create a complete solution that helps
            you stand out. Our approach is simple: build trust, communicate clearly, and deliver
            results.
          </p>
          <div className="notavg-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Expert consultation tailored to your needs</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Custom design solutions that convert</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Data-driven marketing strategies</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Ongoing support and optimization</span>
            </div>
          </div>
        </div>

        <div className="notavg-circles" aria-hidden="true">
          <div className="circle big">
            <img src="/images/pexels-andres-ayrton-6578391.svg" alt="" />
          </div>
          <div className="circle small one">
            <img src="/images/pexels-fauxels-3182834.svg" alt="" />
          </div>
          <div className="circle small two">
            <img src="/images/pexels-brett-sayles-2881232-1.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

