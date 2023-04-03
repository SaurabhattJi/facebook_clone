import React, { useState } from "react";
import "../css/uploadedPost.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PublicIcon from "@mui/icons-material/Public";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const UploadedPost = ({
  photoURl,
  image,
  userName,
  timeStamp,
  msg,
  Like,
  Comments,
}) => {
  const [like, setLike] = useState(Like);
  const [color, setColor] = useState(<ThumbUpOffAltIcon />);
  const [comment, setComment] = useState(Comments);
  const likeClick = () => {
    setLike(like + 1);

    setColor(<ThumbUpIcon />);
  };
  const comntclick = () => {
    if (UploadedPost.id === document.getElementById("Comment")) {
      return (
        <>
          <textarea
            name=""
            id="Comment"
            rows="2"
            style={{
              display: "flex",
              border: "none",
              outline: "none",
              width: "100%",
              margin: "10px 10px",
            }}
            placeholder="Write a comment ..."
          ></textarea>
        </>
      );
    }
  };
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
          <span
            onClick={likeClick}
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton>{color}</IconButton>
            <p>{like} Likes</p>
          </span>
        </div>
        <div className="upload__bottom__options">
          <span onClick={comntclick} style={{ display: "flex" }}>
            <ChatBubbleOutlineIcon /> <p>{comment} Comment</p>
          </span>
        </div>
        <div className="upload__bottom__options">
          <ShareIcon /> <p>Share</p>
        </div>
      </div>
      <textarea
        name=""
        id="Comment"
        rows="2"
        style={{
          display: "none",
          border: "none",
          outline: "none",
          width: "100%",
          margin: "10px 10px",
        }}
        placeholder="Write a comment ..."
      ></textarea>
    </div>
  );
};

export default UploadedPost;
