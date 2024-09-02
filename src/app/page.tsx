import Sidebar from "@/app/components/Sidebar";
import HeaderMenu from "@/app/components/HeaderMenu";

const ControlCenter = dynamic(() => import("@/app/components/ControlCenter"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlaylistDetail from "@/app/components/PlaylistDetail";
import PlaylistContextProvider from "@/contexts/PlaylistContext";
import SongContextProvider from "@/contexts/SongContext";

export default function Home() {
  return (
    <PlaylistContextProvider>
      <SongContextProvider>
        <div className="flex h-screen flex-col">
          <HeaderMenu />
          <div className="min-h-0 flex-1 dark:bg-black">
            <div className="my-2 grid h-full grid-cols-12">
              <ScrollArea className="col-span-2 mr-1 hidden rounded-2xl shadow dark:bg-primary xl:block">
                <Sidebar />
              </ScrollArea>
              <ScrollArea
                className={`col-span-12 ml-1 mr-0 rounded-2xl shadow dark:bg-primary xl:col-span-10`}
              >
                <div className="">
                  <PlaylistDetail />
                </div>
              </ScrollArea>
            </div>
          </div>
          <ControlCenter />
        </div>
      </SongContextProvider>
    </PlaylistContextProvider>
  );
}
