import { useState, useEffect } from 'react';
import { X, Music2, Bell, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const AnnouncementBanner = ({ 
  title = "NEW SINGLE DROPPING",
  subtitle = "Be the first to hear it",
  releaseDate = null, // Date string like "2025-03-01T00:00:00"
  spotifyPreSaveLink = "https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm",
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    if (!releaseDate) return;

    const calculateTimeLeft = () => {
      const difference = new Date(releaseDate) - new Date();
      
      if (difference <= 0) {
        setIsReleased(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="relative bg-gradient-to-r from-emerald-900/90 via-emerald-800/90 to-emerald-900/90 border-b border-emerald-500/30"
      data-testid="announcement-banner"
    >
      {/* Animated background pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)] animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          {/* Icon */}
          <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-full animate-pulse-glow">
            <Music2 className="text-emerald-400" size={20} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-heading text-lg sm:text-xl text-white tracking-wide">
                {title}
              </span>
              <span className="text-emerald-300/80 text-sm">
                {subtitle}
              </span>
            </div>

            {/* Countdown Timer */}
            {releaseDate && !isReleased && (
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-2" data-testid="countdown-timer">
                <div className="flex items-center gap-1">
                  <div className="bg-black/40 px-2 py-1 rounded text-center min-w-[40px]">
                    <span className="text-white font-bold text-lg">{timeLeft.days}</span>
                    <span className="text-emerald-400/70 text-[10px] block -mt-1">DAYS</span>
                  </div>
                  <span className="text-emerald-400/50">:</span>
                  <div className="bg-black/40 px-2 py-1 rounded text-center min-w-[40px]">
                    <span className="text-white font-bold text-lg">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-emerald-400/70 text-[10px] block -mt-1">HRS</span>
                  </div>
                  <span className="text-emerald-400/50">:</span>
                  <div className="bg-black/40 px-2 py-1 rounded text-center min-w-[40px]">
                    <span className="text-white font-bold text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-emerald-400/70 text-[10px] block -mt-1">MIN</span>
                  </div>
                  <span className="text-emerald-400/50">:</span>
                  <div className="bg-black/40 px-2 py-1 rounded text-center min-w-[40px]">
                    <span className="text-white font-bold text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-emerald-400/70 text-[10px] block -mt-1">SEC</span>
                  </div>
                </div>
              </div>
            )}

            {isReleased && releaseDate && (
              <p className="text-emerald-300 font-semibold mt-1 animate-pulse">
                OUT NOW!
              </p>
            )}
          </div>

          {/* CTA Button */}
          <a
            href={spotifyPreSaveLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="presave-btn"
          >
            <Button 
              className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2 text-sm whitespace-nowrap"
            >
              <Bell size={14} className="mr-2" />
              {isReleased ? 'Listen Now' : 'Pre-Save'}
              <ExternalLink size={12} className="ml-2 opacity-50" />
            </Button>
          </a>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto p-1 text-emerald-300/60 hover:text-white transition-colors"
            aria-label="Close announcement"
            data-testid="close-banner-btn"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
