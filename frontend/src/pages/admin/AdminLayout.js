import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import ProjectsAdmin from './ProjectsAdmin';
import ClientsAdmin from './ClientsAdmin';
import ContactsAdmin from './ContactsAdmin';
import SubscribersAdmin from './SubscribersAdmin';
import './admin.css';

export default function AdminLayout() {
  return (
    <div className="admin">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src="/images/logo.svg" alt="Admin" />
          <div>Admin Panel</div>
        </div>
        <nav className="admin-nav">
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="clients">Clients</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
          <NavLink to="subscribers">Subscribers</NavLink>
          <a href="/" className="admin-back">
            ← Back to site
          </a>
        </nav>
      </aside>

      <main className="admin-main">
        <Routes>
          <Route path="/" element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="clients" element={<ClientsAdmin />} />
          <Route path="contacts" element={<ContactsAdmin />} />
          <Route path="subscribers" element={<SubscribersAdmin />} />
          <Route path="*" element={<Navigate to="projects" replace />} />
        </Routes>
      </main>
    </div>
  );
}

