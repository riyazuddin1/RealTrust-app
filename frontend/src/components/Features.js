import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '/icons/circle-dollar-sign.svg',
      title: 'Increase Revenue',
      description: 'Boost your sales with our proven lead generation strategies that convert visitors into customers.'
    },
    {
      icon: '/icons/paintbrush-2.svg',
      title: 'Beautiful Design',
      description: 'Create stunning landing pages that capture attention and engage your audience effectively.'
    },
    {
      icon: '/icons/home.svg',
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive platform. No technical skills required.'
    },
    {
      icon: '/icons/Group.svg',
      title: '24/7 Support',
      description: 'Our dedicated team is always ready to help you succeed with round-the-clock assistance.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">
            Discover the features that make us the best choice for your lead generation needs
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
