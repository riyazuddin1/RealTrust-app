import React, { useState } from 'react';
import { api } from '../api';
import './Hero.css';

export default function Hero() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Auto-dismiss status message
  React.useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await api.post('/api/contacts', form);
      setStatus({ type: 'success', message: 'Submitted successfully!' });
      setForm({ fullName: '', email: '', mobileNumber: '', city: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Failed to submit'
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="home" className="heroRef">
      <div className="heroRef-bg" aria-hidden="true" />
      <div className="heroRef-shapes" aria-hidden="true" />

      <div className="container heroRef-inner">
        <div className="heroRef-left">
          <h1>
            Consultation,
            <br />
            Design
            <br />&amp; Marketing
          </h1>
          <p className="heroRef-subtitle">
            Transform your business with our comprehensive approach. We combine expert consultation, 
            stunning design, and strategic marketing to help you achieve exceptional results and 
            maximize your return on investment.
          </p>
          <div className="heroRef-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div id="contact" className="heroRef-formCard">
          <h2>Get a Free Consultation</h2>
          <form onSubmit={onSubmit}>
            <input
              value={form.fullName}
              onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
              placeholder="Full Name"
              required
            />
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              type="email"
              placeholder="Enter Email Address"
              required
            />
            <input
              value={form.mobileNumber}
              onChange={(e) => setForm((p) => ({ ...p, mobileNumber: e.target.value }))}
              placeholder="Mobile Number"
              required
            />
            <input
              value={form.city}
              onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
              placeholder="Area, City"
              required
            />
            {status.message ? (
              <div className={`heroRef-status ${status.type}`}>{status.message}</div>
            ) : null}
            <button type="submit" disabled={loading}>
              {loading ? '...' : 'Get Quick Quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
