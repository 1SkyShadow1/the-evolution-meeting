
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <div className={cn(
      "bg-white rounded-lg shadow-md overflow-hidden hover-scale transition-all",
      className
    )}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Button 
          asChild
          variant="outline" 
          className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white"
        >
          <Link to={link}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ImpactStoryCard;
