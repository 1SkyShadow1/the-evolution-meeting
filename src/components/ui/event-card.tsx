
import { Calendar, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location?: string;
  image?: string;
  link: string;
  className?: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  image,
  link,
  className,
}: EventCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md overflow-hidden hover-scale transition-all",
      className
    )}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              console.error(`Failed to load image: ${image}`);
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-em-purple" />
            <span>{date}</span>
          </div>
          
          {time && (
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-em-purple" />
              <span>{time}</span>
            </div>
          )}
          
          {location && (
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-em-purple" />
              <span>{location}</span>
            </div>
          )}
        </div>
        
        <Button 
          asChild
          className="w-full bg-em-purple hover:bg-em-purple-dark"
        >
          <Link to={link}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
