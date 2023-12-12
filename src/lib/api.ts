import axios from "axios";

import { Video } from "../../types/custom_types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchVideos(query: string, maxResult: number) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search?key=${API_KEY}&q=${query}&order=date&maxResults=${maxResult}&type=video&part=snippet`,
    );

    const videos: Video[] = [];
    for (const video of data.items) {
      const videoId = video.id.videoId;
      const videoTitle = video.snippet.title;
      const videoDescription = video.snippet.description;
      const videoThumbnail = video.snippet.thumbnails.medium.url;

      const videoDetailsUrl = `${BASE_URL}/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`;

      const { data: videoData } = await axios.get(videoDetailsUrl);

      const viewCount = videoData.items[0].statistics.viewCount;
      const channelId = video.snippet.channelId;

      const channelDetailsUrl = `${BASE_URL}/channels?key=${API_KEY}&id=${channelId}&part=snippet`;

      const { data: channelData } = await axios.get(channelDetailsUrl);

      const channelTitle = channelData.items[0].snippet.title;
      const channelImage = channelData.items[0].snippet.thumbnails.medium.url;

      const publishedDate = video.snippet.publishedAt;

      videos.push({
        id: videoId,
        title: videoTitle,
        description: videoDescription,
        thumbnail: videoThumbnail,
        viewCount,
        channelTitle: {
          channelId,
          channelTitle,
          channelImage,
        },
        publishedAt: publishedDate,
      });
    }
    // console.log(videos);

    return videos;
  } catch (error: any) {
    console.log("ERROR FETCHING VIDEOS", error.response.data);
    throw error;
  }
}
