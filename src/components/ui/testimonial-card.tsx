
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md",
      className
    )}>
      <div className="flex flex-col">
        <div className="mb-4 text-em-purple text-4xl">"</div>
        <p className="text-gray-700 italic mb-6">{quote}</p>
        <div className="flex items-center mt-auto">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={author} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-bold">{author}</p>
            {role && (
              <p className="text-sm text-gray-600">{role}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
