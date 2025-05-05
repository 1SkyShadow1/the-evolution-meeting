
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
  "/donate": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/contact": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/impact-stories": "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/volunteer": "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "/events": "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
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
