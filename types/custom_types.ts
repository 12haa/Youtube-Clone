export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  viewCount: number;
  channelTitle: {
    channelId: string;
    channelTitle: string;
    channelImage: string;
  };
  publishedAt: string;
};
