import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// This component wraps all pages *except* the homepage
// It provides the consistent sub-page navigation and renders the page content
function PageLayout() {
  return (
    <div className="page-layout">
      <nav className="sub-nav">
        <Link to="/">Home</Link>
        <Link to="/photos-apps">Photos Apps</Link>
        <Link to="/ai-explorations">AI Explorations</Link>
        <Link to="/100-ideas">100 Ideas</Link>
      </nav>
      <main className="page-main-content">
        {/* Outlet renders the matched child route (e.g., PrivacyPolicyPage) */}
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;