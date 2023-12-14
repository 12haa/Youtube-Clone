"use client";

import React, { useContext } from "react";
import AppContext from "@/context/appContext";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const VideoIdNavigation = () => {
  const { showNav, setShowNav } = useContext(AppContext);
  return (
    <>
      {showNav && (
        <div className="w-screen h-screen top-0 left-0 z-30 fixed bg-[rgba(0,0,0,0.75)]" />
      )}
      <Sidebar className={cn(showNav ? "translate-x-0" : "")} />
    </>
  );
};
export default VideoIdNavigation;
