import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'; // Added useLocation
import usePageTracking from '../hooks/usePageTracking';      // Added the hook import

// This component wraps all pages *except* the homepage
// It provides the consistent sub-page navigation and renders the page content
function PageLayout() {

  const location = useLocation();

  // Clean up the path to be a valid ID (remove slashes)
  // e.g. "/blog/getting-stuck" -> "blog_getting-stuck"
  const pageId = location.pathname.substring(1).replace(/\//g, '_') || 'unknown_page';

  usePageTracking(pageId);

  return (
    <div className="page-layout">
      <nav className="sub-nav">
        <Link to="/">Home</Link>
        <Link to="/photos-apps">Photos Apps</Link>
        <Link to="/builders-log">Builder's Log</Link>
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