import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import { resolveUploadUrl } from '../../config';

export default function ProjectsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', description: '', image: null });
  const [status, setStatus] = useState({ type: '', message: '' });

  async function load() {
    setLoading(true);
    try {
      const res = await api.get('/api/projects');
      setItems(res.data?.projects || []);
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
      fd.append('description', form.description);
      fd.append('image', form.image);
      await api.post('/api/projects', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      setStatus({ type: 'success', message: 'Project added' });
      setForm({ name: '', description: '', image: null });
      await load();
    } catch (err) {
      setStatus({ type: 'error', message: err.response?.data?.message || 'Failed to add project' });
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-head">
        <h1>Project Management</h1>
        <p>Add projects (image, name, description) and they will appear on the landing page.</p>
      </div>

      <div className="admin-grid">
        <section className="admin-card">
          <h2>Add Project</h2>
          <form className="admin-form" onSubmit={onSubmit}>
            <label>
              Project Name
              <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required />
            </label>
            <label>
              Project Description
              <textarea
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                rows={4}
                required
              />
            </label>
            <label>
              Project Image
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
          <h2>Projects</h2>
          {loading ? (
            <div className="admin-muted">Loading…</div>
          ) : (
            <div className="admin-table">
              {items.map((p) => (
                <div key={p.id} className="admin-row">
                  <div className="admin-thumb">
                    <img src={resolveUploadUrl(p.imageUrl)} alt={p.name} />
                  </div>
                  <div className="admin-rowBody">
                    <div className="admin-rowTitle">{p.name}</div>
                    <div className="admin-rowDesc">{p.description}</div>
                  </div>
                </div>
              ))}
              {!items.length ? <div className="admin-muted">No projects yet.</div> : null}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

