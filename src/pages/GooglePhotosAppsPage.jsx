import React from 'react';
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE
import '../App.css'; // For general styling
import '../pages.css'; // For specific page styling

function GooglePhotosAppsPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title gradient-text">Google Photos Apps & Tools</h1>
        <p className="page-intro">
          Exploring the vast potential of the Google Photos APIs, Ladevzo is building a suite of innovative applications designed to
          enhance your photo management, creativity, and interaction with your digital memories.
          From seamless organization to unique sharing experiences, discover the tools that transform your photos.
        </p>
      </header>

      <div className="card-grid">
        {/* Card 1: EXIF Viewer */}
        <div className="app-card">
          <h3>EXIF Viewer</h3>
          <p>A straightforward tool leveraging the **Google Photos Picker API** to provide instant access to the metadata (EXIF data) embedded within your photos. Easily view details like camera model, aperture, shutter speed, ISO, date, and location right from your browser, giving you deeper insights into your shots.</p>
          {/* Example: <a href="/exif-viewer-app" className="card-link">Launch App</a> */}
          <a href="https://exif.ladevzo.com/" target="_blank" rel="noopener noreferrer" className="card-link external-link">Visit Live App</a>

        </div>

        {/* Card 2: Photobooth App */}
        <div className="app-card under-construction">
          <h3>Photobooth App</h3>
          <p>
            Capture fun moments directly from your webcam and seamlessly upload them to your Google Photos library. This application demonstrates the power of the **Google Photos Library API** for programmatic uploads and album management. Perfect for parties, quick selfies, or creating themed photo collections effortlessly.
            <br/><br/>
            **Current Status:** This app is live and functional, but it's undergoing significant updates and feature expansions, so you might encounter some temporary glitches or incomplete features. We're constantly improving it!
          </p>
          <div className="card-status">Under Construction</div>
          {/* Example: <a href="https://photobooth-app.web.app/" target="_blank" rel="noopener noreferrer" className="card-link">Visit Live App</a> */}
          <a href="https://photobooth.ladevzo.com/" target="_blank" rel="noopener noreferrer" className="card-link external-link">Visit Live App</a>

        </div>

        {/* Card 3: Slideshow */}
        <div className="app-card">
          <h3>Slideshow</h3>
          <p>
            A new app to create, share, and view stunning, dynamic slideshows directly from your Google Photos albums. Bring your memories to life with this visually rich experience.
          </p>
          <a href="https://slideshow.ladevzo.com/" target="_blank" rel="noopener noreferrer" className="card-link external-link">Visit Live App</a>
        </div>

        {/* Card 4: 100 Ideas - Now a link to a dedicated page */}
        <Link to="/100-ideas" className="app-card idea-card-link"> {/* Use Link and a new class */}
          <div className="app-card"> {/* Wrap existing card content */}
            <h3>100 Ideas for Google Photos Apps</h3>
            <p>
              Beyond our current projects, Ladevzo is a fertile ground for innovation. Explore a curated list of a hundred potential applications and integrations for Google Photos, sparking inspiration for developers and users alike. Your next favorite photo tool might just be an idea away!
            </p>
            <span className="card-status">View All Ideas</span> {/* Updated status text */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GooglePhotosAppsPage;