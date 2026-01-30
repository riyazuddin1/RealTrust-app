import React, { useEffect, useState } from 'react';
import { api } from '../../api';

export default function SubscribersAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await api.get('/api/subscribers');
        setItems(res.data?.subscribers || []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-head">
        <h1>Subscribed Email Addresses</h1>
        <p>All newsletter subscribers collected from the landing page.</p>
      </div>

      <section className="admin-card">
        {loading ? (
          <div className="admin-muted">Loading…</div>
        ) : (
          <div className="admin-list">
            {items.map((s) => (
              <div key={s.id} className="admin-contact">
                <div className="admin-rowTitle">{s.email}</div>
                <div className="admin-muted small">{new Date(s.subscribedAt).toLocaleString()}</div>
              </div>
            ))}
            {!items.length ? <div className="admin-muted">No subscribers yet.</div> : null}
          </div>
        )}
      </section>
    </div>
  );
}

