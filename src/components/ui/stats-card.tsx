
import { cn } from "@/lib/utils";

interface StatsCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatsCard = ({ number, label, icon, className }: StatsCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md hover-scale text-center",
      className
    )}>
      {icon && (
        <div className="flex justify-center mb-3">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-em-purple mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;
