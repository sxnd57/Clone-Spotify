import Image, { StaticImageData } from "next/image";

interface Props {
  imageUrl: StaticImageData | string;
  width?: number;
  height?: number;
  title: string;
  subtitle: string;
  onClick?: () => Promise<void>;
}

const PlaylistCard = ({
  imageUrl,
  title,
  subtitle,
  width,
  height,
  onClick,
}: Props) => {
  return (
    <div
      className="flex cursor-pointer px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-700"
      onClick={onClick}
    >
      <Image
        className={`mr-2 h-[48px] w-[48px] rounded-xl border`}
        src={imageUrl}
        alt={"anh"}
        width={width ? width : 1920}
        height={height ? height : 1080}
        quality={100}
      />
      <div className="w-full space-y-1">
        <div className="truncate font-semibold">{title}</div>
        <div className="subtitle text-[12px]">
          Danh sách phát &bull; {subtitle}
        </div>
      </div>
    </div>
  );
};
export default PlaylistCard;
