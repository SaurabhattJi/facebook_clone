import React, { useState } from "react";
import "../css/uploadedPost.css";
import { Avatar, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PublicIcon from "@mui/icons-material/Public";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareDropdown from "./dropdownComponents/ShareDropdown";
import MoreDropdown from "./dropdownComponents/MoreDropDown";

// destructuring the props
const UploadVideo = ({
  photoURl,
  image,
  userName,
  timeStamp,
  msg,
  Like,
  Comments,
}) => {
  // this useState is for like or dislike in video section
  const [like, setLike] = useState(Like);

  // this useState is for change the color of like button
  const [color, setColor] = useState(<ThumbUpOffAltIcon />);
  const [comment, setComment] = useState(Comments);

  // this function is used for like functionaility +/- like
  const likeClick = () => {
    if (like === Like) {
      setLike(like + 0.1);
      setColor(<ThumbUpIcon style={{ color: "#1877f2" }} />);
    } else {
      setLike(like - 0.1);
      setColor(<ThumbUpOffAltIcon />);
    }
  };
  const comntclick = () => {
    setComment(comment + 1);
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
        <span>
          <MoreDropdown />
        </span>
      </div>
      <div className="upload__middle">
        <p>{msg}</p>
        {image && (
          <iframe
            src={image}
            title="YouTube video player"
            frameBorder={"0"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="upload__bottom">
        <div className="upload__bottom__options">
          <span
            onClick={likeClick}
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton>{color}</IconButton>
            <p>{like}K Likes</p>
          </span>
        </div>
        <div className="upload__bottom__options">
          <span style={{ display: "flex", gap: "5px" }}>
            <ChatBubbleOutlineIcon /> <p>{comment} Comment</p>
          </span>
        </div>
        <div className="upload__bottom__options">
          <ShareDropdown />
        </div>
      </div>
      <span style={{ display: "flex" }}>
        <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
        <textarea
          name=""
          id="Comment"
          rows="2"
          style={{
            display: "flex",
            border: "none",
            outline: "none",
            width: "100%",
            margin: "20px 10px",
          }}
          placeholder="Write a comment ..."
        />

        <button
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            borderRadius: "10px",
            outline: "none",
            cursor: "pointer",
            padding: "5px",
          }}
          onClick={comntclick}
        >
          Comment
        </button>
      </span>
    </div>
  );
};

export default UploadVideo;
