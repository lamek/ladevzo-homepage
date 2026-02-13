import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import '../pages.css';

function GooglePhotosAppsPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title gradient-text">Google Photos Apps & Tools</h1>
        <p className="page-intro">
          Exploring the vast potential of the Google Photos APIs. Ladevzo is building a suite of innovative applications designed to
          enhance your photo management. From metadata insights to ambient displays.
        </p>
      </header>

      {/* GROUP 1: The Active Apps (Row of 3) */}
      <div className="apps-grid">
        
        {/* Card 1: EXIF Viewer */}
        <div className="app-card">
          <h3>EXIF Viewer</h3>
          <p>
            A straightforward tool leveraging the <strong>Google Photos Picker API</strong> to provide instant access to the metadata (EXIF data) embedded within your photos. Easily view details like camera model, aperture, shutter speed, and location.
          </p>
          <a href="https://exif.ladevzo.com/" target="_blank" rel="noopener noreferrer" className="card-link external-link">Visit Live App</a>
        </div>

        {/* Card 2: Media Uploader */}
        <div className="app-card under-construction">
          <h3>Media Uploader</h3>
          <p>
            A streamlined utility designed to handle complex uploads to your library using the <strong>Google Photos Library API</strong>. This tool focuses on bulk management and ensuring your media is organized correctly upon arrival.
          </p>
          <div className="card-status">Coming Soon</div>
          <span className="card-link" style={{ opacity: 0.5, cursor: 'not-allowed' }}>In Development</span>
        </div>

        {/* Card 3: Slideshow App */}
        <div className="app-card">
          <h3>Slideshow App</h3>
          <p>
            Create and share stunning, dynamic ambient displays directly from your Google Photos albums. Powered by the <strong>Google Photos API</strong> to bring your memories to life on any screen.
          </p>
          <a href="https://slideshow.ladevzo.com/" target="_blank" rel="noopener noreferrer" className="card-link external-link">Visit Live App</a>
        </div>

      </div>

      {/* GROUP 2: The Ideas List (Separate Section) */}
      <div className="ideas-section-container">
        <h2 className="section-divider-title">Looking for Inspiration?</h2>
        
        <Link to="/100-ideas" className="app-card idea-card-link" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}> 
          <div className="app-card" style={{ minHeight: 'auto', textAlign: 'center' }}> 
            <h3>100 Ideas for Google Photos Apps</h3>
            <p style={{ margin: '0 auto', maxWidth: '600px' }}>
              Beyond our current projects, explore a curated list of a hundred potential applications and integrations for Google Photos, sparking inspiration for developers and users alike.
            </p>
            <span className="card-status" style={{ marginTop: '20px', display: 'inline-block' }}>View All Ideas &rarr;</span> 
          </div>
        </Link>
      </div>

    </div>
  );
}

export default GooglePhotosAppsPage;