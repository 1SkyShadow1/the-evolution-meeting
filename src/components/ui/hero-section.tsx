
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  quote?: {
    text: string;
    author: string;
  };
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  overlay?: boolean;
  className?: string;
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  quote,
  primaryCta,
  secondaryCta,
  overlay = true,
  className,
}: HeroSectionProps) => {
  return (
    <section 
      className={cn(
        "relative min-h-[70vh] flex items-center justify-center bg-cover bg-center",
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && <div className="hero-overlay" />}
      
      <div className="container px-4 sm:px-6 lg:px-8 py-20 hero-content text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">{title}</h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 fade-in-delay-1">{subtitle}</p>
          )}
          
          {quote && (
            <div className="mb-10 italic fade-in-delay-1">
              <p className="text-xl">"{quote.text}"</p>
              <p className="text-lg mt-2">— {quote.author}</p>
            </div>
          )}
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 justify-center mt-8 fade-in-delay-2">
              {primaryCta && (
                <Button 
                  asChild
                  size="lg" 
                  className="bg-em-purple hover:bg-em-purple-dark text-white rounded-full px-8"
                >
                  <Link to={primaryCta.link}>{primaryCta.text}</Link>
                </Button>
              )}
              
              {secondaryCta && (
                <Button 
                  asChild
                  size="lg" 
                  className="bg-em-red hover:bg-em-red-dark text-white rounded-full px-8"
                >
                  <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
