import React from "react";
import VideoDetail from "./VideoDetail";

const VideoList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <VideoDetail
          key={item.id.videoId}
          item={item}
        />
      ))}
    </div>
  );
};

export default VideoList;
