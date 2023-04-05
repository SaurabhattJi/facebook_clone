import React, { useState } from "react";
import "../css/uploadedPost.css";
import { Avatar, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareDropdown from "../components/dropdownComponents/ShareDropdown";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const UploadedPost = ({
  photoURl,
  image,
  userName,
  timeStamp,
  msg,
  Like,
  price,
  Location,
}) => {
  const [like, setLike] = useState(Like);
  const [color, setColor] = useState(<ThumbUpOffAltIcon />);
  const likeClick = () => {
    if (like === Like) {
      setLike(like + 1);
      setColor(<ThumbUpIcon style={{ color: "#1877f2" }} />);
    } else {
      setLike(like - 1);
      setColor(<ThumbUpOffAltIcon />);
    }
  };

  return (
    <div className="upload">
      <div className="upload__middle" style={{ cursor: "pointer" }}>
        <p>{msg}</p>
        <p>
          Location: <strong>{Location}</strong>{" "}
        </p>
        {image && <img src={image} width={"100%"} height={"450px"} alt="Pic" />}
      </div>
      <div className="uploadInfo">
        <p style={{ marginTop: "5px" }}>
          {timeStamp} <PublicIcon />
        </p>
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
          <span style={{ display: "flex", gap: "5px" }}>
            <CurrencyRupeeIcon /> <p>{price} Ruppes</p>
          </span>
        </div>
        <div className="upload__bottom__options">
          <ShareDropdown />
        </div>
      </div>
      <span style={{ display: "flex" }}>
        <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />

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
        >
          Buy Item
        </button>
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
        >
          Remove Item
        </button>
      </span>
    </div>
  );
};

export default UploadedPost;
