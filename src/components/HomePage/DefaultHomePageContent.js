import React from 'react';
import { useState, useEffect } from 'react'; // Keep useState and useEffect for potential future use or if other components in this file need them

// Component to hold the default home page sections
const DefaultHomePageContent = ({ handleViewCaseStudy, navigateTo }) => {
  return (
    <> {/* Removed redundant <main> tag here */}
      {/* Hero Header Section */}
      <section id="home" className="hero-section">
        <div className="hero-image-overlay" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/8.jpg'})` }}></div>
        <div className="hero-content">
          <h1 className="hero-tagline">
            Crafting Unique Experiences Through <br className="break-line" /> Design and Photography
          </h1>
          <p className="hero-description">
            Transforming visions into captivating visuals and intuitive user interfaces.
          </p>
          {/* Made the Explore My Portfolio button functional */}
          <button className="btn btn-primary hero-btn" onClick={() => navigateTo('portfolio-showcase-container')}>
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
              src={process.env.PUBLIC_URL + '/img/homepage-design.jpg'} // Updated image path
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
                Designed the comprehensive user interface and experience for Pixelwave Systems, a new asiliHub subsidiary dedicated to software product development. My work focused on creating a highly functional and intuitive website that effectively showcases their offerings.

                Key contributions included:

                Product Showcase: Designed detailed and engaging pages for core systems like the Pixel School Management System, ensuring clear feature presentation and user navigation.

                Subscription & Pricing Plans: Developed clear, user-friendly layouts for various service tiers, optimizing for easy comparison and decision-making.

                User Support & Documentation: Structured intuitive sections for guides, FAQs, and customer support, enhancing user self-service and problem resolution.

                News & Updates: Created visually appealing announcement sections for new features and project developments.

                Community & Learning Hub: Designed an engaging platform for blogs, webinars, and case studies, fostering a vibrant user community.

                This project emphasized a strong focus on information architecture, user-centered design principles, and visual consistency to create a seamless and informative experience for software product users.
            </p>
            <button className="btn btn-secondary feature-btn" onClick={() => handleViewCaseStudy('pixel-waves')}> {/* Added onClick */}
              Explore Design
            </button>
          </div>
          <div className="feature-image-container">
            <img
              src={process.env.PUBLIC_URL + '/img/home.jpg'} // Updated image path
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
              src={process.env.PUBLIC_URL + '/img/9.jpg'} // Corrected to use process.env.PUBLIC_URL and new path
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
              src={process.env.PUBLIC_URL + "/img/international women's day.jpg"} // Corrected to use process.env.PUBLIC_URL
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
          <a href={process.env.PUBLIC_URL + "/resume.pdf"} download="Curtis_Mwarema_Resume.pdf" className="btn btn-primary about-me-btn">
            Download My Resume
          </a>
        </div>
        <div className="about-me-image-container">
          <img
            src={process.env.PUBLIC_URL + '/img/curtis.jpg'} // Updated image path
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
              src={process.env.PUBLIC_URL + '/img/Services.jpg'} // Updated image path
              alt="Gallery Item Product UI Concept"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x750/94A3B8/FFFFFF?text=Product+UI+Concept"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Product UI Concept</p>
            </div>
          </div>
          {/* Gallery Item 2 */}
          <div className="gallery-item">
            <img
              src={process.env.PUBLIC_URL + '/img/refresh-logo(white).jpg'} // Updated image path
              alt="Gallery Item Branding Mockup"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x750/94A3B8/FFFFFF?text=Branding+Mockup"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Branding Mockup</p>
            </div>
          </div>
          {/* Gallery Item 3 */}
          <div className="gallery-item">
            <img
              src={process.env.PUBLIC_URL + '/img/Landscape-2.jpg'} // Updated image path
              alt="Gallery Item Landscape Photography"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x750/94A3B8/FFFFFF?text=Landscape+Photography"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Landscape Photography</p>
            </div>
          </div>
          {/* Gallery Item 4 */}
          <div className="gallery-item">
            <img
              src={process.env.PUBLIC_URL + '/img/t-shirt.jpg'} // Updated image path
              alt="Gallery Item Mobile App Screens"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x750/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Mock-ups</p>
            </div>
          </div>
          {/* Gallery Item 5 */}
          <div className="gallery-item">
            <img
              src={process.env.PUBLIC_URL + '/img/portrait.jpg'} // Updated image path
              alt="Gallery Item Portrait Session"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x750/94A3B8/FFFFFF?text=Image+Unavailable"; }}
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">Portrait Session</p>
            </div>
          </div>
          {/* Gallery Item 6: Poster Design */}
          <div className="gallery-item">
            <img
              src={process.env.PUBLIC_URL + "/img/international women's day.jpg"} // Updated image path
              alt="Gallery Item Poster Design"
              className="gallery-item-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x750/8B8B9B/FFFFFF?text=Image+Unavailable"; }}
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

export default DefaultHomePageContent;
