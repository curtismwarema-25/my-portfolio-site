import React, { useState, useEffect } from 'react';
// import './styles/index.scss'; // This line is commented out for Canvas compatibility.
                               // Remember to uncomment this and set up Sass locally!

// Main App component
const App = () => {
  const [activePage, setActivePage] = useState('home'); // State to manage active active navigation link
  const [currentView, setCurrentView] = useState('default'); // State to manage which content is currently displayed: default home or a case study

  // Function to navigate to a section by ID, with smooth scroll
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    // If we are currently in a case study view, first go back to default view
    // to ensure the main sections are rendered, then scroll.
    if (currentView !== 'default') {
      setCurrentView('default');
      // A small delay might be needed to allow DOM to update before scrolling,
      // but usually React's state updates are batched and fast enough for this.
      setTimeout(() => {
        document.getElementById(pageId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to ensure DOM is ready
    } else {
      document.getElementById(pageId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/*
        Inline style block to inject necessary CSS for aspect ratio and other specific overrides.
        In a real project, these would ideally be in your .scss files.
      */}
      <style>
        {`
        .gallery-section .gallery-item {
          position: relative;
          width: 100%;
          padding-bottom: 125%; /* 4:5 aspect ratio (5/4 = 1.25) */
          height: 0; /* Important to make padding-bottom work as aspect ratio */
          overflow: hidden;
        }

        .gallery-section .gallery-item-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          /* Removed border-radius as per previous instruction */
        }

        /* Adjust asymmetric gallery for mobile to better fit 4:5 */
        @media (max-width: 767px) {
          .case-study-detail-section .asymmetric-gallery {
            grid-auto-rows: calc(100vw / 2 * 5 / 4); /* Approximate 4:5 per column, assuming 2 columns on mobile for auto-fit */
          }
          .case-study-detail-section .asymmetric-gallery .gallery-image {
            height: 100%; /* Image fills its now 4:5 grid cell */
          }
        }
        `}
      </style>

      {/* Navbar Component */}
      <Navbar navigateTo={navigateTo} activePage={activePage} />

      {/* All page content is now handled by the HomePage component for one-pager structure */}
      <HomePage currentView={currentView} setCurrentView={setCurrentView} navigateTo={navigateTo} />

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
const HomePage = ({ currentView, setCurrentView, navigateTo }) => {
  // Function to switch to a specific case study view
  const handleViewCaseStudy = (caseStudyId) => {
    setCurrentView(caseStudyId);
    // Optional: Scroll to the top of the case study section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to go back to the default home page view
  const handleBackToPortfolio = () => {
    setCurrentView('default');
    // Optional: Scroll back to the portfolio section on the main page
    document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main-content">
      {currentView === 'default' && (
        <DefaultHomePageContent handleViewCaseStudy={handleViewCaseStudy} navigateTo={navigateTo} />
      )}
      {currentView === 'alarms-sacco' && (
        <AlarmsSaccoCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'pixel-waves' && (
        <PixelWavesCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'portrait-gallery' && (
        <PortraitGalleryCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'infographics-showcase' && ( // NEW: Infographics Case Study
        <InfographicsCaseStudy onBack={handleBackToPortfolio} />
      )}
    </main>
  );
};

// Component to hold the default home page sections
const DefaultHomePageContent = ({ handleViewCaseStudy, navigateTo }) => {
  return (
    <> {/* Removed redundant <main> tag here */}
      {/* Hero Header Section */}
      <section id="home" className="hero-section">
        <div className="hero-image-overlay" style={{ backgroundImage: "url('/img/portrait.jpg')" }}></div>
        <div className="hero-content">
          <h1 className="hero-tagline">
            Crafting Unique Experiences Through <br className="break-line" /> Design and Photography
          </h1>
          <p className="hero-description">
            Transforming visions into captivating visuals and intuitive user interfaces.
          </p>
          {/* Made the Explore My Portfolio button functional */}
          <button className="btn btn-primary hero-btn" onClick={() => navigateTo('portfolio-section')}>
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
            <button className="btn btn-secondary feature-btn" onClick={() => handleViewCaseStudy('alarms-sacco')}>
              View Case Study
            </button>
          </div>
          <div className="feature-image-container">
            <img
              src="/img/homepage-design.jpg" // Updated image path
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
            <button className="btn btn-secondary feature-btn" onClick={() => handleViewCaseStudy('pixel-waves')}> {/* Added onClick */}
              Explore Design
            </button>
          </div>
          <div className="feature-image-container">
            <img
              src="/img/home.jpg" // Updated image path
              alt="Pixel-Waves UI/UX Project Thumbnail"
              className="feature-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/D9CDE3/555555?text=Image+Unavailable"; }}
            />
          </div>
        </section>

        {/* Feature Section: Portrait Photography Gallery */}
        <section className="feature-section">
          <div className="feature-content">
            <h2 className="feature-title">Featured Work: Portrait Photography Gallery</h2>
            <p className="feature-description">
                Explore a curated collection of my portrait photography, showcasing diverse subjects, moods, and lighting techniques. This gallery highlights my ability to capture compelling stories and genuine emotions through the lens.
            </p>
            <button className="btn btn-secondary feature-btn" onClick={() => handleViewCaseStudy('portrait-gallery')}>
              Explore Photography
            </button>
          </div>
          <div className="feature-image-container">
            <img
              src="img/gallery/20.jpg" // Updated to use the user-provided image path
              alt="Portrait Photography Gallery Thumbnail"
              className="feature-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/CCD1D9/333333?text=Image+Unavailable"; }}
            />
          </div>
        </section>

        {/* NEW: Feature Section: Infographics & Poster Design */}
        <section className="feature-section feature-section--reversed">
          <div className="feature-content">
            <h2 className="feature-title">Infographics & Poster Design</h2>
            <p className="feature-description">
                A showcase of my infographic and poster design projects, demonstrating my ability to convey complex information visually and create impactful promotional materials with a minimalist aesthetic.
            </p>
            <button className="btn btn-secondary feature-btn" onClick={() => handleViewCaseStudy('infographics-showcase')}>
              View Infographics
            </button>
          </div>
          <div className="feature-image-container">
            <img
              src="img/international women's day.jpg" // User-provided image for this section
              alt="International Women's Day Poster Thumbnail"
              className="feature-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/8B8B9B/FFFFFF?text=Image+Unavailable"; }}
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
                {/* Updated Photography Icon */}
                <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4a2 2 0 002 2h14a2 2 0 002-2v-4M7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 100-2 1 1 0 000 2zM12 21a2 2 0 100-4 2 2 0 000 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3M5 12H3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12h-2" />
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
            Hello! I'm Curtis Mwarema, a Software Engineering student at Kisii University with a deep passion for UI/UX design, graphic design, and photography. Expected to graduate in 2026, my academic journey is complemented by hands-on experience in crafting intuitive digital experiences.
          </p>
          <p className="about-me-description">
            My expertise spans the entire UI/UX design lifecycle, from wireframing and prototyping to user testing with tools like Figma and Sketch. I also bring strong graphic design and branding skills using Adobe Illustrator, Photoshop, and Canva, ensuring a cohesive visual identity across all platforms. Beyond design, I'm an avid photographer, specializing in visual storytelling through composition, lighting, and post-production with DSLR and Lightroom/Photoshop.
          </p>
          <p className="about-me-description">
            I've applied these skills in various roles, including leading UI/UX design for student-led tech projects at asiliHub, and serving as a Class Representative, where I focused on user-centered design principles. When I'm not bringing digital visions to life or behind the lens, I enjoy exploring new coffee shops, staying updated on emerging tech trends, or experimenting with digital art.
          </p>
          <a href="/resume-v2 (1).pdf" download="Curtis_Mwarema_Resume.pdf" className="btn btn-primary about-me-btn">
            Download My Resume
          </a>
        </div>
        <div className="about-me-image-container">
          <img
            src="/img/curtis.jpg" // Updated image path
            alt="Your Portrait"
            className="about-me-image"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x600/C0C0C0/333333?text=Image+Unavailable"; }}
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        {/* <h2 className="testimonial-title">What Clients Say</h2>
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">
            "Working with Curtis Mwarema was an absolute pleasure! Their attention to detail in UI/UX design transformed our product, and their photography skills captured the essence of our brand perfectly. Highly recommend!"
          </blockquote>
          <p className="testimonial-author">- Alex Asili, CEO of asiliHub.</p>
        </div> */}
      </section>

      {/* Gallery Section (Existing one, can be removed if the new PortraitGallery replaces it) */}
      <section className="gallery-section">
        <h2 className="gallery-title">Design & Photography Showcase</h2>
        <div className="gallery-grid">
          {/* Gallery Item 1 */}
          <div className="gallery-item">
            <img
              src="/img/services.jpg" // Updated image path
              alt="Gallery Item Product UI Concept"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Product+UI+Concept"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Product UI Concept</p>
            </div>
          </div>
          {/* Gallery Item 2 */}
          <div className="gallery-item">
            <img
              src="/img/refresh-logo(white).jpg" // Updated image path
              alt="Gallery Item Branding Mockup"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Branding+Mockup"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Branding Mockup</p>
            </div>
          </div>
          {/* Gallery Item 3 */}
          <div className="gallery-item">
            <img
              src="/img/Landscape-2.jpg" // Updated image path
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
              src="/img/t-shirt.jpg" // Updated image path
              alt="Gallery Item Mobile App Screens"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Mock-ups</p>
            </div>
          </div>
          {/* Gallery Item 5 */}
          <div className="gallery-item">
            <img
              src="/img/portrait.jpg" // Updated image path
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
              src="/img/international women's day.jpg" // Updated image path
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
            I'm always eager to collaborate on exciting projects, discuss innovative design solutions, or capture your next visual story. Feel free to reach out using the direct contact details below.
          </p>
          {/* Removed the form as requested */}
          <div className="contact-details">
            <p>Email: <a href="mailto:curtismwarema01@gmail.com">curtismwarema01@gmail.com</a></p>
            <p>Phone: <a href="tel:+254768689553">+254768689553</a></p>
            <p>Connect: <a href="https://github.com/curtismwarema-25" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/curtis-mwarema-8b003534a" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://www.instagram.com/i.am_curtis/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
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
            <a href="#contact-section" onClick={() => navigateTo('contact-section')} className="btn btn-primary cta-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Component for the Alarms Sacco Case Study Detail
const AlarmsSaccoCaseStudy = ({ onBack }) => {
  return (
    <section id="case-study-detail-section" className="case-study-detail-section">
      <div className="case-study-header">
        <button onClick={onBack} className="btn btn-secondary back-btn">
          &larr; Back to Portfolio
        </button>
        <h1 className="case-study-title">Alarms Sacco UI/UX Design: A Case Study in Digital Transformation</h1>
      </div>

      <div className="case-study-content">
        <p className="case-study-intro">
          This case study details the design process for creating a brand new user interface and experience for Alarms Sacco, a microfinance institution venturing into digital services for the first time. The aim was to build a modern, intuitive, and accessible digital platform from the ground up, to streamline financial management for its members, encompassing savings, loans, and investments.
        </p>

        <h2 className="case-study-sub-title">Problem Statement</h2>
        <p>
          Alarms Sacco operated primarily through manual processes and limited digital tools, which created inefficiencies, slowed member services, and constrained scalability. Members faced challenges with paperwork, manual transactions, and a lack of real-time access to their financial information, impacting both their experience and the Sacco's operational capacity.
        </p>
        {/* Removed specific "old UI" image as per clarification */}

        <h2 className="case-study-sub-title">Goals of the Digital Transformation</h2>
        <ul className="case-study-list">
          <li>Establish a foundational digital presence and service platform.</li>
          <li>Ensure an intuitive and highly user-friendly experience for all members.</li>
          <li>Digitize and streamline core financial processes (e.g., account opening, loan application, savings tracking).</li>
          <li>Design an interface that is visually modern, professional, and trustworthy.</li>
          <li>Provide real-time access to financial information and transaction history.</li>
          <li>Enhance operational efficiency and scalability for the Sacco.</li>
        </ul>

        <h2 className="case-study-sub-title">Page Breakdown & Design Choices</h2>

        {/* Homepage Design */}
        <h3>Homepage Design</h3>
        <img src="/img/homepage-design.jpg" alt="Alarms Sacco Homepage Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Homepage+Design"; }} />
        <p>
          The Homepage was designed as the primary entry point, focusing on a clean, inviting aesthetic with clear calls to action. The goal was to instill confidence and guide users towards key services from the moment they land on the site.
          <ul className="case-study-list">
            <li>**Modern Aesthetic:** Utilizes soft colors and smooth gradients to create a trustworthy and contemporary feel.</li>
            <li>**Prominent Value Proposition:** The "Shape Your Financial Future with Confidence" headline immediately communicates the core benefit.</li>
            <li>**Trust Indicators:** "Trusted by 15,000+ members" reinforces credibility.</li>
            <li>**Streamlined Navigation:** A simple top navigation ensures easy access to essential pages like About Us, Services, Staff, and Contact.</li>
          </ul>
        </p>

        {/* About Us Page */}
        <h3>About Us Page Design</h3>
        <img src="/img/About Us.jpg" alt="Alarms Sacco About Us Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=About+Us+Page"; }} />
        <p>
          The About Us page focuses on building trust and community, showcasing the Sacco's mission and values. It emphasizes the human element and the Sacco's commitment to empowering its members.
          <ul className="case-study-list">
            <li>**Community Focus:** The central image of hands joined together strongly symbolizes unity and collective strength.</li>
            <li>**Clear Mission & Vision:** Dedicated sections articulate the Sacco's core purpose and future aspirations.</li>
            <li>**Value Highlight:** Key principles like "Integrity," "Innovation," and "Community" are presented to convey the Sacco's ethos.</li>
            <li>**Impactful Statistics:** Features "15,000+ members" to demonstrate growth and widespread trust.</li>
          </ul>
        </p>

        {/* Services Page */}
        <h3>Services Page Design</h3>
        <img src="/img/Services.jpg" alt="Alarms Sacco Services Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Services+Page"; }} />
        <p>
          The Services page is designed to clearly present the financial products offered by Alarms Sacco in an easily digestible format, empowering members with smart financial tools.
          <ul className="case-study-list">
            <li>**Visual Categorization:** Services are organized into distinct, visually appealing cards ("Savings Accounts," "Loan Products," "Investment Plans").</li>
            <li>**Benefit-Oriented Descriptions:** Each card provides concise text highlighting the key advantages and features of the service.</li>
            <li>**Metaphorical Imagery:** The background image featuring money in a growing plant pot visually reinforces the idea of financial growth and nurturing.</li>
            <li>**Call to Empowerment:** The tagline "Smart financial tools built to empower every member" resonates with the target audience's financial goals.</li>
          </ul>
        </p>

        {/* Staff Page */}
        <h3>Staff Page Design</h3>
        <img src="/img/staff.jpg" alt="Alarms Sacco Staff Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Staff+Page"; }} />
        <p>
          The Staff page aims to introduce the team behind Alarms Sacco, fostering trust and a personal connection with members by showcasing the individuals dedicated to their financial success.
          <ul className="case-study-list">
            <li>**Engaging Portraits:** Features large, high-quality images of team members that convey approachability and professionalism.</li>
            <li>**Dynamic Composition:** The layout uses overlapping images and a celebratory background to create a vibrant and positive impression of the team.</li>
            <li>**Emphasis on Trust:** The prominent headline "Meet Our Team" directly invites users to connect with the people supporting their financial journeys.</li>
            <li>**Reinforcing Commitment:** The tagline "Dedicated to your financial success" assures members of the team's unwavering support.</li>
          </ul>
        </p>

        {/* Contact Page */}
        <h3>Contact Page Design</h3>
        <img src="/img/Contact.jpg" alt="Alarms Sacco Contact Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Contact+Page"; }} />
        <p>
          The Contact page provides clear and accessible ways for members to reach out to Alarms Sacco, designed for ease of use and to ensure all queries are addressed efficiently.
          <ul className="case-study-list">
            <li>**Centralized Information:** All key contact details (phone, email, physical location, hours) are presented in a clean, organized block.</li>
            <li>**Visual Aid:** An integrated map provides a quick geographical reference, making it easier for members to locate the headquarters.</li>
            <li>**Human Touch:** The subtle background image of a person on the phone reinforces the idea of direct communication and support.</li>
            <li>**Clear Call to Action:** "Get Directions" button guides users to the physical location effortlessly.</li>
          </ul>
        </p>
      </div>

      <div className="case-study-footer">
        <button onClick={onBack} className="btn btn-primary">
          Back to Portfolio
        </button>
      </div>
    </section>
  );
};

// NEW: Component for the Pixel-Waves Case Study Detail
const PixelWavesCaseStudy = ({ onBack }) => {
  return (
    <section id="case-study-detail-section" className="case-study-detail-section">
      <div className="case-study-header">
        <button onClick={onBack} className="btn btn-secondary back-btn">
          &larr; Back to Portfolio
        </button>
        <h1 className="case-study-title">Pixel-Waves UI/UX Experience: Designing a Digital Art Platform</h1>
      </div>

      <div className="case-study-content">
        <p className="case-study-intro">
          This case study explores the design process behind "Pixel-Waves," a creative digital art platform aimed at fostering artistic exploration, collaboration, and community among digital artists. The focus was on creating a visually harmonious and intuitively navigable experience across various key pages.
        </p>

        <h2 className="case-study-sub-title">Design Philosophy</h2>
        <p>
          The core design philosophy for Pixel-Waves centered on minimalism, dark mode aesthetics, and clear content hierarchy to allow the vibrant digital art to truly shine. We aimed for an experience that felt both professional and inspiring, enabling seamless navigation for artists and art enthusiasts alike.
        </p>

        <h2 className="case-study-sub-title">Page Breakdown & Design Choices</h2>

        {/* Home Page */}
        <h3>Home Page Design</h3>
        <img src="/img/home.jpg" alt="Pixel-Waves Home Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=Home+Page"; }} />
        <p>
          The Home page serves as the grand entry to Pixel-Waves. Its design emphasizes a captivating hero section with dynamic visuals to immediately immerse the user in the artistic atmosphere. Key design choices included:
          <ul className="case-study-list">
            <li>**Dark Theme:** Establishes a sophisticated and modern feel, making bright artwork pop.</li>
            <li>**Intuitive Navigation:** A streamlined top navigation bar (Home, Products, Pricing, User Support, News, Scholars, Contact) ensures easy access to main sections.</li>
            <li>**Clear Call to Action:** "Explore Our Solutions" is prominently placed to guide users.</li>
            <li>**Minimalist Layout:** Reduces clutter, allowing focus on the core message and visual appeal.</li>
          </ul>
        </p>

        {/* Products Page */}
        <h3>Products Page Design</h3>
        <img src="/img/products.jpg" alt="Pixel-Waves Products Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=Products+Page"; }} />
        <p>
          The Products page is designed to showcase Pixel-Waves' offerings in a visually engaging and informative manner. Design considerations included:
          <ul className="case-study-list">
            <li>**Visual Storytelling:** Uses large, impactful imagery to represent each product, immediately conveying their essence.</li>
            <li>**Segmented Information:** Clearly separates different products (PixelSchool, PixelHR, PixelDesk) with concise descriptions.</li>
            <li>**"Learn More" CTAs:** Provides clear pathways for users to delve deeper into specific product details.</li>
            <li>**Consistent Branding:** Maintains the dark theme and clean typography for a unified brand experience.</li>
          </ul>
        </p>

        {/* Pricing Page */}
        <h3>Pricing Page Design</h3>
        <img src="/img/pricing.jpg" alt="Pixel-Waves Pricing Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=Pricing+Page"; }} />
        <p>
          The Pricing page aims for transparency and ease of comparison, helping users choose the best plan for their needs. Key design elements:
          <ul className="case-study-list">
            <li>**Tiered Structure:** Clearly presents Starter, Pro, and Enterprise plans side-by-side for easy comparison.</li>
            <li>**Feature Highlighting:** Uses bullet points to quickly convey the benefits of each tier.</li>
            <li>**Prominent Pricing:** Pricing is visible and easy to understand.</li>
            <li>**Support for Decision Making:** "Need Help Choosing?" section with a "Talk to an Expert" CTA to assist users.</li>
          </ul>
        </p>

        {/* User Support Page */}
        <h3>User Support Page Design</h3>
        <img src="/img/userSupport.jpg" alt="Pixel-Waves User Support Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=User+Support+Page"; }} />
        <p>
          The User Support page is crafted to quickly direct users to the help they need, minimizing frustration. Design choices focused on:
          <ul className="case-study-list">
            <li>**Search-First Approach:** A prominent search bar allows users to find solutions rapidly.</li>
            <li>**Categorized Support:** Divides common issues into clear categories (Getting Started, Troubleshooting, Account & Billing, Product Guides).</li>
            <li>**Direct Contact Option:** Ensures users can easily reach out to support if self-help options aren't sufficient.</li>
            <li>**Clean and Uncluttered Layout:** Facilitates quick scanning and reduces cognitive load.</li>
          </ul>
        </p>

        {/* News and Updates Page */}
        <h3>News and Updates Page Design</h3>
        <img src="/img/News and Updates.jpg" alt="Pixel-Waves News and Updates Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=News+Page"; }} />
        <p>
          The News and Updates page keeps the community informed about Pixel-Waves' latest developments and insights. Design considerations included:
          <ul className="case-study-list">
            <li>**Chronological Order:** Presents updates in a clear, date-ordered list.</li>
            <li>**Snippet Previews:** Provides a brief overview for each update, encouraging users to click "Read More."</li>
            <li>**Newsletter Subscription:** A dedicated section to capture user interest for future updates.</li>
            <li>**Consistent Visuals:** Maintains the dark theme, reinforcing brand identity.</li>
          </ul>
        </p>
      </div>

      <div className="case-study-footer">
        <button onClick={onBack} className="btn btn-primary">
          Back to Portfolio
        </button>
      </div>
    </section>
  );
};

// NEW: Component for Portrait Photography Gallery Case Study
const PortraitGalleryCaseStudy = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portraitImages = [
   "img/gallery/1.jpg",
    "img/gallery/2.jpg",
    "img/gallery/3.jpg",
    "img/gallery/4.jpg",
    "img/gallery/5.jpg",
    "img/gallery/6.jpg",
    "img/gallery/7.jpg",
    "img/gallery/8.jpg",
    "img/gallery/9.jpg",
    "img/gallery/10.jpg",
    "img/gallery/11.jpg",
    "img/gallery/12.jpg",
    "img/gallery/13.jpg",
    "img/gallery/14.jpg",
    "img/gallery/15.jpg",
    "img/gallery/16.jpg",
    "img/gallery/17.jpg",
    "img/gallery/18.jpg",
    "img/gallery/19.jpg",
    "img/gallery/20.jpg",
    "img/gallery/21.jpg",
    "img/gallery/22.jpg",
    "img/gallery/23.jpg",
    "img/gallery/24.jpg",
    "img/gallery/25.jpg",
    "img/gallery/26.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % portraitImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [portraitImages.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + portraitImages.length) % portraitImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % portraitImages.length);
  };

  return (
    <section id="case-study-detail-section" className="case-study-detail-section">
      <div className="case-study-header">
        <button onClick={onBack} className="btn btn-secondary back-btn">
          &larr; Back to Portfolio
        </button>
        <h1 className="case-study-title">Portrait Photography: Capturing Stories and Emotions</h1>
      </div>

      <div className="case-study-content">
        <p className="case-study-intro">
          This gallery showcases a selection of my portrait photography work, demonstrating my approach to capturing the unique essence and personality of each individual. My goal is to create compelling visual narratives that resonate with the viewer and reflect genuine human emotion.
        </p>

        <h2 className="case-study-sub-title">Featured Portraits Carousel</h2>
        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {portraitImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Portrait ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </div>
          <button className="carousel-button carousel-button--prev" onClick={goToPrevSlide}>
            &#10094;
          </button>
          <button className="carousel-button carousel-button--next" onClick={goToNextSlide}>
            &#10095;
          </button>
          <div className="carousel-dots">
            {portraitImages.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <p>
          This carousel presents a rotating selection of my favorite portrait shots, allowing for a dynamic and immersive viewing experience. Each image is chosen to highlight different aspects of my photographic style, from intimate close-ups to environmental portraits.
        </p>

        <h2 className="case-study-sub-title">Asymmetric Gallery Showcase</h2>
        <p>
          Below is a more extensive collection displayed in an asymmetric grid, designed to provide a visually interesting and seamless flow between images, emphasizing variety and individual composition. The minimal gaps ensure a cohesive visual tapestry.
        </p>
        <div className="asymmetric-gallery">
          {portraitImages.map((image, index) => (
            <img key={index} src={image} alt={`Portrait ${index + 1}`} className={`gallery-image gallery-image-${index + 1}`} />
          ))}
        </div>
        {/* <p>
          The asymmetric layout allows for a natural visual progression, where each portrait contributes to the overall artistic impact. The interplay of different sizes and orientations creates a dynamic yet harmonious display, inviting viewers to explore each unique story.
        </p> */}
      </div>

      <div className="case-study-footer">
        <button onClick={onBack} className="btn btn-primary">
          Back to Portfolio
        </button>
      </div>
    </section>
  );
};

// NEW: Component for Infographics and Poster Design Case Study
const InfographicsCaseStudy = ({ onBack }) => {
  const infographics = [
    {
      image: "img/international women's day.jpg",
      alt: "International Women's Day Poster",
      title: "International Women's Day Poster",
      description: "A poster designed for Kisii University's International Women's Day 2025 event, focusing on empowerment through education, leadership, and community.",
      designChoices: [
        "Strong use of white space and a clean blue and white color palette.",
        "Large, bold typography for 'THIS SATURDAY MARCH 8TH' for immediate impact.",
        "Minimal graphic elements, relying on a central empowering image and clear text blocks.",
        "Simple geometric shapes (the '8th') as a visual anchor."
      ]
    },
    {
      image: "img/happy new week II.jpg",
      alt: "Happy New Week II Poster",
      title: "Happy New Week II Poster (AsiliHub)",
      description: "A vibrant greeting poster for 'AsiliHub,' wishing a powerful start to the new week, emphasizing new energy and opportunities.",
      designChoices: [
        "Striking pink background for energy and contrast.",
        "Large, bold 'HAPPY NEW WEEK' text as the central element.",
        "Minimal text for the core message and contact info.",
        "Clean, sans-serif fonts.",
        "A single, dynamic human figure adds energy without clutter."
      ]
    },
    {
      image: "img/APP DEV.png",
      alt: "App Dev Poster",
      title: "App Development Promotion Poster (AsiliHub)",
      description: "A promotional poster for 'AsiliHub' inviting potential clients to collaborate on app, game, or website development.",
      designChoices: [
        "Dominant hot pink background, consistent with AsiliHub branding.",
        "Large, concise question ('Have an idea for an app, game, or website? Let's build it together!') for direct engagement.",
        "Minimal supporting text at the bottom.",
        "A single, positive image of a person working on a laptop, conveying collaboration and expertise.",
        "Clear contact information and social media icons."
      ]
    },
    {
      image: "img/poise and purpose gala v4.jpg",
      alt: "Poise and Purpose Gala Poster",
      title: "Poise and Purpose Gala Noir Poster",
      description: "An event announcement poster for 'Poise & Purpose Gala Noir' with an Afro-Elegant (Royal) theme.",
      designChoices: [
        "Rich, warm color palette (browns, golds) for elegance.",
        "Central, strong portrait of a woman in traditional attire, making it visually compelling.",
        "Minimal text, primarily for event name, theme, and contact details.",
        "Geometric yellow frame highlights key information ('GALA NOIR').",
        "Clean typography that complements the elegant theme."
      ]
    }
  ];

  return (
    <section id="case-study-detail-section" className="case-study-detail-section">
      <div className="case-study-header">
        <button onClick={onBack} className="btn btn-secondary back-btn">
          &larr; Back to Portfolio
        </button>
        <h1 className="case-study-title">Infographics & Poster Design: Visualizing Information & Impact</h1>
      </div>

      <div className="case-study-content">
        <p className="case-study-intro">
          This section showcases my work in infographics and poster design, highlighting my ability to distill complex messages into clear, concise, and visually engaging formats. My approach emphasizes minimalism, strong typography, and strategic use of imagery to create maximum impact.
        </p>

        {infographics.map((item, index) => (
          <div key={index} className="infographic-project">
            <h2 className="case-study-sub-title">{item.title}</h2>
            <img src={item.image} alt={item.alt} className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x1200/B0C0D0/333333?text=Image+Unavailable"; }} />
            <p>{item.description}</p>
            <h3>Design Choices:</h3>
            <ul className="case-study-list">
              {item.designChoices.map((choice, i) => (
                <li key={i}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="case-study-footer">
        <button onClick={onBack} className="btn btn-primary">
          Back to Portfolio
        </button>
      </div>
    </section>
  );
};


// Footer Component (remains the same)
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

export default App;
