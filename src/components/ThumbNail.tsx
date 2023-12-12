import { Video } from "../../types/custom_types";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ThumbNail = ({ video }: { video: Video }) => {
  return (
    <Link
      href={`/watch/${video.id}`}
      className="w-[320px] mx-auto md:w-[350px] mt-4 "
    >
      <div className="h-52 overflow-hidden rounded-2xl bg-slate-300">
        <img
          src={video.thumbnail}
          alt={video.title}
          width={500}
          height={500}
          className="h-full w-full object-cover hover:scale-110 transition-all duration-700 "
        />
      </div>
      <div className="flex space-x-2 py-3 ">
        <Avatar>
          <AvatarImage
            src={video.channelTitle.channelImage}
            alt={video.channelTitle.channelTitle}
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ">
          <h4 className="scroll-m-20 text-lg font-bold tracking-tight hover:underline">
            {video.title.substring(0, 60)}
          </h4>
          <p className="text-sm text-background-dark dark:text-background-light ">
            {video.channelTitle.channelTitle}
          </p>
          <div className="flex space-x-2 text-sm dark:text-background-light text-background-dark"></div>
        </div>
      </div>
    </Link>
  );
};
export default ThumbNail;
