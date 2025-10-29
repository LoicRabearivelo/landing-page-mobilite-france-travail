import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/customStyles.css'; // styles globaux

function NavbarComponent() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`} style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand d-flex" href="#" style={{marginLeft: '-200'}}>
          <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4 fs-5">
            {[
              { id: 'solutions', label: 'Nos Solutions' },
              { id: 'etapes', label: 'Étapes' },
              { id: 'slogan', label: 'Slogan' },
              { id: 'map', label: 'Map' },
            ].map((item) => (
              <li key={item.id} className="nav-item">
                <button onClick={() => scrollToSection(item.id)} className="nav-link btn btn-link text-primary fw-semibold hover-highlight">
                  {item.label}
                </button>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
