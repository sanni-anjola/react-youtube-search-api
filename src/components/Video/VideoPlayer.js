import React, { useContext } from "react";
import { videoContext } from "../../store/video-context";

const VideoPlayer = () => {
    const videoCtx = useContext(videoContext)
  let display;
  if (videoCtx.selectedVideo === null) {
    display = <div>Select a Video to display</div>;
  } else {
    display = (
      <>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoCtx.selectedVideo.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {videoCtx.selectedVideo?.snippet.title}
      </>
    );
  }
  return display;
  //   (
  // <>
  //   {!!selectedVideo ? (
  //     <div>{selectedVideo?.snippet.title}</div>
  //   ) : (
  //     <div>Select a video</div>
  //   )}
  // </>

  //   );
};

export default VideoPlayer;
