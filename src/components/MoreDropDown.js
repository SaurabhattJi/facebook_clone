import React, { useState } from "react";
import "../css/moredropdown.css";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const MoreDropdown = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="more_dropdown">
      <div
        className="more_dropdown_btn"
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <MoreHorizIcon />
      </div>
      {active && (
        <div className="more_dropdown_content">
          <div className="more_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <BookmarkBorderIcon />
            </IconButton>
            <span>
              <h3>Save Post</h3>
              <p>Add this to your saved items</p>
            </span>
          </div>
          <hr />
          <div className="more_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            Turn on notification for this post
          </div>
          <hr />
          <div className="more_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <CancelOutlinedIcon />
            </IconButton>
            <span>
              <h3>Hide this post</h3>
              <p>See fewer post like this.</p>
            </span>
          </div>
          <div className="more_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <AccessTimeIcon />
            </IconButton>
            <span>
              <h3>Snooze for 30 days</h3>
              <p>Temporarily stop seeing posts.</p>
            </span>
          </div>
          <div className="more_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <AnnouncementOutlinedIcon />
            </IconButton>
            <span>
              <h3>Report post</h3>
              <p>I'm concerned about this post.</p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreDropdown;
