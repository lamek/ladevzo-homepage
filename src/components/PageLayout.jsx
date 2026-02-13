import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <div className="page-layout">
      <nav className="sub-nav">
        <Link to="/">Home</Link>
        <Link to="/photos-apps">Photos Apps</Link>
        <Link to="/scrappy-path">The Scrappy Path</Link>
      </nav>
      <main className="page-main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;