import React, { useEffect, useState } from 'react';
import { api } from '../../api';

export default function ContactsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await api.get('/api/contacts');
        setItems(res.data?.contacts || []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-head">
        <h1>Contact Form Details</h1>
        <p>All contact form responses submitted from the landing page.</p>
      </div>

      <section className="admin-card">
        {loading ? (
          <div className="admin-muted">Loading…</div>
        ) : (
          <div className="admin-list">
            {items.map((c) => (
              <div key={c.id} className="admin-contact">
                <div className="admin-rowTitle">{c.fullName}</div>
                <div className="admin-rowDesc">
                  <b>Email:</b> {c.email} &nbsp; | &nbsp; <b>Mobile:</b> {c.mobileNumber} &nbsp; | &nbsp; <b>City:</b>{' '}
                  {c.city}
                </div>
                <div className="admin-muted small">{new Date(c.submittedAt).toLocaleString()}</div>
              </div>
            ))}
            {!items.length ? <div className="admin-muted">No contact submissions yet.</div> : null}
          </div>
        )}
      </section>
    </div>
  );
}

