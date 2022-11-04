import { createContext, useState } from "react";

export const videoContext = createContext({
  selectedVideo: null,
  setSelectedVideo: () => {},
});

const VideoProvider = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <videoContext.Provider value={{ selectedVideo, setSelectedVideo }}>
      {children}
    </videoContext.Provider>
  );
};

export default VideoProvider
