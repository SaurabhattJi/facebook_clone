import React from "react";
import "../css/right.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";

const RightSideBar = () => {
  return (
    <div className="right">
      <div className="right__header">
        <div className="right__header__left">
          <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="right__body">
        <div className="right__body__options ">
          <Avatar src="https://i.pinimg.com/originals/1a/80/89/1a8089c372e28b3f53ec6d68f8fcff80.jpg" />
          <h4>School Friends</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://cdn4.vectorstock.com/i/1000x1000/38/53/word-text-blue-fun-image-vector-19183853.jpg" />
          <h4>Fun Unlimited</h4>
        </div>
        <div className="right__body__options icon">
          <NotificationsActiveIcon />
          <p>1 Notification</p>
        </div>
        <div className="right__body__options icon">
          <VolumeUpIcon />
          <p>Create Promotion</p>
        </div>
      </div>
      <hr /> <br />
      <div className="right__header">
        <div className="right__header__left">
          <h4>Contacts</h4>
        </div>
        <div className="right__header__right">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="right__body">
        <div className="right__body__options ">
          <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <h4>Himanshu Dube</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
          <h4>Kamlesh Joshi</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://static.tnn.in/photo/97415915/97415915.jpg" />
          <h4>Dinesh Sanwal</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://i.pinimg.com/236x/9a/bd/46/9abd46666da62bb93a2a02a40814c3ff.jpg" />
          <h4>Madhur Sanwal</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://burst.shopifycdn.com/photos/dark-haired-man-in-brown-leather-jacket.jpg?width=1200&format=pjpg&exif=1&iptc=1" />
          <h4>Gaurav</h4>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
