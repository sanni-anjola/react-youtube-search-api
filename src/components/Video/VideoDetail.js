import React, { useContext } from "react";
import { videoContext } from "../../store/video-context";

const VideoDetail = ({ item }) => {
  const videoCtx = useContext(videoContext);

  return (
    <div onClick={() => videoCtx.setSelectedVideo(item)}>
      <div>
        <img
          src={item.snippet.thumbnails.default.url}
          alt={item.snippet.title}
        />
      </div>
      <div>
        <p>{item.snippet.title}</p>
        <p>{item.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
