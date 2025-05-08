
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  backgroundImage?: string;
  logo?: string;
  children: React.ReactNode;
}

const PageWrapper = ({
  backgroundImage,
  logo = "/lovable-uploads/389bbe33-4636-49d1-a3f0-27cc7fe663a6.png",
  children,
}: PageWrapperProps) => {
  const [bgLoadError, setBgLoadError] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Add fade-in animation on page load
    setFadeIn(true);
    
    // Reset image error state when the component re-renders with a new background
    setBgLoadError(false);
    setImageLoaded(false);

    // Preload image to check if it exists
    if (backgroundImage) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => {
        console.error("Background image failed to load:", backgroundImage);
        setBgLoadError(true);
      };
      img.src = backgroundImage;
    }
  }, [backgroundImage]);

  // Validate background image
  const validBackgroundImage = backgroundImage && !bgLoadError;
  
  return (
    <div
      className={cn(
        "min-h-screen w-full transition-opacity duration-500",
        fadeIn ? "opacity-100" : "opacity-0",
        !validBackgroundImage && "bg-gray-100"
      )}
    >
      {/* Hero section with background image */}
      {validBackgroundImage && (
        <div className="relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[400px]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70 h-[400px]" aria-hidden="true" />
        </div>
      )}
      
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
