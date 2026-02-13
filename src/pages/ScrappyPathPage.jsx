import React from 'react';
import { Link } from 'react-router-dom';
import '../pages.css';

const BLOG_POSTS = [
  {
    id: 'build-your-site',
    date: 'Feb 12, 2026',
    title: 'The actual steps to build your personal site',
    excerpt: 'The workflow I followed to build this site.',
    tags: ['Building'],
    link: '/scrappy-path/build-your-site'
  },
  {
    id: 'static-site-post',
    date: 'Feb 10, 2026',
    title: 'Why Don’t You Have Your Own Static Site Yet?',
    excerpt: 'This site. Where it came from. Why you should have your own.',
    tags: ['AI Thoughts', 'Building'],
    link: '/scrappy-path/static-site-post'
  }
];

function ScrappyPathPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title gradient-text">The Scrappy Path</h1>
        <p className="page-intro">
          <strong>A blog about building and my thoughts on AI.</strong>
        </p>
      </header>

      <div className="blog-list-container">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="blog-entry">
            <div className="blog-date">{post.date}</div>
            
            <div className="blog-content">
              <h3 className="blog-title">
                <Link to={post.link}>{post.title}</Link>
              </h3>
              
              <p className="blog-excerpt">{post.excerpt}</p>
                
              <div className="meta-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className={`tag-badge tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <hr style={{ border: '0', borderTop: '1px solid #333', margin: '3rem 0 1rem' }} />
      <p style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
        Disclaimer: I work at Google. The views expressed here are my own and do not 
        necessarily reflect those of my employer. This content is part of a personal 
        project to explore and document the builder experience on Google Cloud.
      </p>
    </div>
  );
}

export default ScrappyPathPage;