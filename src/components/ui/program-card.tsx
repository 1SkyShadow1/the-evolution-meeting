
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ProgramCard = ({
  title,
  description,
  icon,
  link,
  className,
}: ProgramCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md hover-scale transition-all",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-em-purple text-4xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button 
          asChild
          variant="outline" 
          className="border-em-purple text-em-purple hover:bg-em-purple hover:text-white"
        >
          <Link to={link}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;
