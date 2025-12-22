import React from 'react';
import { Link } from 'react-router-dom';
import '../pages.css';

// This is your content source.
// Add new posts here to update the list automatically.
const BLOG_POSTS = [
  {
    id: 'post-1',
    date: 'Dec 22, 2025',
    title: 'Episode 1: Getting Stuck Getting Started',
    excerpt: 'I sat down with a burst of energy to build this site, only to be blocked by a hidden quota limit on my "sort of paying" Google Cloud account. Here is the story of the $50 blocker.',
    status: 'Shipped',
    link: '/blog/getting-stuck'
  },
  {
    id: 'post-2',
    date: 'Dec 22, 2025',
    title: 'Episode 2: The Gmail Shuffle',
    excerpt: 'Support asked for $50 to unlock my account. I asked myself: "Can I just create a new Gmail instead?" Documenting the workaround and the messy reality of the Free Tier.',
    status: 'Coming soon', // <--- CHANGED
    link: null // <--- CHANGED
  },
  {
     id: 'upcoming',
     date: 'Soon',
     title: 'Next: The Analytics Hack',
     excerpt: 'Building a privacy-first hit counter using Firestore for $0. No Google Analytics, no bloat, just 20 lines of code.',
     status: 'Planned',
     link: null
  }
];

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

      <div className="blog-list-container">
        {BLOG_POSTS.slice().reverse().map((post) => (
          <article key={post.id} className="blog-entry">
            <div className="blog-date">
              {post.date}
            </div>
            
            <div className="blog-content">
              <h3 className="blog-title">
                {post.link ? (
                  <Link to={post.link}>{post.title}</Link>
                ) : (
                  <span>{post.title}</span>
                )}
              </h3>
              
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <div className="meta-tags">
                <span className={`status-badge ${post.status === 'Shipped' ? 'status-shipped' : 'status-wip'}`}>
                  {post.status}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AIExplorationsPage;