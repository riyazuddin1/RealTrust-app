import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const items = [
    {
      icon: '/icons/circle-dollar-sign.svg',
      title: 'Potential ROI',
      desc: 'We help you maximize return on your investment with data-backed strategies. Our proven methodologies have helped clients achieve an average ROI increase of 35% within the first quarter.',
      benefits: ['Data-driven insights', 'Performance tracking', 'ROI optimization']
    },
    {
      icon: '/icons/paintbrush-2.svg',
      title: 'Design',
      desc: 'Beautiful, conversion-focused designs crafted to build trust and generate leads. Every element is strategically placed to guide your visitors toward taking action.',
      benefits: ['User-centered design', 'Mobile-responsive', 'Conversion optimization']
    },
    {
      icon: '/icons/home.svg',
      title: 'Marketing',
      desc: 'Reach the right audience and turn visitors into customers with targeted marketing. We use advanced analytics to ensure your message reaches those who matter most.',
      benefits: ['Targeted campaigns', 'Multi-channel approach', 'Real-time analytics']
    }
  ];

  return (
    <section id="services" className="why">
      <div className="container">
        <h2 className="why-title">Why Choose Us?</h2>
        <div className="why-underline" />

        <div className="why-grid">
          {items.map((it) => (
            <div key={it.title} className="why-card">
              <div className="why-icon">
                <img src={it.icon} alt="" aria-hidden="true" />
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              {it.benefits && (
                <ul className="why-benefits">
                  {it.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

