import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { resolveUploadUrl } from '../config';
import './OurProjects.css';

export default function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await api.get('/api/projects');
        if (!mounted) return;
        setProjects(res.data?.projects || []);
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
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-sub">
          We know what buyers are looking for and suggest projects that will bring clients top
          dollar for the sale of their homes.
        </p>

        {loading ? (
          <div className="projects-loading">Loading projects…</div>
        ) : (
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-img">
                  <img src={resolveUploadUrl(p.imageUrl)} alt={p.name} />
                </div>
                <div className="project-body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <button type="button" className="project-btn">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
            {!projects.length && (
              <div className="projects-empty">
                No projects yet. Go to <b>/admin/projects</b> to add some.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

