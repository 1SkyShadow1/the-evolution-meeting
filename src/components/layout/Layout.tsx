
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageWrapper from "./PageWrapper";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

// Map of routes to background images
const backgroundImages: Record<string, string> = {
  "/": "/images/home-hero.jpg",
  "/about": "/images/about-hero.jpg", 
  "/programs": "/images/community-engagement.jpg",
  "/donate": "/images/donate-bg.jpg",
  "/contact": "/images/contact-bg.jpg",
  "/impact-stories": "/images/impact-story1.jpg",
  "/volunteer": "/images/volunteer-bg.jpg",
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  
  useEffect(() => {
    // Set background image based on current route
    setBackgroundImage(backgroundImages[location.pathname] || "");
  }, [location.pathname]);

  // Exclude background for events page
  const excludeBackground = location.pathname === "/events";

  return (
    <PageWrapper 
      backgroundImage={backgroundImage}
      logo="/lovable-uploads/389bbe33-4636-49d1-a3f0-27cc7fe663a6.png"
      excludeBackground={excludeBackground}
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Layout;
