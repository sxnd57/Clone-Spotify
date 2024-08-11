"use client";
import Image from "next/image";
import React from "react";

interface SongCardProps {
  key?: any;
  className?: string;
  src: string;
  alt: string;
  rounded?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const SongCard: React.FC<SongCardProps> = ({
  key,
  className,
  src,
  alt,
  rounded,
  title,
  subtitle,
  children,
}) => {
  return (
    <div key={key} className={`flex p-2 ps-0 ${className}`}>
      <div className="relative me-5 flex h-[48px] w-[48px]">
        <Image
          className={`${rounded ? rounded : "rounded-full"} object-cover`}
          src={src}
          alt={alt}
          fill
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[16px] font-[400px]">{title}</p>
        <p className="text-[14px] font-[400px] text-[#cccccc]">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default SongCard;
