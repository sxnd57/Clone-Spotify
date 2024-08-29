import Sidebar from "@/app/components/Sidebar";
import HeaderMenu from "@/app/components/HeaderMenu";
const ControlCenter = dynamic(() => import("@/app/components/ControlCenter"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MusicTab from "@/app/components/MusicTab";
import PodcastsTab from "@/app/components/PodcastsTab";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <HeaderMenu  />
      <div className="min-h-0 flex-1 dark:bg-black">
        <div className="grid h-full grid-cols-7">
          <ScrollArea className="mr-1 hidden rounded-2xl p-2 dark:bg-primary xl:block">
            <Sidebar />
          </ScrollArea>
          <ScrollArea
            className={`col-span-7 ml-1 mr-0 rounded-2xl p-3 dark:bg-primary xl:col-span-6`}
          >
            <div className="m-2">
              <Tabs defaultValue="music">
                <TabsList>
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="podcasts">Podcast</TabsTrigger>
                </TabsList>
                <MusicTab />
                <PodcastsTab/>
              </Tabs>
            </div>
          </ScrollArea>
        </div>
      </div>
      <ControlCenter />
    </div>
  );
}

