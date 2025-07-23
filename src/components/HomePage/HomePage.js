import React, { useState, useEffect } from 'react';
import DefaultHomePageContent from './DefaultHomePageContent';
import { AlarmsSaccoCaseStudy, PixelWavesCaseStudy, PortraitGalleryCaseStudy, InfographicsCaseStudy } from '../CaseStudies/CaseStudies';

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
    document.getElementById('portfolio-showcase-container')?.scrollIntoView({ behavior: 'smooth' });
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

export default HomePage;
