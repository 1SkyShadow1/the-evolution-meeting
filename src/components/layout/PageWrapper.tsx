
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  backgroundImage?: string;
  logo?: string;
  children: React.ReactNode;
}

const PageWrapper = ({
  backgroundImage,
  logo = "/lovable-uploads/7bb3a010-7684-44a5-9829-b69a484e6b17.png",
  children,
}: PageWrapperProps) => {
  const [bgLoadError, setBgLoadError] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Add fade-in animation on page load
    setFadeIn(true);
    
    // Reset image error state when the component re-renders with a new background
    setBgLoadError(false);
  }, [backgroundImage]);

  const handleImageError = () => {
    console.error("Background image failed to load");
    setBgLoadError(true);
  };

  // Validate background image
  const validBackgroundImage = backgroundImage && !bgLoadError;
  
  return (
    <div
      className={cn(
        "min-h-screen w-full transition-opacity duration-500",
        fadeIn ? "opacity-100" : "opacity-0",
        validBackgroundImage ? "relative" : "bg-gray-100"
      )}
    >
      {validBackgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            onError={handleImageError}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </>
      )}
      
      <div className={cn(
        "relative z-10 w-full min-h-screen",
        validBackgroundImage ? "text-white" : "text-foreground"
      )}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
