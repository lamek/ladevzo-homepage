import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import './animations.css';
import './pages.css';

// Page Components
import GooglePhotosAppsPage from './pages/GooglePhotosAppsPage.jsx';
import ScrappyPathPage from './pages/ScrappyPathPage.jsx'; // Renamed import for internal clarity
import HundredIdeasPage from './pages/HundredIdeasPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';

// Blog
import StaticSitePost from './blog/StaticSitePost.jsx';
import BuildPersonalSitePost from './blog/BuildPersonalSitePost.jsx';


// Layout Component
import PageLayout from './components/PageLayout.jsx';

function Homepage() {
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
          <span className="highlight">The Scrappy Path</span> blog on building and AI.
        </p>
        
        <nav className="hero-nav">
          <Link to="/photos-apps" className="cta-button">Use the Apps</Link>
          <Link to="/scrappy-path" className="cta-button">The Scrappy Path</Link>
        </nav>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow-down"></div>
        </div>
      </header>

      <main className="content-sections">
        <section className="section">
          <h2>Google Photos Tools</h2>
          <p>Bespoke applications designed to unlock your library.</p>
          <Link to="/photos-apps" className="cta-button">Browse Apps</Link>
        </section>

        <section className="section">
          <h2>The Scrappy Path</h2>
          <p>
            Building intelligent systems without breaking the bank. 
            Follow the journey of leveraging Google Cloud's free tier.
          </p>
          <Link to="/scrappy-path" className="cta-button">Start Reading</Link>
        </section>
        
        <section className="section contact-section centered-section">
           <h2>Let's Connect</h2>
           <a href="mailto:ladevzo-contact@googlegroups.com" className="contact-link">Get in Touch</a>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<PageLayout />}>
          <Route path="/photos-apps" element={<GooglePhotosAppsPage />} />
          <Route path="/scrappy-path" element={<ScrappyPathPage />} />
          <Route path="/100-ideas" element={<HundredIdeasPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/scrappy-path/static-site-post" element={<StaticSitePost />} />
          <Route path="/scrappy-path/build-your-site" element={<BuildPersonalSitePost />} />
        </Route>
      </Routes>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/privacy-policy" className="contact-link">Privacy</Link>
          <span>|</span>
          <Link to="/terms-of-service" className="contact-link">Terms</Link>
          <span>|</span>
          <Link to="/scrappy-path" className="contact-link">Blog</Link>
          <span>|</span>
          <a href="mailto:ladevzo-contact@googlegroups.com" className="contact-link">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Ladevzo.</p>
      </footer>
    </div>
  );
}

export default App;