
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
}

const HeroSection = ({
  title,
  subtitle,
  quote,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-[500px] pt-20 pb-16 px-4 sm:pb-20 md:pb-24">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-shadow-lg">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-shadow-md">{subtitle}</p>}
        
        {quote && (
          <div className="max-w-2xl mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
            <p className="text-xl md:text-2xl italic mb-2">"{quote.text}"</p>
            <p className="text-sm md:text-base">— {quote.author}</p>
          </div>
        )}
        
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {primaryCta && (
              <Button asChild size="lg" className="bg-em-red hover:bg-em-red-dark">
                <Link to={primaryCta.link}>{primaryCta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10">
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
