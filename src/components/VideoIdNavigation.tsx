"use client";

import React, { useContext } from "react";
import AppContext from "@/context/appContext";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const VideoIdNavigation = () => {
  const { showNav, setShowNav } = useContext(AppContext);
  console.log(setShowNav, "set show nav");
  return (
    <>
      {showNav && (
        <div
          className="w-screen h-screen top-10 left-40 z-30 fixed bg-[rgba(0,0,0,0.75)] border-2 border-red-700"
          onClick={() => setShowNav((prevState) => !prevState)}
        />
      )}
      <Sidebar className={cn(showNav ? "translate-x-0" : "")} />
    </>
  );
};
export default VideoIdNavigation;
