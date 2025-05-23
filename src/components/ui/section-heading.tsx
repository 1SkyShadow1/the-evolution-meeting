
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  isFirstSection?: boolean; // Add this prop to identify first sections
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  className,
  isFirstSection = false
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-10", 
      centered && "text-center",
      isFirstSection && "mt-8 lg:mt-12", // Add top margin for first sections
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
      <div className={cn(
        "h-1 w-20 bg-em-red mt-4",
        centered && "mx-auto"
      )} />
    </div>
  );
};

export default SectionHeading;
