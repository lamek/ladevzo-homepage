import React from 'react';
import '../App.css'; 
import '../pages.css';
import { Link } from 'react-router-dom';

function AIExplorationsPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title gradient-text">Zero to AI: The Builder's Log</h1>
        <p className="page-intro">
          This isn't polished documentation. It's a "warts and all" log of building scalable AI systems 
          on Google Cloud using the Free Tier. I document the friction, the errors, and how 
          Gemini helps me unblock them, so you can build for $0.
        </p>
      </header>

      <div className="card-grid">
        
      {/* The Pilot / Hero Use Case */}
        <div className="app-card featured-card">
          <div className="card-badge">Start Here</div>
          <h3>
            <Link to="/blog/getting-stuck" style={{ color: 'inherit', textDecoration: 'none' }}>
              The Pilot: Ladevzo.com &rarr;
            </Link>
          </h3>
          <p>
            <strong>Objective:</strong> Host a React site for free.<br/>
            <strong>Stack:</strong> Vite + Firebase Hosting.<br/>
            <strong>The Struggle:</strong> dealing with DNS and old deployment caches.<br/>
            This is the very site you are looking at.
          </p>
          <span className="card-status">Live</span>
        </div>

        {/* Q1 Calendar Items */}
        <div className="app-card">
          <h3>Project 1: The Discord Dice Roller</h3>
          <p>
            <strong>Objective:</strong> Deploy a Python bot on Cloud Run.<br/>
            <strong>Cost Goal:</strong> $0/month (Free Tier).<br/>
            <strong>Key Lesson:</strong> Managing container secrets without paying for Secret Manager.
          </p>
          <span className="card-status">Coming Soon</span>
        </div>

        <div className="app-card">
          <h3>Project 2: The Office Pong Leaderboard</h3>
          <p>
            <strong>Objective:</strong> Real-time data updates with Firestore.<br/>
            <strong>The Challenge:</strong> structuring NoSQL data so it doesn't become a mess.
          </p>
          <span className="card-status">Planned</span>
        </div>

        <div className="app-card">
          <h3>Project 3: The TL;DR Generator</h3>
          <p>
            <strong>Objective:</strong> Using Vertex AI API to summarize text.<br/>
            <strong>Strategy:</strong> How to use Gemini Flash models to keep API costs non-existent.
          </p>
          <span className="card-status">Planned</span>
        </div>

      </div>
    </div>
  );
}

export default AIExplorationsPage;