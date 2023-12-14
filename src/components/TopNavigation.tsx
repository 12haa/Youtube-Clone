"use client";

import { Bell, Menu, Search, Video, Youtube } from "lucide-react";
import Link from "next/link";
import { FormEvent, useContext, useRef, useState } from "react";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppContext from "@/context/appContext";

const TopNavigation = () => {
  // DIALOG States
  const [dialogOpen, setDialogOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInputRef.current) {
      console.log(searchInputRef.current.value);
    }
  };
  const { showNav, setShowNav } = useContext(AppContext);
  return (
    <nav className="fixed top-0 left-0 w-screen z-20 dark:bg-black bg-white">
      <div className="flex justify-between items-center px-2 md:px-7 h-16 ">
        <div className="flex items-center">
          <span className="hover:bg-background-dark/30 md:block hidden hover:text-white cursor-pointer rounded-full p-2 m-1 ">
            <Menu
              onClick={() => setShowNav((prevState) => !prevState)}
              size={30}
            />
          </span>

          <Link href={"/"} className="flex items-center space-x-2">
            <Youtube size={48} className="text-red-700" />

            <span className="hidden md:block text-2xl font-bold">Youtube</span>
          </Link>
        </div>
        {/*SECOND SECTION*/}

        <div className="md:flex items-center justify-center hidden">
          <form
            onSubmit={handleSubmit}
            className="flex items-center h-10 mx-auto"
          >
            <input
              type="search"
              placeholder="search"
              ref={searchInputRef}
              className="px-4 h-full md:w-48 lg:w-96 border dark:border-gray-50 border-gray-300 rounded-l-full focus:outline-none dark:bg-black bg-white"
            />
            <div className="h-full px-5 grid place-content-center bg-background-light text-black rounded-r-full ">
              <Search />
            </div>
          </form>
        </div>
        {/*  THIRD SECTION*/}

        <div className="flex items-center space-x-7">
          <div className="md:hidden ">
            <ThemeToggle />
          </div>
          <Video />
          <Bell />
          <div className="md:hidden">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger>
                <Search
                  onClick={() => {
                    setDialogOpen(true);
                  }}
                />
              </DialogTrigger>
              <DialogContent>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center h-10 mx-auto"
                >
                  <input
                    type="search"
                    placeholder="search"
                    ref={searchInputRef}
                    className="px-4 h-full md:w-48 lg:w-96 border dark:border-gray-50 border-gray-300 rounded-l-full focus:outline-none dark:bg-black bg-white"
                  />
                  <div className="h-full px-5 grid place-content-center bg-background-light text-black rounded-r-full ">
                    <Search />
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          {/*  DESKTOP DEVICES*/}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="">
                  <AvatarImage src="human.jpg" alt="avatar" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                <DropdownMenuLabel>
                  {/*DROPDOWN MENU*/}
                  <div className="flex space-x-4">
                    <Avatar className="">
                      <AvatarImage src="human.jpg" alt="avatar" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col scroll-py-3 text-base  ">
                      <span>
                        <p>Mohammad </p>
                        <p>@12haa</p>
                      </span>
                      <Link
                        href={`/channels/${process.env.NEXT_PUBLIC_CHANNEL_ID}`}
                        className="text-blue-500"
                      >
                        View Your Channel
                      </Link>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/*  THEME TOGGLE FOR DESKTOP*/}
                <div className="p-2 flex items-center ">
                  <span className="mr-2 ">Appearence:</span>
                  <ThemeToggle />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default TopNavigation;
