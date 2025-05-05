
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
  "/": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/about": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/programs": "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/donate": "/lovable-uploads/a83c16cf-cd8e-4974-b4f5-89cf7185846f.png",
  "/contact": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/impact-stories": "/lovable-uploads/29ccc5e1-a424-43e3-a911-d1bd3e986d88.png",
  "/volunteer": "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
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
