// src/hooks/usePageTracking.js
import { useEffect } from 'react';
import { doc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; 

const usePageTracking = (pageName) => {
  useEffect(() => {
    // If pageName is missing, don't do anything
    if (!pageName) return;

    const trackView = async () => {
      // 1. Reference the document: collection "analytics", doc "pageName"
      const docRef = doc(db, 'analytics', pageName);
      
      try {
        // 2. Try to increment the "views" counter
        await updateDoc(docRef, {
          views: increment(1)
        });
        console.log(`[Analytics] Incremented view for: ${pageName}`);
      } catch (e) {
        // 3. If doc doesn't exist (first visitor ever!), create it.
        // The error code for missing doc is usually 'not-found'
        if (e.code === 'not-found' || e.message.includes("No document to update")) {
            await setDoc(docRef, { views: 1 });
            console.log(`[Analytics] Created new counter for: ${pageName}`);
        } else {
            console.error("[Analytics] Error:", e);
        }
      }
    };

    // 4. Session Check (deduplication)
    // We use sessionStorage so it resets when they close the tab,
    // but doesn't spam +1 if they just refresh the page.
    const key = `viewed_${pageName}`;
    if (!sessionStorage.getItem(key)) {
        trackView();
        sessionStorage.setItem(key, 'true');
    } else {
        console.log(`[Analytics] Already viewed ${pageName} this session.`);
    }
  }, [pageName]);
};

export default usePageTracking;