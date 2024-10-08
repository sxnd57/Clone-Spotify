import React from "react";
import Image from "next/image";
import logoDark from "assets/images/sxnd-dark.png";
import logoLight from "assets/images/sxnd-light.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, House, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Avatar from "./Avatar";
import ModeSwitch from "@/components/theme-switch-mode";

const UserLoggedIn = ({ session }: { session: any }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 shadow dark:bg-black`}
    >
      <div className="header-left flex items-center">
        <Image
          className={`block dark:hidden`}
          src={logoDark}
          alt={"logo"}
          width={48}
          height={48}
        />
        <Image
          className={`hidden dark:block`}
          src={logoLight}
          alt={"logo"}
          width={48}
          height={48}
        />
        <div className="mx-3 block md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Search size={24} />
            </PopoverTrigger>
            <PopoverContent
              className="w-full border p-2 dark:bg-black"
              sideOffset={20}
              align={"start"}
            >
              <div className="search-bar group flex items-center rounded-3xl border border-neutral-500 bg-transparent px-3 transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 dark:bg-primary dark:text-neutral-200">
                <Search className="m-2" size={20} />
                <Input
                  className="h-8 rounded-3xl border-0 py-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-primary dark:text-neutral-200"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="header-center hidden items-center space-x-2 md:flex">
        <button className="rounded-full bg-transparent p-3 dark:bg-primary dark:text-neutral-200">
          <House size={24} />
        </button>
        <div className="search-bar group flex items-center rounded-3xl border border-neutral-500 bg-transparent px-3 transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 dark:bg-primary dark:text-neutral-200">
          <Search className="m-2" size={24} />
          <Input
            className="h-12 rounded-3xl border-0 py-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-primary dark:text-neutral-200"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="header-right flex items-center space-x-6">
        <ModeSwitch />
        <Bell className={`mx-6`} />
        <Avatar avatar={session.user.image} />
      </div>
    </div>
  );
};

export default UserLoggedIn;
