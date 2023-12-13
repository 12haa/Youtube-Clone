"use client";
import { useState } from "react";
import useSWR from "swr";
import { fetchVideos } from "@/lib/api";
import ThumbNail from "@/components/ThumbNail";
import Loading from "@/app/loading";
import { SearchBadge } from "@/components/SearchBadge";

export default function Home() {
  const [badge, setBadge] = useState("All");
  // FETCHING Videos
  const {
    data: videoResults,
    error,
    isLoading,
  } = useSWR(`fetchVideos/${badge}`, () => fetchVideos(badge, 9));
  if (error) throw new Error("Error Fetching Videos");

  return (
    <>
      <div className="px-2 md:pl-[252px] fixed top-16 py-2 left-0 w-screen z-20 dark:bg-black bg-white ">
        <SearchBadge
          badges={[
            "All",
            "Javascript",
            "Python",
            "Java",
            "C++",
            "C#",
            "PHP",
            "Ruby",
            "Go",
            "Kotlin",
            "Swift",
            "Rust",
            "C",
            "R",
            "SQL",
            "HTML",
            "CSS",
            "TypeScript",
            "Shell",
            "Dart",
            "t",
          ]}
          setBadge={setBadge}
          currentBadge={badge}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        {isLoading &&
          Array(9)
            .fill(null)
            .map((i, idx) => <Loading key={idx} />)}
        {isLoading && (
          <p className="absolute  top-[10%] left-[54%] text-2xl font-bold text-white light:text-black items-center justify-center">
            Loading Videos ...
          </p>
        )}

        {videoResults?.map((video) => (
          <ThumbNail key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}
