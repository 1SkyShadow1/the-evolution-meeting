
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/ui/hero-section";

export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  button: {
    text: string;
    href: string;
  };
}

export interface LandingPageProps {
  hero: HeroProps;
  children?: React.ReactNode;
}

const LandingPage: React.FC<LandingPageProps> = ({ hero, children }) => {
  const { title, subtitle, backgroundImage, button } = hero;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={backgroundImage}
        title={title}
        subtitle={subtitle}
        primaryCta={{
          text: button.text,
          link: button.href
        }}
      />
      
      {/* Page Content */}
      <div className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
