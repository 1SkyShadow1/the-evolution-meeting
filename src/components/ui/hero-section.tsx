
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {quote && (
          <motion.div 
            className="max-w-2xl mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/30 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl italic mb-2">"{quote.text}"</p>
            <p className="text-sm md:text-base font-semibold">— {quote.author}</p>
          </motion.div>
        )}
        
        {(primaryCta || secondaryCta) && (
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
