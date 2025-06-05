'use client';
import React from "react";
import Image from "next/image";

type FloatingIconProps = {
  icon: string;
  x: number;
  y: number;
  index: number;
  alt?: string;
};

export default function FloatingIcon({ icon, x, y, index, alt }: FloatingIconProps) {
  return (
    <>
      <Image
        src={icon}
        alt={alt || `Floating icon ${index}`}
        className={`
          absolute
          w-[${30 + index * 10}px]
          h-[${30 + index * 10}px]
          animate-float
          transition-transform
        `}
        style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${index * 0.3}s` }}
      />
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px);}
          50% { transform: translateY(-20px);}
          100% { transform: translateY(0px);}
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}