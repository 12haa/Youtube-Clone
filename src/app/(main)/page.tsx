"use client";
import { useState } from "react";
import useSWR from "swr";
import { fetchVideos } from "@/lib/api";
import ThumbNail from "@/components/ThumbNail";

export default function Home() {
  const [badge, setBadge] = useState("All");
  // FETCHING Videos
  const {
    data: videoResults,
    error,
    isLoading,
  } = useSWR(`fetchVideos/${badge}`, () => fetchVideos("badge", 9));

  return (
    <>
      <div className="px-2 md:pl-[252px] fixed top-16 py-2 left-0 w-screen z-20 dark:bg-black bg-white "></div>
      <div className="flex flex-wrap">
        {videoResults?.map((video) => (
          <ThumbNail key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}
