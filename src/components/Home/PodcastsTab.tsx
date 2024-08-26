import React, { useEffect, useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

function PodcastsTab() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const token =
    "BQDkEfNF8zx36hkz13763ScZhlvVNFWkHB8KiuLsgyoONMtswYckREPwBI7mNldS8H238CZfmjE225bspKl70mwHs1w13pQvFOXrbPyq5oJRutzuDM8";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.spotify.com/v1/browse/featured-playlists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await res.json();
      setData(result.playlists.items);
    }

    fetchData();
  }, []);

  return (
    <TabsContent value="podcasts">
      {data.map(({ id, description, images }) => {
        return (
          <div key={id}>
            <Image
              src={images[0]["url"]}
              alt={"hinhanh"}
              width={400}
              height={400}
            />
            <p>{}</p>
          </div>
        );
      })}
    </TabsContent>
  );
}

export default PodcastsTab;
