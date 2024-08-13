"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, List } from "lucide-react";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { array } from "zod";

export default function PopoverDemo() {
  const filterOptions = ["Gần đây", "Mới thêm gần đây", "Người sáng tạo"];
  const typeLayouts = ["Rút gọn", "Danh sách", "Lưới"];

  const [activeIndices, setActiveIndices] = useState({
    filterOptions: null,
    typeLayouts: null,
  });

  const handleActive = (listName:any, index:number) => {
    setActiveIndices((prevIndices) => ({
      ...prevIndices,
      [listName]: prevIndices[listName] === index ? null : index,
    }));
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex cursor-pointer items-center filter transition-all hover:scale-[1.05]">
          <p className="me-3 text-sm font-light">Gần đây</p>
          <List />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-0 dark:bg-[#282828]">
        <ul>
          <li className="p-3 pe-2 text-[11px] font-semibold text-gray-300">
            Sắp xếp theo
          </li>
          {filterOptions.map((item, index) => (
            <li
              onClick={() => handleActive("filterOptions", index)}
              className={`flex cursor-pointer justify-between px-2 py-3 text-[14px] hover:bg-gray-700 ${index === activeIndices.filterOptions ? "text-active" : ""}`}
              key={index}
            >
              {item}
              {index === activeIndices.filterOptions && (
                <Check className="text-[--text-active] w-4"  />
              )}
            </li>
          ))}
          <Separator className="bg-slate-700" />
          <li className="p-3 pe-2 text-[11px] font-semibold text-gray-300">
            Xem dưới dạng
          </li>
          {typeLayouts.map((item, index) => (
            <li
              onClick={() => handleActive("typeLayouts", index)}
              className={`flex cursor-pointer justify-between px-2 py-3 text-[14px] hover:bg-gray-700 ${index === activeIndices.typeLayouts ? "text-active" : ""}`}
              key={index}
            >
              {item}
              {index === activeIndices.typeLayouts && (
                <Check className="text-[--text-active] w-4"  />
              )}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
