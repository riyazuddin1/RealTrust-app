import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { resolveUploadUrl } from '../config';
import './HappyClients.css';

export default function HappyClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await api.get('/api/clients');
        if (!mounted) return;
        setClients(res.data?.clients || []);
      } catch {
        // ignore
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="testimonials" className="clients">
      <div className="container">
        <h2 className="clients-title">Happy Clients</h2>
        <div className="clients-underline" />

        {loading ? (
          <div className="clients-loading">Loading clients…</div>
        ) : (
          <div className="clients-row">
            {clients.map((c) => (
              <div key={c.id} className="client-card">
                <div className="client-avatar">
                  <img src={resolveUploadUrl(c.imageUrl)} alt={c.name} />
                </div>
                <p className="client-desc">{c.description}</p>
                <div className="client-meta">
                  <div className="client-name">{c.name}</div>
                  <div className="client-role">{c.designation}</div>
                </div>
              </div>
            ))}
            {!clients.length && (
              <div className="clients-empty">
                No clients yet. Go to <b>/admin/clients</b> to add some.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

