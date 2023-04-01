import React from "react";
import "../css/uploadedPost.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const UploadedPost = ({ photoURl, image, userName, timeStamp, msg, Like }) => {
  return (
    <div className="upload">
      <div className="upload__top">
        <div className="upload__topLeft">
          <Avatar src={photoURl} />
          <div className="uploadInfo">
            <h4>{userName}</h4>
            <p>
              {timeStamp} <PublicIcon />
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="upload__middle">
        <p>{msg}</p>
        {image && <img src={image} alt="Pic" />}
      </div>
      <div className="upload__bottom">
        <div className="upload__bottom__options">
          <ThumbUpOffAltIcon /> <p>{Like} Likes</p>
        </div>
        <div className="upload__bottom__options">
          <ChatBubbleOutlineIcon /> <p>Comment</p>
        </div>
        <div className="upload__bottom__options">
          <ShareIcon /> <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default UploadedPost;
