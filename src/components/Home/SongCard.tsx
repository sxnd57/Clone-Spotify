import Image, { StaticImageData } from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  className?: string;
}

const SongCard: React.FC<Props> = ({ image, title, subtitle, className }) => {
  return (
    <div
      className={cn(
        "m-3 flex items-center rounded-2xl bg-gray-100 px-4 py-2 dark:bg-background",
        className,
      )}
    >
      <div className="h-16 w-16">
        <Image
          className={`rounded-xl object-cover w-full h-full`}
          src={image}
          width={1920}
          height={1080}
          alt={"song image card"}
          quality={100}
        />
      </div>

      <div className="ml-4 flex flex-col">
        <div className="font-bold">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default SongCard;
