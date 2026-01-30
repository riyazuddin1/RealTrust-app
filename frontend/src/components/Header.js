import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container topbar-inner">
        <a href="#home" className="brand" onClick={close}>
          <img src="/images/logo.svg" alt="Real Trust" />
        </a>

        <nav className={`topnav ${open ? 'open' : ''}`}>
          <a href="#home" onClick={close}>
            Home
          </a>
          <a href="#services" onClick={close}>
            Services
          </a>
          <a href="#about" onClick={close}>
            About
          </a>
          <a href="#projects" onClick={close}>
            Projects
          </a>
          <a href="#testimonials" onClick={close}>
            Testimonials
          </a>
          <a href="#contact" onClick={close}>
            Contact
          </a>
          <a className="cta" href="#subscribe" onClick={close}>
            Subscribe
          </a>
        </nav>

        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
