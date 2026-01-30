import React, { useState } from 'react';
import { api } from '../api';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

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
      const res = await api.post('/api/subscribers', { email });
      setStatus({ type: 'success', message: res.data?.message || 'Subscribed!' });
      setEmail('');
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Failed to subscribe'
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="subscribe" className="newsletter">
      <div className="container newsletter-bar">
        <nav className="newsletter-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <form className="newsletter-form" onSubmit={onSubmit}>
          <div className="newsletter-label">Subscribe Us</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email Address"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? '...' : 'Subscribe'}
          </button>
        </form>
      </div>
      {status.message ? (
        <div className={`newsletter-status ${status.type}`}>
          <div className="container">{status.message}</div>
        </div>
      ) : null}
    </section>
  );
}

