
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-12 h-10 text-xs",
    md: "w-20 h-16 text-base",
    lg: "w-32 h-24 text-2xl"
  };

  return (
    <div className={`bg-red-600 flex items-center justify-center font-black tracking-tighter leading-none select-none ${sizeClasses[size]} ${className}`}>
      <div className="flex items-center">
        <span className="text-black">D</span>
        <span className="text-white">X</span>
        <span className="text-black">O</span>
        <span className="text-white">F</span>
        <span className="text-black ml-0.5">+</span>
      </div>
    </div>
  );
};

export default Logo;
