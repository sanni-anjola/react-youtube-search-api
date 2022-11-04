import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import { youtube } from "./api/youtube";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/Video/VideoList";
import VideoPlayer from "./components/Video/VideoPlayer";
import VideoProvider, { videoContext } from "./store/video-context";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("react");

  useEffect(() => {
    const fetchData = async () => {
      const res = await youtube.get("search/", {
        params: {
          part: "snippet",
          q: searchTerm,
        },
      });
      setData(res.data.items);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <VideoProvider>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="app-video">
        <VideoPlayer />
        <VideoList items={data} />
      </div>
    </VideoProvider>
  );
};

export default App;
