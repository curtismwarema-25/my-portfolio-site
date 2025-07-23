import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

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

      {/* Navbar Component */}
      <Navbar navigateTo={navigateTo} activePage={activePage} />

      {/* All page content is now handled by the HomePage component for one-pager structure */}
      <HomePage currentView={currentView} setCurrentView={setCurrentView} navigateTo={navigateTo} />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
