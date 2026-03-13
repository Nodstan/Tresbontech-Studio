import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
}

export default function Logo({ className = '', textColor = 'text-[#171717]' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 
        In Vite, files in the public directory are served at the root path. 
        Referencing '/Logo.png' directly is the standard way to load it. 
      */}
      <img src="/Logo.png" alt="Tresbontech Logo" className="h-12 w-auto object-contain" />
      
      <div className={`flex flex-col leading-tight ${textColor}`}>
        <span className="font-header font-bold text-2xl tracking-tight uppercase">
          STUDIO
        </span>
        {/* <span className="font-body text-xs tracking-widest opacity-80 uppercase">
          SINCE 2024
        </span> */}
      </div>
    </div>
  );
}
