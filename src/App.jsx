import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // Import Link, Routes, Route
import './App.css'; // Your main styles
import './animations.css'; // Styles for specific animations
import GooglePhotosAppsPage from './pages/GooglePhotosAppsPage'; // New Page Component
import AIExplorationsPage from './pages/AIExplorationsPage'; // New Page Component
import HundredIdeasPage from './pages/HundredIdeasPage'; // NEW: Import HundredIdeasPage


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Conditionally render header based on route. For a complex header, you might want a separate Layout component. */}
      {/* For simplicity now, we'll keep the hero section only on the homepage "/" */}
      <Routes>
        <Route path="/" element={
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
                <p>Dive into bespoke applications designed to enhance, organize, and transform your Google Photos experience. From smart archiving to unique sharing tools, discover new ways to interact with your memories.</p>
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
        } />
        {/* Define routes for your new pages */}
        <Route path="/photos-apps" element={<GooglePhotosAppsPage />} />
        <Route path="/ai-explorations" element={<AIExplorationsPage />} />
        <Route path="/100-ideas" element={<HundredIdeasPage />} />
      </Routes>

      {/* Footer remains consistent across all pages */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ladevzo. All rights reserved.</p>
        {/* Add a home link to the footer for easy navigation back */}
        <p><Link to="/" className="contact-link">Back to Homepage</Link></p>
      </footer>
    </div>
  );
}

export default App;