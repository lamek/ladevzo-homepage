import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom'; // Import Outlet
import './App.css';
import './animations.css';
import './pages.css'; // Make sure pages.css is imported here
import usePageTracking from './hooks/usePageTracking';
import { useLocation } from 'react-router-dom'; // We need this to know the current URL

// Page Components
import GooglePhotosAppsPage from './pages/GooglePhotosAppsPage.jsx';
import BuildersLogPage from './pages/BuildersLogPage.jsx';
import HundredIdeasPage from './pages/HundredIdeasPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';     // NEW: Import Privacy Policy
import TermsOfServicePage from './pages/TermsOfServicePage.jsx'; // NEW: Import Terms of Service

//Blog
import Post01_GettingStuck from './blog/Post01_GettingStuck';
import Post02_GmailShuffle from './blog/Post02_GmailShuffle';

// Layout Component
import PageLayout from './components/PageLayout.jsx'; // NEW: Import the layout

// This is the component for the homepage content
function Homepage() {
  // Track the homepage explicitly
  usePageTracking('homepage');
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`hero-section ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="ladevzo-title">LADEVZO</h1>
        <p className="tagline">
          The home of <span className="highlight">Google Photos Apps</span> & <br />
          <span className="highlight">Zero-to-AI</span> Cloud Engineering.
        </p>
        
        {/* NAV FIX: We will add CSS to make these stack on mobile */}
        <nav className="hero-nav">
          <Link to="/photos-apps" className="cta-button">Use the Apps</Link>
          <Link to="/builders-log" className="cta-button">Read the Builder's Log</Link>
        </nav>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow-down"></div>
        </div>
      </header>

      {/* ... keeping the rest of the sections, just updating the titles ... */}
      <main className="content-sections">
        <section className="section">
          <h2>Google Photos Tools</h2>
          <p>Bespoke applications designed to unlock your library, from Exif data to dynamic slideshows.</p>
          <Link to="/photos-apps" className="cta-button">Browse Apps</Link>
        </section>

        <section className="section">
          <h2>Zero to AI</h2>
          <p>
            A chronicle of building intelligent systems without breaking the bank. 
            Follow the journey of leveraging Google Cloud's free tier.
          </p>
          <Link to="/builders-log" className="cta-button">Start Reading</Link>
        </section>
        
        {/* Contact section remains the same */}
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
          <Route path="/builders-log" element={<BuildersLogPage />} />
          <Route path="/100-ideas" element={<HundredIdeasPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/blog/getting-stuck" element={<Post01_GettingStuck />} />
          <Route path="/blog/gmail-shuffle" element={<Post02_GmailShuffle />} />
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
