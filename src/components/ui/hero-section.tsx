
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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
  // Check if it's the donate page to apply custom styling
  const isDonate = title.toLowerCase() === "donate";
  const isMobile = useIsMobile();

  return (
    <div className={cn(
      "relative z-10 flex items-center justify-center min-h-[500px] pt-20 pb-24 px-4 sm:pb-28 md:pb-32", // Increased bottom padding
      isDonate && "min-h-[400px]", // Shorter hero section for donate page
      isMobile && !isDonate && "min-h-[450px] pt-16 pb-20", // Adjusted height and padding for mobile
      className
    )}>
      <div className="container mx-auto text-center text-white">
        <motion.h1 
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-shadow-lg",
            isDonate && "text-em-red" // Red text for donate page
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className={cn(
              "text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-shadow-md",
              isDonate && "text-gray-800" // Dark text for donate page
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {quote && (
          <motion.div 
            className="max-w-2xl mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-white/30 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl italic mb-2">"{quote.text}"</p>
            <p className="text-sm md:text-base font-semibold">— {quote.author}</p>
          </motion.div>
        )}
        
        {(primaryCta || secondaryCta) && (
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-6 mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {primaryCta && (
              <Button asChild size={isMobile ? "default" : "lg"} className="bg-em-red hover:bg-em-red-dark transition-all duration-300 shadow-lg text-base md:text-lg">
                <Link to={primaryCta.link}>{primaryCta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild size={isMobile ? "default" : "lg"} variant="outline" className="bg-transparent border-2 border-white hover:bg-white/20 transition-all duration-300 text-base md:text-lg">
                <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
