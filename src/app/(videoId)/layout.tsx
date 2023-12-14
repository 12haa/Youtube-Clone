import React from "react";
import VideoIdNavigation from "@/components/VideoIdNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VideoIdNavigation />
      {children}
    </>
  );
}
