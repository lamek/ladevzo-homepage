import React, { useEffect } from 'react';
import '../App.css';
import unverifiedAppImage from '../assets/build-your-site-post/unverified-app.png';

function BuildPersonalSitePost() {
  // Ensures the user starts at the top of the page when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="blog-post-wrapper">
        <header className="blog-header">
          <div style={{ color: '#4DB6AC', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
            Feb 12, 2026
          </div>
          <h1 className="blog-title">The "How To": Building my site with Gemini and Firebase</h1>
          <p className="blog-subtitle" style={{ fontStyle: 'italic', color: '#888' }}>
            A quick workflow for those who want more than just a WordPress template.
          </p>
        </header>

        <div className="blog-content">
          <p>
            I shared my <a href="/scrappy-path/static-site-post">last post</a> on building your own personal site and I made a big mistake: I left out all the important details about how I actually built it.
          </p>

          <p>
            So, let me share a quick workflow. The TLDR is this:
          </p>
          <ul>
            <li>I needed an official homepage.</li>
            <li>I asked Gemini and it suggested the following: <strong>React + Vite</strong> for the site, <strong>Firebase</strong> for hosting.</li>
            <li>I worked with Gemini to create a Firebase project.</li>
            <li>I followed Gemini's instructions to set up a React + Vite app (this was just a few commands in the terminal).</li>
            <li>I, you guessed it, followed Gemini's instructions to add "my app" (the React site) to my Firebase project, then ran <code>firebase deploy</code> and the site was up.</li>
            <li>I took one extra step to log into my DNS provider and point my new site on Firebase to the domain I owned.</li>
          </ul>

          <hr />

          <h2>0. The history</h2>
          <p>
            I bought a domain back in 2023 so I could experiment with blogging, etc. If you're setting up your own site, you can take this step or not. Having your own domain gives you total ownership.
          </p>
          <p>
            I used <a href="https://www.namecheap.com/">Namecheap</a>, but there are tons of providers to choose from. Just open Gemini, or your favorite chatbot, and ask it, "Can you walk me through purchasing a domain?" I think I spent $2 for the first 2 years, and recently that went up to $18.
          </p>

          <h2>1. The need</h2>
          <p>
            The backstory of <a href="https://ladevzo.com">ladevzo.com</a> is this: I was putting an app online that used the Google Photos API. To get rid of the scary login warnings, I needed to submit for Google's official OAuth approval.
          </p>

          <div className="blog-image-container">
            <img src={unverifiedAppImage} alt="Google Unverified App Warning" className="blog-screenshot" />
            <span className="image-caption">The "Unverified App" screen: The catalyst for this entire project.</span>
          </div>

          <blockquote>
            <strong>Sidenote:</strong> if you read any amount of posts on this blog you will surely hear me complain about this topic. I get it, it's keeping our data secure. But the user experience, for a developer, is awful.
          </blockquote>

          <p>
            One aspect of OAuth approval is having a clear homepage, terms of service, and privacy policy. Gemini to the rescue.
          </p>

          <h2>2. The bones</h2>
          <p>
            I asked and Gemini provided. At that time, I didn't really care about the content—I was solely focused on getting my app approved.
          </p>
          <p>
            I already had the app up on Firebase (more on this soon), so I asked Gemini how I could add the three things I needed. It barfed out an official looking Terms of Service, Privacy Policy, and the code for a homepage. Great! It suggested that I make a "React + Vite" site.
          </p>

          <h2>3. Firebase and the initial deploy</h2>
          <p>
            Because I was already using Firebase to host my app, I followed the same process for the site. A React + Vite site is actually just a small app. Firebase is great for hosting apps and many more things, but I don't know a lot about them yet.
          </p>
          <p>
            So I followed Gemini's instructions:
          </p>
          <ol>
            <li>Create a Firebase project.</li>
            <li>Add your app to the project.</li>
            <li>Install the command line tools.</li>
            <li>Run the <code>firebase init</code> command and answer the questions.</li>
            <li>Add the config information you get from your Firebase project to your React + Vite site.</li>
            <li>And last, run <code>firebase deploy</code>, and voila, the site is up.</li>
          </ol>

          <h2>4. Pointing to my domain</h2>
          <p>
            When you host an app on Firebase, it assigns its own domain. No problem. You point the domain you own right back to this domain from Firebase.
          </p>
          <p>
            So, when you visit ladevzo.com, you're actually visiting <code>https://ladevzo-homepage.web.app/</code>. I had some idea how to do this, but I worked with Gemini to get the details on which buttons to click.
          </p>

          <hr />

          <p>
            All in, the process was pretty simple. It's definitely not the easiest way to set up a site—you could just go to WordPress. But this way I've got more control. And, my site is "an app," so I can add to it and modify it in ways that go far beyond what you can do on WordPress.
          </p>
          
          <p>Also, I'm in it for the learning.</p>

          <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
            So, get out of here. Go build your own site. <a href="https://firebase.com">Go now!</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildPersonalSitePost;