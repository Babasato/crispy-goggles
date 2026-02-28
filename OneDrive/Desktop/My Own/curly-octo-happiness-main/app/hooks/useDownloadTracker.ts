// app/hooks/useDownloadTracker.ts - CORRECTED VERSION
"use client";
import { useState, useEffect } from 'react';

interface DownloadData {
  count: number;
  lastReset: string;
  email?: string;
  bonusDownloads: number;
  hasReceivedSignupBonus: boolean;
}

const DAILY_FREE_DOWNLOADS = 10;
const SIGNUP_BONUS = 10;

export const useDownloadTracker = () => {
  const [downloadData, setDownloadData] = useState<DownloadData>({ 
    count: 0, 
    lastReset: new Date().toISOString(), 
    bonusDownloads: 0,
    hasReceivedSignupBonus: false 
  });

  // Load from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('downloadData');
    if (saved) {
      try {
        const data: DownloadData = JSON.parse(saved);
        const lastResetDate = new Date(data.lastReset);
        const today = new Date();
        
        // Reset daily downloads if it's a new day, but keep bonus downloads
        if (lastResetDate.getDate() !== today.getDate() || 
            lastResetDate.getMonth() !== today.getMonth() || 
            lastResetDate.getFullYear() !== today.getFullYear()) {
          
          const resetData = { 
            ...data, 
            count: 0, 
            lastReset: today.toISOString() 
          };
          setDownloadData(resetData);
          localStorage.setItem('downloadData', JSON.stringify(resetData));
        } else {
          setDownloadData(data);
        }
      } catch (error) {
        console.error('Error loading download data:', error);
      }
    }
  }, []);

  // Save to localStorage whenever downloadData changes
  useEffect(() => {
    if (downloadData.count > 0 || downloadData.hasReceivedSignupBonus) {
      localStorage.setItem('downloadData', JSON.stringify(downloadData));
    }
  }, [downloadData]);

  const incrementDownloadCount = () => {
    setDownloadData(prev => ({ ...prev, count: prev.count + 1 }));
  };

  const addBonusDownloads = (bonusCount: number, email?: string) => {
    setDownloadData(prev => {
      // Only add bonus if they haven't received it yet
      if (prev.hasReceivedSignupBonus) {
        console.log('Bonus already received, skipping');
        return prev;
      }
      
      const newData = {
        ...prev, 
        email: email || prev.email,
        bonusDownloads: bonusCount,
        hasReceivedSignupBonus: true 
      };
      
      return newData;
    });
  };

  const getDownloadsRemaining = (): number => {
    const totalAvailable = DAILY_FREE_DOWNLOADS + downloadData.bonusDownloads;
    const remaining = totalAvailable - downloadData.count;
    return Math.max(0, remaining);
  };

  const shouldShowLeadMagnet = (): boolean => {
    // Show modal when 3 downloads remaining AND hasn't received bonus yet
    return getDownloadsRemaining() === 3 && !downloadData.hasReceivedSignupBonus;
  };

  return {
    downloadsRemaining: getDownloadsRemaining(),
    incrementDownloadCount,
    addBonusDownloads,
    downloadData,
    hasReceivedSignupBonus: downloadData.hasReceivedSignupBonus,
    shouldShowLeadMagnet
  };
};
