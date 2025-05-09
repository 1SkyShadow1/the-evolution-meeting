
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ImpactStoryCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  link: string;
  className?: string;
}

const ImpactStoryCard = ({
  title,
  excerpt,
  image,
  date,
  link,
  className,
}: ImpactStoryCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:-translate-y-1 duration-300 border border-gray-100",
        className
      )}
    >
      <div className="h-56 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            console.error("Failed to load image:", image);
            e.currentTarget.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200";
          }}
        />
        <div className="absolute top-4 right-4 bg-em-purple text-white py-1 px-3 text-xs rounded-full font-medium shadow-md">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-800 hover:text-em-purple transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{excerpt}</p>
        <Button 
          asChild
          variant="outline" 
          className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white transition-colors duration-300"
        >
          <Link to={link}>Read Full Story</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ImpactStoryCard;
