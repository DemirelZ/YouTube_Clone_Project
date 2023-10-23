import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";
import VideoCard from "../components/VideoCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../utils/helpers";

const VideoDetail = () => {
  const [searchParam] = useSearchParams();
  const [related, setRelated] = useState(null);
  const id = searchParam.get("v");

  useEffect(() => {
    // videoyla alakalı içerikleri getirir
    getData(`/related?id=${id}`).then((res) => setRelated(res.data.data));
  }, []);

  return (
    <div className="h-screen overflow-auto  flex flex-col lg:flex-row  gap-16 p-4 ">
      <div className="w-full">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
          width={"100%"}
          height={"60vh"}
        />

        <VideoInfo id={id} />
      </div>

      <div className="flex flex-col gap-16 lg:max-w-[600px] sm:m-auto lg:h-screen lg:overflow-auto overflow-container">
        {!related
          ? "..."
          : related.map((item) => {
              if (item.type !== "video") return;
              return <VideoCard video={item} />;
            })}
      </div>
    </div>
  );
};

export default VideoDetail;
