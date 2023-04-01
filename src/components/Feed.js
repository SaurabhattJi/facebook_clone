import React from "react";
import "../css/feed.css";
import StoryReels from "./StoryReels";
import Posts from "./Posts";
import UploadedPost from "./UploadedPost";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReels />
      <Posts />
      <UploadedPost
        photoURl=""
        // image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        userName="Saurabh Bhatt"
        timeStamp="10:45 Pm"
        msg="This is dummy msg"
      />
      <UploadedPost
        photoURl="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj"
        image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        userName="Saurabh Bhatt"
        timeStamp="01:28 Pm"
        msg="This is dummy msg"
        Like="10"
      />
      <UploadedPost
        photoURl=""
        // image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        userName="Saurabh Bhatt"
        timeStamp="08:36 Pm"
        msg="This is dummy msg"
      />
    </div>
  );
};

export default Feed;
