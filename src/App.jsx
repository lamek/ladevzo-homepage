import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom'; // Import Outlet
import './App.css';
import './animations.css';
import './pages.css'; // Make sure pages.css is imported here

// Page Components
import GooglePhotosAppsPage from './pages/GooglePhotosAppsPage.jsx';
import AIExplorationsPage from './pages/AIExplorationsPage.jsx';
import HundredIdeasPage from './pages/HundredIdeasPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';     // NEW: Import Privacy Policy
import TermsOfServicePage from './pages/TermsOfServicePage.jsx'; // NEW: Import Terms of Service

// Layout Component
import PageLayout from './components/PageLayout.jsx'; // NEW: Import the layout

// This is the component for the homepage content
function Homepage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`hero-section ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="ladevzo-title">LADEVZO</h1>
        <p className="tagline">Your nexus for <span className="highlight">Google Photos Apps</span> & <span className="highlight">AI Explorations</span>.</p>
        <nav className="hero-nav">
          <Link to="/photos-apps" className="cta-button">Explore Photos Apps</Link>
          <Link to="/ai-explorations" className="cta-button">Discover AI Explorations</Link>
        </nav>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow-down"></div>
        </div>
      </header>

      <main className="content-sections">
        <section className="section">
          <h2>Unlocking Your Google Photos</h2>
          <p>Dive into bespoke applications designed to enhance, organize, and transform your Google Photos experience. From smart archiving to unique sharing tools like <strong>Slideshow</strong>, discover new ways to interact with your memories.</p>
          <Link to="/photos-apps" className="cta-button">Learn More</Link>
        </section>

        <section className="section">
          <h2>Pioneering AI Frontiers</h2>
          <p>Join us on a journey through cutting-edge Artificial Intelligence. We explore practical AI solutions, experiment with new models, and share insights into the future of intelligent systems.</p>
          <Link to="/ai-explorations" className="cta-button">Learn More</Link>
        </section>

        <section className="section contact-section">
          <h2>Let's Connect</h2>
          <p>Have an idea or a project in mind? We'd love to hear from you.</p>
          <a href="mailto:ladevzo-contact@googlegroups.com" className="contact-link">Get in Touch</a>
        </section>
      </main>
    </>
  );
}


function App() {
  return (
    <div className="app-container">
      {/* Routes now define the page content */}
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />

        {/* NEW: Group all other pages under the PageLayout.
          This layout will render the sub-nav and the correct page.
        */}
        <Route element={<PageLayout />}>
          <Route path="/photos-apps" element={<GooglePhotosAppsPage />} />
          <Route path="/ai-explorations" element={<AIExplorationsPage />} />
          <Route path="/100-ideas" element={<HundredIdeasPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Route>
      </Routes>

      {/* UPDATED: This footer remains consistent across all pages.
        I've added the links you requested.
      */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/privacy-policy" className="contact-link">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-of-service" className="contact-link">Terms of Service</Link>
          <span>|</span>
          <a href="mailto:ladevzo-contact@googlegroups.com" className="contact-link">Contact Us</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Ladevzo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;