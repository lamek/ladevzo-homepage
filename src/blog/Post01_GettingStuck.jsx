import React, { useEffect } from 'react';
// Import the image we just saved
import errorScreenshot from '../assets/firebase-error.png'; 
import '../App.css';
import usePageTracking from '../hooks/usePageTracking';

function Post01_GettingStuck() {

  usePageTracking('blog_getting-stuck');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      
      {/* 1. Header Section */}
      <div className="blog-post-wrapper">
        <header className="blog-header">
          <div style={{ color: '#4DB6AC', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
            Dec 20, 2025
          </div>
          <div className="blog-subtitle">Zero to AI: Episode 1</div>
          <h1 className="blog-title">Getting Stuck Getting Started</h1>
        </header>

        {/* 2. Content Section */}
        <div className="blog-content">
          
          <h2>The Spark</h2>
          <p>
            I sat down Friday night—the Friday before holiday break!—with a burst of pure builder energy. 
            I had The Idea. I had the domain (ladevzo.com). And I had a narrow window before my wife and I 
            kicked back to get absolutely farmed by teenagers in Heroes of the Storm (a standard Friday for us).
          </p>
          <p>
            I was going to use the "Holy Trinity" of scrappy Google Cloud projects: Firebase Hosting for the site, 
            Functions for the logic, Firestore for the data. I’ve done this a few times already, so I was feeling bullish. 
            I have my Google Cloud account set up, credit card added, everything ready to go.
          </p>
          <p>
            I created my local directory. I opened the Firebase console. I was ready to build.
          </p>

          <h2>The Wart</h2>
          <p>And then, clicking “create new project,” I was hit with this:</p>
          
          {/* IMAGE BLOCK */}
          <div className="blog-image-container">
            <img 
              src={errorScreenshot} 
              alt="Firebase Error: Project limit reached" 
              className="blog-screenshot" 
            />
            <span className="image-caption">The exact moment my Friday night was ruined.</span>
          </div>

          <p>Let’s not candy coat it: <strong>How. Fucking. Annoying.</strong></p>
          
          <p>
            Here is the kicker: I keep a clean shop. My project list isn't huge. I actually do cleanup sessions where I delete old experiments. 
            I thought I had plenty of headroom. But somewhere in the deep, opaque math of the Cloud quotas, a calculation decided I was done.
          </p>
          <p>
            Naturally, I tried to fix it. I Googled the error. I clicked into the "Manage Quotas" section of the Google Cloud Console. 
            Have you ever been in the Billing IAM settings on a Friday night? It is a swamp of permissions, confusing UI, and dead ends.
          </p>
          <p>
            I would have happily thrown $5 at the screen to unlock a slot just to keep my momentum going. But there was no "Buy Now" button.
            My only option was a generic "Request Quota Increase" form. A form that required a human review. A form that meant I was absolutely going nowhere tonight.
          </p>

          <h2>The Reality Check</h2>
          <p>
            This is exactly why I’m starting this blog.
          </p>
          <p>
            Usually, official tutorials assume you’re starting with a blank slate—a fresh account, zero baggage, and the platform behaving exactly as documented. 
            But builders? We have history. We add and remove credit cards to avoid painful bills because we just want to try things out.
          </p>
          <p>I looked at workarounds:</p>
          
          {/* List alignment is now fixed by CSS */}
          <ul>
              <li><strong>The Emulator Suite:</strong> Great for local dev, but doesn't solve the "I want to ship" itch.</li>
              <li><strong>The Gmail Shuffle:</strong> Creating a fresh Gmail just to get a fresh set of free tier quotas. I've done this before—same phone number, auto-forwarding emails to my main account. It works, but the "login/logout" shuffle is a pain. (Honesty time: I almost did this anyway.)</li>
          </ul>

          <h2>The Fix (Sort of)</h2>
          <p>
            I didn't get to write much code that night. My "Zero to AI" journey started with me filling out a support form and closing my laptop.
            But that failure gave me the true structure for Ladevzo.
          </p>

          <h2>The "Zero to AI" Manifesto</h2>
          <p>I want this blog to be the <strong>Happy Path for Scrappy Builders</strong>.</p>
          <p>I want to show you the fastest, cheapest way to get things done. But to find that path, we have to be honest about the terrain.</p>
          <ul>
              <li><strong>No Edits on Hard Parts:</strong> If I get a permission denied error, you’re going to see it. If I have to wait 24 hours for a quota increase, I'm going to document the wait.</li>
              <li><strong>AI-First:</strong> I’m using Gemini to write the code and unblock the errors (because that’s how I actually work).</li>
              <li><strong>Scrappy:</strong> The goal is to spend $0. I will share every hack, tier-loophole, and optimization I find to keep this project free.</li>
          </ul>
          <p>So, welcome to Ladevzo.com. I have an idea on paper, a pending support ticket, and a lot of frustration.</p>
          <p>It’s going to be a bumpy ride.</p>

        </div>
      </div>
    </div>
  );
}

export default Post01_GettingStuck;