import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import { resolveUploadUrl } from '../../config';

export default function ClientsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', designation: '', description: '', image: null });
  const [status, setStatus] = useState({ type: '', message: '' });

  async function load() {
    setLoading(true);
    try {
      const res = await api.get('/api/clients');
      setItems(res.data?.clients || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('designation', form.designation);
      fd.append('description', form.description);
      fd.append('image', form.image);
      await api.post('/api/clients', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      setStatus({ type: 'success', message: 'Client added' });
      setForm({ name: '', designation: '', description: '', image: null });
      await load();
    } catch (err) {
      setStatus({ type: 'error', message: err.response?.data?.message || 'Failed to add client' });
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-head">
        <h1>Client Management</h1>
        <p>Add clients (image, name, description, designation) and they will appear on “Happy Clients”.</p>
      </div>

      <div className="admin-grid">
        <section className="admin-card">
          <h2>Add Client</h2>
          <form className="admin-form" onSubmit={onSubmit}>
            <label>
              Client Name
              <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required />
            </label>
            <label>
              Designation
              <input
                value={form.designation}
                onChange={(e) => setForm((p) => ({ ...p, designation: e.target.value }))}
                placeholder="CEO, Designer, Web Developer…"
                required
              />
            </label>
            <label>
              Description
              <textarea
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                rows={4}
                required
              />
            </label>
            <label>
              Client Image
              <input
                type="file"
                accept="image/*,.svg"
                onChange={(e) => setForm((p) => ({ ...p, image: e.target.files?.[0] || null }))}
                required
              />
            </label>
            {status.message ? <div className={`admin-status ${status.type}`}>{status.message}</div> : null}
            <button type="submit">Save</button>
          </form>
        </section>

        <section className="admin-card">
          <h2>Clients</h2>
          {loading ? (
            <div className="admin-muted">Loading…</div>
          ) : (
            <div className="admin-table">
              {items.map((c) => (
                <div key={c.id} className="admin-row">
                  <div className="admin-thumb round">
                    <img src={resolveUploadUrl(c.imageUrl)} alt={c.name} />
                  </div>
                  <div className="admin-rowBody">
                    <div className="admin-rowTitle">
                      {c.name} <span className="admin-pill">{c.designation}</span>
                    </div>
                    <div className="admin-rowDesc">{c.description}</div>
                  </div>
                </div>
              ))}
              {!items.length ? <div className="admin-muted">No clients yet.</div> : null}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

