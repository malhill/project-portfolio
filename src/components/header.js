import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

export default function Header() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-color">

      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbar-brand" id="navbarTogglerDemo01">
          <h1 className="title"> Malcolm&lsquo;s Portfolio </h1>
        </div>

        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link text-white'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link text-white'}>Project</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link text-white'}>Contact</Link>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  );
}
