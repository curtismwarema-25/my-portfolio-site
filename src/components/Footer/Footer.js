import React from 'react';

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
            <a href="https://github.com/curtismwarema-25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.82-.26.82-.577v-2.208c-3.336.724-4.041-1.61-4.041-1.61-.546-1.385-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.809 1.304 3.492.996.108-.775.419-1.304.762-1.605-2.665-.304-5.467-1.332-5.467-5.932 0-1.312.468-2.385 1.236-3.224-.124-.304-.535-1.523.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.553 3.301-1.23 3.301-1.23.652 1.653.241 2.872.117 3.176.77.84 1.236 1.912 1.236 3.224 0 4.61-2.807 5.624-5.479 5.922.43.37.817 1.109.817 2.234v3.315c0 .318.22.693.825.577C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/curtis-mwarema-8b003534a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.instagram.com/i.am_curtis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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

export default Footer;
