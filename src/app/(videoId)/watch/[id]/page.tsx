"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchVideoDetails } from "@/lib/api";
import Loading from "@/app/loading";

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
  console.log(videoDetails);
  return <div></div>;
};
export default VideoDetails;
