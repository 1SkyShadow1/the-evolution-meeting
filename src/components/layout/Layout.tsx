
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
  "/about": "/lovable-uploads/26db1f3e-f03a-411a-893d-fa0ec1b83e25.png", 
  "/programs": "/lovable-uploads/9bd24107-2603-470a-9935-a5f663dec071.png",
  "/donate": "/lovable-uploads/75329e20-8a27-46cc-ad1b-8bab310f589e.png",
  "/contact": "/lovable-uploads/87bd8255-72b3-4f1c-aab4-46a64724fc02.png",
  "/impact-stories": "/lovable-uploads/29ccc5e1-a424-43e3-a911-d1bd3e986d88.png",
  "/volunteer": "/lovable-uploads/90d769bd-2512-4831-a7e7-3a8e92a0c9a4.png",
  "/events": "/lovable-uploads/310e2609-1298-4780-bbc8-71297db433ef.png"
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  
  useEffect(() => {
    // Set background image based on current route
    const bgImage = backgroundImages[location.pathname] || "";
    console.log("Setting background image:", bgImage, "for route:", location.pathname);
    setBackgroundImage(bgImage);
  }, [location.pathname]);

  return (
    <PageWrapper 
      backgroundImage={backgroundImage}
      logo="/lovable-uploads/389bbe33-4636-49d1-a3f0-27cc7fe663a6.png"
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
