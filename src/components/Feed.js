import React from "react";
import "../css/feed.css";
import StoryReels from "./StoryReels";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReels />
      <Posts />
    </div>
  );
};

export default Feed;
