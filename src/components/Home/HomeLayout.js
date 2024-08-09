import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  ArrowRight,
  House,
  LibraryBig,
  List,
  Plus,
  Search,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export default function MainPage({children}) {
  return (
    <div className="bg-white dark:bg-black">
      <div className="grid h-screen grid-cols-12 gap-2 p-2">
        <div className="col-span-5 grid grid-rows-12 gap-2 md:col-span-3">
          <div className="row-span-2 place-content-center rounded-2xl bg-slate-100 px-2 py-3 dark:bg-[#121212]">
            <div className="flex flex-col">
              <button className="flex items-center px-3 py-3 text-start font-bold">
                <House className="me-4" />
                Trang chủ
              </button>
              <button className="flex items-center px-3 py-3 text-start font-bold text-gray-400">
                <Search className="me-4" />
                Tìm kiếm
              </button>
            </div>
          </div>
          <div className="row-span-10 rounded-2xl bg-slate-100 px-2 py-3 dark:bg-[#121212]">
            <div className="flex items-center justify-between px-3 py-3">
              <LibraryBig className="text-gray-400" />
              <div className="flex items-center">
                <Plus className="mx-2" />
                <ArrowRight className="mx-2" />
              </div>
            </div>
            <div className="my-2 flex items-center">
              <Button className="me-4 rounded-2xl" variant={"ghost"}>
                Danh sách phát
              </Button>
              <Button className="mx-4 rounded-2xl" variant={"ghost"}>
                Nghệ sĩ
              </Button>
              <Button className="mx-4 rounded-2xl" variant={"ghost"}>
                Album
              </Button>
            </div>
            <ScrollArea className="h-full px-3 py-4">
              <div className="flex items-center justify-between">
                <Search width={16} />
                <div className="flex cursor-pointer items-center filter transition-all hover:scale-[1.05]">
                  <p className="me-3 text-sm font-light">Gần đây</p>
                  <List />
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
        <div className="col-span-6 rounded-2xl bg-slate-100 px-2 py-3 dark:bg-[#121212] md:col-span-9">{children}</div>
      </div>
    </div>
  );
}
