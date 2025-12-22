import React, { useEffect } from 'react';
import '../App.css'; // Ensure global styles are loaded
// Make sure path to pages.css is correct based on your file structure
// If Post01 works without it, you might not need it here, but good to have if styles are missing.
// import '../pages.css'; 
import usePageTracking from '../hooks/usePageTracking';

function Post02_GmailShuffle() {
  // 1. Track the view
  usePageTracking('blog_gmail-shuffle');

  // 2. Scroll to top on load so landing on this page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      
      {/* 1. Header Section (Matched Structure) */}
      <div className="blog-post-wrapper">
        <header className="blog-header">
          {/* Added Date - styled to match list view vibe */}
          <div style={{ color: '#4DB6AC', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
            Dec 22, 2025
          </div>
          <div className="blog-subtitle">Zero to AI: Episode 2</div>
          <h1 className="blog-title">The Gmail Shuffle</h1>
          {/* Added the hook paragraph below the title */}
          <p style={{ fontSize: '1.2rem', color: '#b0b0b0', marginTop: '1rem', lineHeight: '1.5' }}>
            Google Cloud Support wanted $50 to unlock my free tier. I decided to create a new identity instead.
          </p>
        </header>

        {/* 2. Content Section (Matched Structure) */}
        <div className="blog-content">
          
          <h2>The Ransom Note</h2>
          <p>
            After my failure to launch on Friday night (see Episode 1), I did what any responsible engineer does: I filed a support ticket.
          </p>
          <p>
            I explained my situation clearly: <em>"I am a hobbyist builder. I hit a project quota limit. I deleted old projects to clear space. Please let me create a new project."</em>
          </p>
          <p>
            This morning, I got the reply. I was expecting a "Sure, fixed!" or maybe a "Please wait 24 hours." Instead, I got an upsell.
          </p>
          
          {/* Keeping inline style for blockquote as it's unique to this post for now */}
          <blockquote style={{ borderLeft: '4px solid #4DB6AC', paddingLeft: '1rem', color: '#e0e0e0', fontStyle: 'italic', margin: '2rem 0' }}>
            "To process your quota increase request, we require a payment of $50 USD to verify your account standing..."
          </blockquote>
          
          <p>
            <strong>$50?</strong> To use the Free Tier?
          </p>
          <p>
            I’m sure there is a very logical, anti-abuse reason for this policy deep in the corporate bylaws. But for a developer trying to spin up a "Hello World" app on a Saturday? It’s a brick wall.
          </p>

          <h2>The "Scrappy" Workaround</h2>
          <p>
            I had two choices:
          </p>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Pay the $50 and wait for a human to review it (Total cost: $50 + Indefinite Time).</li>
            <li>Create a brand new Google Account (Total cost: $0 + 5 minutes).</li>
          </ol>
          <p>
            This is what I call <strong>The Gmail Shuffle</strong>. It is the dark art of the cloud hobbyist.
          </p>
          <p>
            If your main account is "tainted" by old experiments or opaque algorithms, you don't fight the system. You just step sideways. I opened an Incognito window, created a fresh Gmail address, and logged into Firebase.
          </p>
          
          <h2>The Result?</h2>
          <p>
            It worked instantly.
          </p>
          <p>
            No quota errors. No billing verification. No $50 ransom. I was able to create a new project, enable Firestore, and deploy this website in under 10 minutes.
          </p>

          <h2>The Cost of "Free"</h2>
          <p>
            The monetary cost is $0, but the UX cost is real.
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>I now have to manage two identities.</li>
            <li>I have to remember which Chrome profile has my production database.</li>
            <li>I have to set up <code>gcloud auth login</code> with different profiles on my CLI.</li>
          </ul>
          <p>
            It is annoying. It feels unprofessional. But it kept my momentum alive.
          </p>
          <p>
            If you are stuck in "Quota Hell" like I was, don't bang your head against the support wall. Just grab a new email address and keep building.
          </p>
          
          {/* Keeping inline style for HR separator */}
          <hr style={{ margin: '3rem 0', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          
          <p style={{ fontSize: '0.9rem', color: '#888' }}>
            <em>Next up: Now that I'm actually live, I need to know if anyone is reading this. I'll show you how I built a privacy-first hit counter for $0 using Firestore.</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post02_GmailShuffle;