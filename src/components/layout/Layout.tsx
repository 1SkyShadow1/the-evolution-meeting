
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
  "/": "/lovable-uploads/f9d6ab5f-52f7-443c-997d-cf526e8b4dc1.png", 
  "/about": "/lovable-uploads/371ad64a-1e5b-4f39-b9f1-0a41c6263d0d.png",
  "/programs": "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/donate": "/lovable-uploads/b8830c0d-22e0-4580-81ae-a85bcb770c5a.png", // Updated donate background image
  "/contact": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/impact-stories": "/lovable-uploads/29ccc5e1-a424-43e3-a911-d1bd3e986d88.png",
  "/volunteer": "/lovable-uploads/6a159869-62ad-4372-a1fa-5dd9a9a1871b.png", 
  "/events": "/lovable-uploads/a73250b9-5837-4843-92a3-60996ef464d1.png"
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  
  useEffect(() => {
    // Set background image based on current route
    const bgImage = backgroundImages[location.pathname] || "";
    console.log("Setting background image:", bgImage, "for route:", location.pathname);
    setBackgroundImage(bgImage);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageWrapper 
      backgroundImage={backgroundImage}
      logo="/lovable-uploads/389bbe33-4636-49d1-a3f0-27cc7fe663a6.png"
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-transparent">
            {/* Hero section dynamically rendered from each page */}
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Layout;
