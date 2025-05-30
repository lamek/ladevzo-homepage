import React, { useState } from 'react';
import '../App.css';
import '../pages.css';

// Updated Data structure for your ideas with theme-based categories
const ideasData = [
  {
    category: "I. Productivity & Utility",
    id: "productivity-utility",
    description: "Streamline your life with apps designed for efficient organization, smart tracking, and practical daily tasks.",
    ideas: [
      { title: "Event Photo Collector", description: "App for event organizers to allow attendees to upload photos directly to a shared album (created by the app) in Google Photos." },
      { title: "Receipt & Document Scanner", description: "Scan important documents or receipts, automatically upload them to a designated 'Receipts' or 'Documents' album, with searchable tags." },
      { title: "Whiteboard Snapshotter", description: "Snap photos of whiteboards after meetings, automatically organize them by project or date." },
      { title: "Before & After Progress Tracker", description: "Take photos of progress (e.g., home renovation, fitness journey), with automatic grouping and chronological ordering." },
      { title: "Study Note Organizer", description: "Take photos of handwritten notes or textbook pages, upload them to specific subject albums." },
      { title: "Pet Photo Diary", description: "Upload photos of your pet's growth, milestones, or daily adventures, organized by date or custom tags." },
      { title: "Garden Journal", description: "Document plant growth, blooms, and garden changes, with auto-album creation for each plant type." },
      { title: "Recipe Photo Book", description: "Take photos of dishes you cook, upload them to a 'Recipes' album, with options to add ingredients/instructions as enrichments." },
      { title: "Inventory Management", description: "For small businesses or personal collections, take photos of items and upload them, with details as enrichments." },
      { title: "Craft Project Tracker", description: "Document steps of a craft project with photos, uploading them to a project-specific album." },
      { title: "Vehicle Maintenance Log", description: "Take photos of repair work, mileage, or issues, store in a car-specific album." },
      { title: "Travel Scrapbook Creator", description: "As you take photos during a trip, the app uploads them to a trip album, potentially with location tags." },
      { title: "Fitness Pose Analyzer", description: "Users take photos of their workout poses, which are uploaded for analysis (e.g., comparing to ideal forms)." },
      { title: "Art Portfolio Builder", description: "Artists can upload their digital art or photos of physical artwork, organizing them into a portfolio." },
      { title: "Fashion Outfit Planner", description: "Snap photos of your outfits, organize them by occasion or season for quick planning." },
      { title: "Secure Photo Sharing (Temporary Access)", description: "Users pick photos to share temporarily with others, with expiry options." },
      { title: "Digital Photo Album Gifting", description: "Users pick photos to create a digital album that can be 'gifted' to others." },
      { title: "Photo Cleaner (Duplicate Finder)", description: "Scan selected photos for duplicates or similar images." },
      { title: "Photo Uploader to Cloud Storage (Other than Google Photos)", description: "Users pick photos and upload them to a different cloud service (e.g., Dropbox, OneDrive)." },
      { title: "Photo Metadata Editor", description: "Users pick photos and the app allows editing of EXIF data (location, date, etc.)." },
      { title: "Image Compressor/Resizer", description: "Select photos to compress or resize for easy sharing." },
      { title: "Photo Geotagging Tool", description: "Users pick photos and add or correct geotag information." },
      { title: "Album Merge Tool", description: "Users pick photos from multiple albums to merge into a new one." },
      { title: "Quick Print Service Integration", description: "Users pick photos to send directly to a photo printing service." },
      { title: "Photo Backup to External Drive", description: "Users pick photos to backup to a connected external drive (desktop Flutter app)." },
      { title: "Lost & Found Visual Aid", description: "Users pick a photo of a lost item to attach to a report." },
      { title: "'What's in this photo?' Search", description: "Users pick a photo and the app uses AI to identify objects/scenes within it." },
    ],
  },
  {
    category: "II. Creative & Fun",
    id: "creative-fun",
    description: "Unleash your artistic side with apps that transform your photos into collages, stories, and shareable masterpieces.",
    ideas: [
      { title: "Photo Collage Maker", description: "Users pick multiple photos from their Google Photos, and the app helps them create a collage." },
      { title: "Video Editor (Short Clips)", description: "Users pick videos from their library, and the app allows basic trimming, filters, or music addition." },
      { title: "Meme Generator", description: "Users pick an image, add text, and create a meme to share." },
      { title: "Custom Phone Wallpaper/Lock Screen", description: "Users select photos to create dynamic wallpapers or lock screens." },
      { title: "Photo Background Remover/Changer", description: "Users pick a photo and the app performs background removal or replacement." },
      { title: "Color Palette Extractor", description: "Pick an image, and the app extracts a dominant color palette." },
      { title: "Drawing/Sketch App", description: "Users can pick a photo to use as a background or reference for their drawing." },
      { title: "Digital Scrapbooking", description: "Users pick photos to add to a digital scrapbook layout." },
      { title: "Photo Story Maker", description: "Users pick a sequence of photos and add text/narration to create a visual story." },
      { title: "Personalized Calendar Creator", description: "Users pick photos to populate a custom calendar design." },
      { title: "Greeting Card Sender", description: "Users pick photos to be printed and mailed as a physical greeting card." },
      { title: "Personalized Merchandise Creator", description: "Design custom T-shirts, mugs, or phone cases using photos picked by the user." },
      { title: "Visual Message Sender", description: "Send messages where the primary content is a curated selection of photos." },
      { title: "Collaborative Storytelling (Photo Prompts)", description: "Users add photos (generated by the app, e.g., from a collage tool) to a shared album, building a visual story." },
      { title: "GIF/Short Video Creator", description: "App that creates short GIFs/videos from a series of photos and uploads them to a dedicated album." },
      { title: "Photo Booth with Instant Album Share", description: "Creates a fun photo booth experience, automatically uploading sequences to a new album." },
      { title: "Augmented Reality (AR) Photo Importer", description: "Capture AR creations as photos/videos and instantly save them to Google Photos." },
      { title: "Photo Challenge App", description: "Users submit photos for daily/weekly challenges, which are uploaded to themed albums." },
      { title: "Visual Wishlist Creator", description: "Take photos of items you want, categorize them into a 'Wishlist' album." },
      { title: "Personalized Greeting Card Maker", description: "Create custom cards with user's photos and upload the final design." },
      { title: "Dynamic Photo Display Uploader", description: "An app to easily upload specific albums or photos to a connected smart display or digital photo frame." }, // Rephrased from Ambient
      { title: "Time-Lapse Creator", description: "Capture photos at intervals and compile them into a time-lapse video, then upload." },
      { title: "Mood Board Maker", description: "Create visual mood boards by importing images (e.g., from web sources) and uploading them to a dedicated album." },
    ],
  },
  {
    category: "III. Specialized & Niche",
    id: "specialized-niche",
    description: "Apps tailored for specific industries, educational purposes, unique personal interests, or public display scenarios.",
    ideas: [
      { title: "Science Experiment Recorder", description: "Students document experiments with photos, uploading to class-specific albums with notes." },
      { title: "Nature Observation Log", description: "Take photos of plants, animals, or geological features, categorize them with species/location info." },
      { title: "Language Learning with Visuals", description: "App presents words/phrases, user takes a photo related to it, uploading it for visual association." },
      { title: "Cooking Progress Demonstrator", description: "Take photos of cooking steps, compile into a visual recipe guide." },
      { title: "DIY Project Step-by-Step", description: "Document home improvement projects with photos, creating a visual guide for future reference." },
      { title: "Real Estate Photo Uploader", description: "Agents can upload property photos directly to organized albums for listings." },
      { title: "Construction Site Progress", description: "Document construction progress with photos, organized by project and date." },
      { title: "Field Service Documentation", description: "Technicians take photos of work completed, issues, or installations, uploading them with job details." },
      { title: "Event Booth Photo Collection", description: "For trade shows or events, easily collect photos taken at a booth from multiple devices into one album." },
      { title: "Product Photo Manager", description: "Small businesses upload product photos, perhaps with enrichments like product ID and description." },
      { title: "Smart Display Customization", description: "Deep customization of what photos are displayed on a partner's smart display, beyond basic album selection." }, // Rephrased from Ambient
      { title: "Contextual Photo Display", description: "A smart display that shows photos relevant to the time of day, weather, or current events (e.g., show beach photos on a sunny day)." }, // Rephrased from Ambient
      { title: "Interactive Photo Wall", description: "For a public display, dynamically changing photo collages based on themes or user interaction (e.g., like/dislike system)." }, // Rephrased from Ambient
      { title: "Business Lobby Display", description: "Showcase company events, product images, or team photos on a smart display in a corporate lobby." }, // Rephrased from Ambient
      { title: "Digital Art Gallery", description: "A platform for artists to showcase their work on large displays, managed via the API." }, // Rephrased from Ambient
      { title: "Event Information Display with Photos", description: "Display event schedules, speaker photos, and past event highlights on a large screen." }, // Rephrased from Ambient
      { title: "Restaurant Menu with Visuals", description: "Dynamically update a digital menu board with appetizing photos of dishes." }, // Rephrased from Ambient
      { title: "Museum Exhibit Enhancement", description: "Displays in a museum that show additional photos or historical context for artifacts." }, // Rephrased from Ambient
      { title: "Hospital Waiting Room Visuals", description: "Calming or informative photo slideshows for waiting areas." }, // Rephrased from Ambient
      { title: "Retail Store Display Advertising", description: "Showcase product photos and promotions on displays within a store." }, // Rephrased from Ambient
      { title: "Smart Mirror Integration", description: "A smart mirror displaying selected family photos or travel memories." }, // Rephrased from Ambient
      { title: "Personalized Home Hub", description: "A central display that surfaces 'On This Day' memories or photos of specific family members." }, // Rephrased from Ambient
      { title: "Therapy/Calming Photo Stream", description: "For clinics or relaxation spaces, a curated stream of calming nature photos." }, // Rephrased from Ambient
      { title: "Elderly Care Photo Sharing", description: "Easy way for family members to push new photos to a relative's ambient display." }, // Rephrased from Ambient
      { title: "School Information Board", description: "Display school events, student achievements, and class photos." }, // Rephrased from Ambient
    ],
  },
  {
    category: "IV. Advanced & Integrated",
    id: "advanced-integrated",
    description: "Harness the full power of Google Photos APIs by combining functionalities for richer, more complex user experiences.",
    ideas: [
      { title: "Shared Event Photo Album + Printing", description: "Attendees upload photos, event host curates/picks best ones, and orders prints (integrates with a printing service)." },
      { title: "Family Photo Hub", description: "Allows family members to upload new photos into designated shared family albums, select existing photos for sharing or creating specific projects (e.g., birthday cards), and potentially powers a smart display in the home showing a rotating selection of family memories." },
      { title: "Travel Group Photo Journal", description: "Travelers upload photos directly during the trip to a common album. Post-trip, users can select photos from the shared album to create personal scrapbooks or order prints." },
      { title: "Collaborative Design Project", description: "Team members upload design assets/sketches. Team members pick relevant assets for their individual work." },
      { title: "Community Photo Project", description: "Community members upload photos around a theme (e.g., 'My City'). Curators select the best photos for a public exhibition or digital gallery." },
      { title: "Pet Adoption Platform", description: "Shelters upload photos of adoptable pets. Potential adopters can select photos of pets they're interested in for comparison or sharing." },
      { title: "Club/Organization Media Manager", description: "Members upload photos from club events. Admins select photos for newsletters, social media, or archives." },
      { title: "Personalized Storybook Creator", description: "Users select photos of their family/friends. The app generates a simple storybook with these photos and saves the final version." },
      { title: "Animated Photo Book", description: "Users select a series of photos. App creates a short animation or video from them and saves it." },
      { title: "'Year in Review' Album Generator", description: "Users pick favorite photos from the past year. App compiles them into a custom 'Year in Review' album with date-based organization." },
      { title: "Photo-to-Painting/Sketch Converter", description: "User selects a photo. App applies an artistic filter/effect and saves the new version." },
      { title: "Digital Photobook Maker with Print Option", description: "Users select photos for their photobook layout. The created photobook (as a PDF or image series) is saved, and options to order a physical print." },
      { title: "Smart Album Creator", description: "Users select criteria (e.g., 'all photos of my dog,' 'photos from summer vacation 2023'). The app uses AI to find matching photos and creates a new album." },
      { title: "Photo Cleanup & Archive", description: "Users select photos they want to archive or delete. The app moves them to a specified archive album or facilitates bulk deletion." },
      { title: "Visual Search & Discovery", description: "User picks an image. App searches their Google Photos library for similar images or images containing specific objects/people using Google Photos' inherent search capabilities." },
      { title: "Location-Based Photo Organizer", description: "Users select photos. The app analyzes geotags (if available) and suggests creating albums based on locations visited." },
      { title: "AI-Powered Photo Tagging Assistant", description: "User selects photos. The app suggests additional tags or descriptions based on image content (using AI), which can be added as enrichments." },
      { title: "Photo Optimization for Sharing", description: "Users select photos they want to share (e.g., via social media). App optimizes size/resolution for sharing and saves the optimized versions to a 'Shared' album." },
      { title: "Event Highlight Reel Creator", description: "Users pick photos/videos from an event. App creates a short highlight video/slideshow and saves it." },
      { title: "Duplicate Photo Consolidation", description: "Users select albums or specific photos. App identifies duplicates and suggests merging or deleting, creating a cleaner library." },
      { title: "Secure Document Locker", description: "Upload scanned documents with encryption and password protection within the app. Users can pick these encrypted documents for decryption and viewing." },
      { title: "Visual Daily Journal/Diary", description: "Users upload daily photos with journal entries. Users can browse their past entries by date or topic, selecting photos to re-view or share." },
      { title: "Fitness Transformation Journey", description: "Users regularly upload progress photos with body metrics. Allows users to pick specific photos for side-by-side comparison." },
      { title: "Home Inventory for Insurance", description: "Take photos of household items with details, storing them in a secure album. Easily access specific item photos for insurance claims." },
      { title: "Creative Photo Prompt Generator & Uploader", description: "App generates creative photo prompts (e.g., 'capture joy,' 'a moment of stillness'). User takes a photo based on the prompt, and it's uploaded to a themed album. Users can browse others' submissions to the same prompt, or curate their own best photos for that prompt." },
    ],
  },
];

function HundredIdeasPage() {
  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Use behavior: 'smooth' for a nice scroll animation
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title gradient-text">100 Ideas for Google Photos Apps</h1>
        <p className="page-intro">
          A curated compendium of innovative app ideas, categorized by their primary use case, designed to spark your imagination and unlock the full potential of Google Photos.
        </p>
      </header>

      {/* Category Navigation Buttons */}
      <nav className="category-nav">
        {ideasData.map((category) => (
          <button
            key={category.id}
            onClick={() => scrollToCategory(category.id)}
            className="category-button cta-button"
          >
            {category.category.replace(/^(I|II|III|IV)\.\s/, '')} {/* Remove Roman numeral and period from button text */}
          </button>
        ))}
      </nav>

      {/* Ideas Sections */}
      {ideasData.map((category) => (
        <section key={category.id} id={category.id} className="ideas-category-section">
          <h2 className="category-heading">{category.category}</h2>
          <p className="category-description">{category.description}</p>
          <div className="card-grid">
            {category.ideas.map((idea, index) => (
              <div key={index} className="idea-card app-card">
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default HundredIdeasPage;