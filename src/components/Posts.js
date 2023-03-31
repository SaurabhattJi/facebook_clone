import { Avatar } from "@mui/material";
import React from "react";
import "../css/post.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Posts = () => {
  return (
    <div className="post">
      <div className="post__first">
        <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="What's on your mind,Saurabh ?"
          />
        </form>
      </div>
      <div className="post__second">
        <div className="post__option">
          <VideoCallIcon style={{ color: "red" }} />
          <p>Live Video</p>
        </div>
        <div className="post__option">
          <AddToPhotosIcon style={{ color: "lightgreen" }} />
          <p>Photo/Video</p>
        </div>
        <div className="post__option">
          <EmojiEmotionsIcon style={{ color: "#ffb100" }} />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
