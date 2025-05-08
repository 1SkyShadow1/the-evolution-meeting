
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  backgroundImage?: string;
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
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  quote,
  primaryCta,
  secondaryCta,
  className,
}: HeroSectionProps) => {
  return (
    <div className={cn(
      "relative z-10 flex items-center justify-center min-h-[600px] pt-20 pb-16 px-4 sm:pb-20 md:pb-24",
      className
    )}>
      <div className="container mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-shadow-lg animate-fade-in">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-shadow-md fade-in-delay-1">{subtitle}</p>}
        
        {quote && (
          <div className="max-w-2xl mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 fade-in-delay-2 border border-white/30 shadow-xl">
            <p className="text-xl md:text-2xl italic mb-2">"{quote.text}"</p>
            <p className="text-sm md:text-base font-semibold">— {quote.author}</p>
          </div>
        )}
        
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-4 mt-6 fade-in-delay-2">
            {primaryCta && (
              <Button asChild size="lg" className="bg-em-red hover:bg-em-red-dark transition-all duration-300 shadow-lg text-lg">
                <Link to={primaryCta.link}>{primaryCta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white/20 transition-all duration-300 text-lg">
                <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
