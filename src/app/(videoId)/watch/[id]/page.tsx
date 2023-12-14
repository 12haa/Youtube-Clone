"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchVideoDetails } from "@/lib/api";
import Loading from "@/app/loading";
import ReactPlayer from "react-player";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatCount } from "@/lib/utils";
import { ThumbsDown, ThumbsUp } from "lucide-react";
const VideoDetails = () => {
  const { id } = useParams();

  const {
    data: videoDetails,
    isLoading,
    error,
  } = useSWR(`videoDetails/${id}`, () => fetchVideoDetails(id as string), {
    revalidateOnFocus: false,
  });
  if (error) {
    throw new Error("Error Fetching Video Data");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mb-9 ">
      <div className="px-4 h-[80vh] mt-14">
        <ReactPlayer
          url={videoDetails?.videoUrl}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="p-2 md:p-4 grid grid-cols-12 gap-7">
        <div className="col-span-8 md:col-span-12 ">
          <div>
            <h3 className="text-xl text-semibold">{videoDetails?.title}</h3>
            <div className="flex justify-between my-3 ">
              <div className="space-x-3 flex">
                <Avatar>
                  <AvatarImage
                    src={videoDetails?.channelImage}
                    alt={videoDetails?.title}
                  />
                  <AvatarFallback>
                    <div>
                      {videoDetails!.channelName[0] +
                        videoDetails!.channelName[1]}
                    </div>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">
                    {videoDetails?.channelName}
                  </h4>
                  <p>
                    {formatCount(+videoDetails!.subscribersCount)}Subscribers
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 text-sm items-center bg-gray-600 text-white px-2 md:px-2 rounded-3xl">
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <ThumbsUp className="w-4" />
                  <span className="text-[9px]">
                    {formatCount(videoDetails?.likes)}
                  </span>
                </button>
                <span>|</span>
                <button className="flex items-center hover:text-red-500 hover:text-blue-500">
                  <ThumbsDown className="w-4 " />
                </button>
              </div>
            </div>
          </div>
          {/*SHOW RELATED*/}
          <div className="md:col-span-4"></div>
        </div>
      </div>
    </div>
  );
};
export default VideoDetails;

// 1 17 40
