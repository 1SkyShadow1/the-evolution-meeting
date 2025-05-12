
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

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
  
  // Check if it's the donate page to apply special styling
  const isDonate = backgroundImage?.includes("b8830c0d-22e0-4580-81ae-a85bcb770c5a");
  
  // Check if it's the programs or volunteer page to apply special styling
  const isPrograms = backgroundImage?.includes("1500673922987-e212871fec22");
  const isVolunteer = backgroundImage?.includes("6a159869-62ad-4372-a1fa-5dd9a9a1871b");
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "min-h-screen w-full",
        !validBackgroundImage && "bg-gray-100"
      )}
    >
      {/* Hero section with background image - Responsive height for hero area */}
      {validBackgroundImage && (
        <div className="relative">
          <div 
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat",
              isMobile ? "h-[500px]" : "h-[650px] md:h-[700px]",
              isDonate && "bg-contain bg-top bg-white", // Special styling for donate page
              (isPrograms || isVolunteer) && "bg-[center_top_-5rem]" // Adjust background position for programs/volunteer pages
            )}
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: isDonate || isMobile ? "scroll" : "fixed"
            }}
            aria-hidden="true"
          />
          <div className={cn(
            "absolute inset-0",
            isMobile ? "h-[500px]" : "h-[650px] md:h-[700px]",
            isDonate ? "bg-white/5" : "bg-black/65"  // Lighter overlay for donate page
          )} aria-hidden="true" />
        </div>
      )}
      
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </motion.div>
  );
};

export default PageWrapper;
