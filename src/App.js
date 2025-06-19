import React, { useState, useEffect } from 'react';
import './styles/index.scss'; // This line is commented out for Canvas compatibility.
                               // Remember to uncomment this and set up Sass locally!

// Main App component
const App = () => {
  const [activePage, setActivePage] = useState('home'); // State to manage active page

  // Placeholder for navigation logic (will be expanded for sub-pages)
  const navigateTo = (page) => {
    setActivePage(page);
    // For a single-page application, you would handle scrolling here
    // For example:
    document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Navbar Component */}
      <Navbar navigateTo={navigateTo} activePage={activePage} />

      {/* Since this is a one-pager, all content is within HomePage */}
      <HomePage />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = ({ navigateTo, activePage }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Site Title */}
        <div className="navbar-logo">
          <a href="#home" onClick={() => navigateTo('home')}>YourName</a>
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
          <NavLink to="portfolio-section" current={activePage} onClick={() => navigateTo('portfolio-section')}>Portfolio</NavLink>
          <NavLink to="about-me-section" current={activePage} onClick={() => navigateTo('about-me-section')}>About Me</NavLink>
          <NavLink to="contact-section" current={activePage} onClick={() => navigateTo('contact-section')}>Contact</NavLink>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="nav-links-mobile">
          <NavLink to="home" current={activePage} onClick={() => { navigateTo('home'); setIsOpen(false); }}>Home</NavLink>
          <NavLink to="portfolio-section" current={activePage} onClick={() => { navigateTo('portfolio-section'); setIsOpen(false); }}>Portfolio</NavLink>
          <NavLink to="about-me-section" current={activePage} onClick={() => { navigateTo('about-me-section'); setIsOpen(false); }}>About Me</NavLink>
          <NavLink to="contact-section" current={activePage} onClick={() => { navigateTo('contact-section'); setIsOpen(false); }}>Contact</NavLink>
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

// Home Page Content Component
const HomePage = () => {
  return (
    <main className="main-content">
      {/* Hero Header Section */}
      <section id="home" className="hero-section">
        <div className="hero-image-overlay" style={{ backgroundImage: "url('https://placehold.co/1920x1080/4A5568/FFFFFF?text=Hero+Image')" }}></div>
        <div className="hero-content">
          <h1 className="hero-tagline">
            Crafting Unique Experiences Through <br className="break-line" /> Design and Photography
          </h1>
          <p className="hero-description">
            Transforming visions into captivating visuals and intuitive user interfaces.
          </p>
          <button className="btn btn-primary hero-btn">
            Explore My Portfolio
          </button>
        </div>
      </section>

      {/* Main Portfolio Section */}
      <section id="portfolio-section" className="portfolio-showcase-container">
        <h2 className="portfolio-main-title">My Recent Work</h2>

        {/* Feature Section: Alarms Sacco UI/UX */}
        <section className="feature-section">
          <div className="feature-content">
            <h2 className="feature-title">Featured Project: Alarms Sacco UI/UX Redesign</h2>
            <p className="feature-description">
                Led the UI/UX redesign for Alarms Sacco, a financial cooperative, focusing on creating an intuitive and accessible digital platform. This project involved extensive user research, wireframing, and prototyping to streamline financial management for members.
            </p>
            <button className="btn btn-secondary feature-btn">
              View Case Study
            </button>
          </div>
          <div className="feature-image-container">
            <img
              src="https://placehold.co/800x600/CCD1D9/333333?text=Alarms+Sacco+UI/UX"
              alt="Alarms Sacco UI/UX Project Thumbnail"
              className="feature-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/CCD1D9/333333?text=Image+Unavailable"; }}
            />
          </div>
        </section>

        {/* Feature Section: Pixel-Waves UI/UX (Reversed order for asymmetry) */}
        <section className="feature-section feature-section--reversed">
          <div className="feature-content">
            <h2 className="feature-title">Latest Project: Pixel-Waves UI/UX Experience</h2>
            <p className="feature-description">
                Designed the immersive user interface and experience for "Pixel-Waves," a creative digital art platform. Focused on visual harmony, fluid interactions, and a user-friendly interface that encourages artistic exploration and collaboration.
            </p>
            <button className="btn btn-secondary feature-btn">
              Explore Design
            </button>
          </div>
          <div className="feature-image-container">
            <img
              src="https://placehold.co/800x600/D9CDE3/555555?text=Pixel-Waves+UI/UX"
              alt="Pixel-Waves UI/UX Project Thumbnail"
              className="feature-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/D9CDE3/555555?text=Image+Unavailable"; }}
            />
          </div>
        </section>
      </section>


      {/* Features List Section: Key Skills/Services */}
      <section className="features-list-section">
        <h2 className="features-list-title">What I Offer</h2>
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-card-title">UI/UX Design</h3>
            <p className="feature-card-description">
              Creating intuitive, user-friendly, and aesthetically pleasing interfaces that enhance user satisfaction and achieve business goals.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175m0 0a2.298 2.298 0 005.688 4.9m4.444 4.445l.176.079M10.856 19.34c-1.31.42-2.73.664-4.143.664H1.4M15 15l-1.571 1.571Q12.893 18 12.893 18H5.714m.985-2.071l4.904-2.452m0 0a2.298 2.298 0 005.688 4.9m-4.444-4.445l.176.079M9.286 19.34c.839.423 1.838.664 2.893.664l.169-.001m0 0a2.298 2.298 0 005.688-4.9m-4.444-4.445l.176.079M18.827 6.175A2.31 2.31 0 0117.186 7.23c-.38.054-.757.112-1.134.175m0 0a2.298 2.298 0 005.688 4.9M15 15l-1.571 1.571Q12.893 18 12.893 18h-7.18M17.827 6.175a2.31 2.31 0 011.64 1.055 2.298 2.298 0 00-5.688 4.9l.176.079M10.856 19.34c-1.31.42-2.73.664-4.143.664H1.4" />
              </svg>
            </div>
            <h3 className="feature-card-title">Professional Photography</h3>
            <p className="feature-card-description">
              Capturing stunning visuals for diverse needs, from portraiture to product photography, ensuring high-quality and impactful imagery.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0M3.75 18H7.5m-3-6h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0M9.75 12H7.5" />
              </svg>
            </div>
            <h3 className="feature-card-title">Brand Identity & Strategy</h3>
            <p className="feature-card-description">
              Developing cohesive brand identities and strategic visual narratives that resonate with your target audience.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me-section" className="about-me-section">
        <div className="about-me-content">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-description">
            Hello! I'm [Your Name], a passionate UI/UX designer and photographer with a keen eye for detail and a love for creating engaging visual experiences. My journey in design began with a fascination for how aesthetics and functionality intertwine to impact user perception and interaction.
          </p>
          <p className="about-me-description">
            I specialize in crafting intuitive user interfaces and experiences, driven by user-centered design principles. Beyond the screen, my camera is an extension of my creative vision, capturing moments and narratives that tell compelling stories. I believe that great design is a blend of art and science, and I'm dedicated to delivering solutions that are not only beautiful but also highly effective.
          </p>
          <p className="about-me-description">
            When I'm not designing or behind the lens, you can find me exploring new coffee shops, reading about emerging tech trends, or experimenting with digital art.
          </p>
          <a href="/resume.pdf" download="Curtis_Mwarama_Resume.pdf" className="btn btn-primary about-me-btn">
  Download My Resume
</a>
        </div>
        <div className="about-me-image-container">
          <img
            src="https://placehold.co/600x600/C0C0C0/333333?text=Your+Portrait"
            alt="Your Portrait"
            className="about-me-image"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x600/C0C0C0/333333?text=Image+Unavailable"; }}
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2 className="testimonial-title">What Clients Say</h2>
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">
            "Working with [Your Name] was an absolute pleasure! Their attention to detail in UI/UX design transformed our product, and their photography skills captured the essence of our brand perfectly. Highly recommend!"
          </blockquote>
          <p className="testimonial-author">- Jane Doe, CEO of Tech Innovations</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="gallery-title">Design & Photography Showcase</h2>
        <div className="gallery-grid">
          {/* Gallery Item 1 */}
          <div className="gallery-item">
            <img
              src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Product+UI+Concept"
              alt="Gallery Item Product UI Concept"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Product UI Concept</p>
            </div>
          </div>
          {/* Gallery Item 2 */}
          <div className="gallery-item">
            <img
              src="/img/refresh-logo(white).jpg"
              alt="Gallery Item Branding Mockup"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Branding Mockup</p>
            </div>
          </div>
          {/* Gallery Item 3 */}
          <div className="gallery-item">
            <img
              src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Landscape+Photography"
              alt="Gallery Item Landscape Photography"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Landscape Photography</p>
            </div>
          </div>
          {/* Gallery Item 4 */}
          <div className="gallery-item">
            <img
              src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Mobile+App+Screens"
              alt="Gallery Item Mobile App Screens"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Mobile App Screens</p>
            </div>
          </div>
          {/* Gallery Item 5 */}
          <div className="gallery-item">
            <img
              src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Portrait+Session"
              alt="Gallery Item Portrait Session"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Portrait Session</p>
            </div>
          </div>
          {/* Gallery Item 6: Poster Design */}
          <div className="gallery-item">
            <img
              src="https://placehold.co/600x400/8B8B9B/FFFFFF?text=Poster+Design"
              alt="Gallery Item Poster Design"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/8B8B9B/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Poster Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">Let's Connect!</h2>
          <p className="contact-description">
            I'm always open to new opportunities, collaborations, and conversations about design and photography. Feel free to reach out!
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" required />
            <input type="email" placeholder="Your Email" className="form-input" required />
            <textarea placeholder="Your Message" rows="5" className="form-textarea" required></textarea>
            <button type="submit" className="btn btn-primary form-submit-btn">
              Send Message
            </button>
          </form>
          <div className="contact-details">
            <p>Email: <a href="mailto:curtismwarema01@gmail.com">curtismwarema01@gmail.com</a></p>
            <p>Phone: <a href="tel:+254768689553">+254768689553</a></p>
          </div>
        </div>
      </section>

      {/* CTA Section (can be removed if Contact section serves this purpose fully) */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to bring your vision to life?</h2>
          <p className="cta-description">
            Whether you're looking for stunning visuals, intuitive designs, or a complete brand overhaul, I'm here to help.
          </p>
          <div className="cta-buttons">
            {/* <button className="btn btn-primary cta-btn">
              View Full Portfolio
            </button> */}
            <button className="btn btn-primary cta-btn">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Curtis Mwarema</h3>
          <p className="footer-text">
            Passionate UI/UX designer and photographer dedicated to creating impactful visual experiences.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio-section">Portfolio</a></li>
            <li><a href="#about-me-section">About Me</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links-list">
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Brand Strategy</a></li>
            <li><a href="#">Web Development</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Get in Touch</h3>
          <p className="footer-contact-info">Email: <a href="mailto:curtismwarema01@gmail.com">curtismwarema01@gmail.com</a></p>
          <p className="footer-contact-info">Phone: <a href="tel:+254768689553">+254768689553</a></p>
          <div className="footer-social-links">
            {/* Social Media Icons - Placeholder for now */}
            <a href="www.linkedin.com/in/curtis-mwarema-8b003534a" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.instagram.com/i.am_curtis/" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.021.072 5.676.132 4.755.244 4.09.407 2.89.702 1.84 1.258.877 2.242.443 2.70.072 3.42.028 4.721.012 5.038 0 5.432 0 12s.012 6.962.028 7.279c.044 1.301.415 2.021.877 2.479.963.984 2.013 1.54 3.213 1.834.665.163 1.586.275 2.931.335 1.312.058 1.72.072 5.02.072s3.708-.014 5.02-.072c1.345-.06 2.266-.172 2.931-.335 1.2-.294 2.25-.85 3.213-1.834.462-.458.833-1.178.877-2.479.016-.317.028-.711.028-7.279s-.012-6.962-.028-7.279c-.044-1.301-.415-2.021-.877-2.479A4.7 4.7 0 0021.123 0h-1.077C18.932 0 18.525.014 12 0zm0 4.707a7.293 7.293 0 110 14.586A7.293 7.293 0 0112 4.707zm-7.653 2.53A1.218 1.218 0 115.565 6a1.218 1.218 0 01-1.218 1.218zm7.653 10.378a5.584 5.584 0 100-11.168 5.584 5.584 0 000 11.168z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Curtis Mwarema. All rights reserved.
      </div>
    </footer>
  );
};

export default App;
