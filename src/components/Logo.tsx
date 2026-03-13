import React from 'react';

interface LogoProps {
  textColor?: string;
  label?: string;
}

export default function Logo({ textColor = 'text-white', label = 'TRESBONTECH' }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <img src="/Logo.png" alt="Tresbontech" className="h-10 w-auto object-contain" />
      <div className={`flex flex-col leading-tight ${textColor}`}>
        <span className="font-heading font-bold text-xl tracking-tighter uppercase leading-none">
          {label}
        </span>
        {/* <span className="text-[10px] tracking-[0.2em] opacity-60 uppercase">
          Since 2024
        </span> */}
      </div>
    </div>
  );
}