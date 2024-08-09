import { House, Search } from "lucide-react";
import React from "react";

export default function Navigate() {
  return (
    <div className="rounded-2xl dark:bg-[#121212]">
      <div className="flex flex-col items-start h-full justify-center px-2 py-3">
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
  );
}
