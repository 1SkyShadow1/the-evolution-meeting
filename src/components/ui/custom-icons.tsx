
import React from "react";

export const TikTokIcon = ({ 
  className, 
  size = 24, 
  color = "currentColor", 
  strokeWidth = 2,
  ...props 
}: React.SVGProps<SVGSVGElement> & { 
  size?: number; 
  color?: string; 
  strokeWidth?: number;
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V9.7a5 5 0 0 0 5-4.7" />
      <path d="M13 7.5v9a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1" />
      <path d="M18 3a4 4 0 0 0-4 4v12a3 3 0 1 1-3-3" />
    </svg>
  );
};
