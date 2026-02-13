import React, { useEffect } from 'react';
import '../App.css';
import tosImage from '../assets/static-site-post/tos.png';

function StaticSitePost() {
  // Ensures the user starts at the top of the page when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="blog-post-wrapper">
        <header className="blog-header">
          <div style={{ color: '#4DB6AC', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
            Feb 10, 2026
          </div>
          <h1 className="blog-title">Why don’t you have your own static site yet?</h1>
          <p className="blog-subtitle" style={{ fontStyle: 'italic', color: '#888' }}>
            It’s cheap. It’s mine. And you too should get your own.
          </p>
        </header>

        <div className="blog-content">
          <p>
            I built this site (the entire site) by asking Gemini a bunch of questions. 
            What’s a good framework for a static site? How do I create this page? 
            What if I want to add a picture? 
          </p>
          
          <p>
            In a couple of hours I had the bones set up, and I published my first page: 
            the terms of service for my Google Photos app. Why? I needed a terms of 
            service page to get through the 10th circle of hell: getting OAuth 
            verification with a Google API.
          </p>

            <div className="blog-image-container">
                <img 
                src={tosImage} 
                alt="Google OAuth Terms of Service Page" 
                className="blog-screenshot" 
                />
                <span className="image-caption">The page that started it all: surviving OAuth verification.</span>
            </div>

          <p>
            The process was so much fun that I kept chipping away at it, adding things 
            here and there, and now here I am blogging, and I think you should too.
          </p>

          <p>
            This blog is going to be all mine, and it’s going to cover my thoughts and 
            my projects, on my terms. One of my bigger ideas is to build a startup on 
            Google Cloud. I want to showcase a few things. First, that it can be done. 
            Second, I want to stress test Google Cloud (“GCP”, to save me some 
            keystrokes), and this specific journey. 
          </p>
          
          <p>
            There’s a lot you can do on GCP. And I’m sure there’s a few more circles of 
            hell I’ve yet discovered. I want to highlight these successful, and painful 
            experiences, and hopefully enact some positive change. GCP shouldn’t only 
            be the land of enterprise computing. There’s a lot that regular people 
            can do too, like this site.
          </p>

          <p>
            And last, my thoughts. I’ve got a lot of them. I’ll do my best to whittle 
            them down. While I strongly disagree that any blog should “write to a 5th 
            grade audience”, I do think keeping it shorter is better. Less is more.
          </p>

          <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
            Welcome along for the journey. I hope you stay, but moreso, I hope you 
            head out and <a href="https://cloud.google.com/">build your own site</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaticSitePost;