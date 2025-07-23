import React, { useState, useEffect } from 'react';

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
          This case study details the design and user experience work for Pixelwave Systems, the official website for an asiliHub subsidiary focused on software product development. My role involved designing a comprehensive, intuitive platform to showcase and support their diverse software offerings.
        </p>

        <h2 className="case-study-sub-title">Design Philosophy</h2>
        <p>
          The core design philosophy for Pixelwave Systems centered on user-centered design principles, robust information architecture, and visual consistency. The aim was to create a highly functional and intuitive website that effectively showcases their software products and provides seamless support, ensuring a professional and informative experience for all users.
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
        <img src={process.env.PUBLIC_URL + '/img/homepage-design.jpg'} alt="Alarms Sacco Homepage Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Homepage+Design"; }} />
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
        <img src={process.env.PUBLIC_URL + '/img/About Us.jpg'} alt="Alarms Sacco About Us Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=About+Us+Page"; }} />
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
        <img src={process.env.PUBLIC_URL + '/img/Services.jpg'} alt="Alarms Sacco Services Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Services+Page"; }} />
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
        <img src={process.env.PUBLIC_URL + '/img/staff.jpg'} alt="Alarms Sacco Staff Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Staff+Page"; }} />
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
        <img src={process.env.PUBLIC_URL + '/img/Contact.jpg'} alt="Alarms Sacco Contact Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/CCAAEE/333333?text=Contact+Page"; }} />
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
        <h1 className="case-study-title">Pixelwave Systems: Designing a Comprehensive Software Platform</h1>
      </div>

      <div className="case-study-content">
        <p className="case-study-intro">
          This case study details the design and user experience work for Pixelwave Systems, the official website for an asiliHub subsidiary focused on software product development. My role involved designing a comprehensive, intuitive platform to showcase and support their diverse software offerings.
        </p>

        <h2 className="case-study-sub-title">Design Philosophy</h2>
        <p>
          The core design philosophy for Pixelwave Systems centered on user-centered design principles, robust information architecture, and visual consistency. The aim was to create a highly functional and intuitive website that effectively showcases their software products and provides seamless support, ensuring a professional and informative experience for all users.
        </p>

        <h2 className="case-study-sub-title">Page Breakdown & Design Choices</h2>

        {/* Home Page */}
        <h3>Home Page Design</h3>
        <img src={process.env.PUBLIC_URL + '/img/home.jpg'} alt="Pixelwave Systems Home Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=Home+Page"; }} />
        <p>
          The Home page serves as the grand entry to Pixelwave Systems. Its design emphasizes a captivating hero section with dynamic visuals to immediately immerse the user in the software ecosystem. Key design choices included:
          <ul className="case-study-list">
            <li>**Modern Aesthetic:** Utilizes a clean, professional design with clear calls to action.</li>
            <li>**Intuitive Navigation:** A streamlined top navigation bar (Home, Products, Pricing, User Support, News, Community, Contact) ensures easy access to main sections.</li>
            <li>**Clear Call to Action:** "Explore Our Solutions" is prominently placed to guide users.</li>
            <li>**User-Centric Layout:** Reduces clutter, allowing focus on the core message and visual appeal, facilitating easy information discovery.</li>
          </ul>
        </p>

        {/* Products Page */}
        <h3>Products Page Design</h3>
        <img src={process.env.PUBLIC_URL + '/img/products.jpg'} alt="Pixel-Waves Products Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=Products+Page"; }} />
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
        <img src={process.env.PUBLIC_URL + '/img/pricing.jpg'} alt="Pixel-Waves Pricing Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=Pricing+Page"; }} />
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
        <img src={process.env.PUBLIC_URL + '/img/userSupport.jpg'} alt="Pixel-Waves User Support Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=User+Support+Page"; }} />
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
        <img src={process.env.PUBLIC_URL + '/img/News and Updates.jpg'} alt="Pixel-Waves News and Updates Page Design" className="case-study-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x700/000000/FFFFFF?text=News+Page"; }} />
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

  // Generate image paths from 1.jpg to 26.jpg in the public/img folder
  const portraitImages = Array.from({ length: 26 }, (_, i) => `${process.env.PUBLIC_URL}/img/${i + 1}.jpg`);

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
      image: process.env.PUBLIC_URL + "/img/international women's day.jpg", // Corrected to use process.env.PUBLIC_URL
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
      image: process.env.PUBLIC_URL + "/img/happy new week II.jpg", // Corrected to use process.env.PUBLIC_URL
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
      image: process.env.PUBLIC_URL + "/img/APP DEV.png", // Corrected to use process.env.PUBLIC_URL
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
      image: process.env.PUBLIC_URL + "/img/poise and purpose gala v4.jpg", // Corrected to use process.env.PUBLIC_URL
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

export { AlarmsSaccoCaseStudy, PixelWavesCaseStudy, PortraitGalleryCaseStudy, InfographicsCaseStudy };
