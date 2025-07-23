import React, { useState } from 'react';

// Navbar Component
const Navbar = ({ navigateTo, activePage }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Site Title */}
        <div className="navbar-logo">
          <a href="#home" onClick={() => navigateTo('home')}>Curtis Mwarema</a>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          <NavLink to="home" current={activePage} onClick={() => navigateTo('home')}>Home</NavLink>
          <NavLink to="features-list-section" current={activePage} onClick={() => navigateTo('features-list-section')}>What I Offer</NavLink>
          <NavLink to="portfolio-showcase-container" current={activePage} onClick={() => navigateTo('portfolio-showcase-container')}>Portfolio</NavLink>
          <NavLink to="about-me-section" current={activePage} onClick={() => navigateTo('about-me-section')}>About Me</NavLink>
          <NavLink to="testimonials-section" current={activePage} onClick={() => navigateTo('testimonials-section')}>Testimonials</NavLink>
          <NavLink to="gallery-section" current={activePage} onClick={() => navigateTo('gallery-section')}>Design & Photography</NavLink>
          <NavLink to="contact-section" current={activePage} onClick={() => navigateTo('contact-section')}>Contact</NavLink>
          <NavLink to="cta-section" current={activePage} onClick={() => navigateTo('cta-section')}>Call to Action</NavLink>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="nav-links-mobile">
          <NavLink to="home" current={activePage} onClick={() => { navigateTo('home'); setIsOpen(false); }}>Home</NavLink>
          <NavLink to="features-list-section" current={activePage} onClick={() => { navigateTo('features-list-section'); setIsOpen(false); }}>What I Offer</NavLink>
          <NavLink to="portfolio-showcase-container" current={activePage} onClick={() => { navigateTo('portfolio-showcase-container'); setIsOpen(false); }}>Portfolio</NavLink>
          <NavLink to="about-me-section" current={activePage} onClick={() => { navigateTo('about-me-section'); setIsOpen(false); }}>About Me</NavLink>
          <NavLink to="testimonials-section" current={activePage} onClick={() => { navigateTo('testimonials-section'); setIsOpen(false); }}>Testimonials</NavLink>
          <NavLink to="gallery-section" current={activePage} onClick={() => { navigateTo('gallery-section'); setIsOpen(false); }}>Design & Photography</NavLink>
          <NavLink to="contact-section" current={activePage} onClick={() => { navigateTo('contact-section'); setIsOpen(false); }}>Contact</NavLink>
          <NavLink to="cta-section" current={activePage} onClick={() => { navigateTo('cta-section'); setIsOpen(false); }}>Call to Action</NavLink>
        </div>
      )}
    </nav>
  );
};

// Helper component for Navigation Links
const NavLink = ({ to, current, onClick, children }) => (
  <a
    href={`#${to}`} // Updated href to match section IDs
    onClick={onClick}
    className={`nav-link ${current === to ? 'active' : ''}`}
  >
    {children}
  </a>
);

export default Navbar;
