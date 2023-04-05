import React from "react";
import { Avatar } from "@mui/material";
import SidebarOptions from "../SidebarOptions";

const Group = () => {
  return (
    <div className="feed">
      <h2 style={{ margin: "0 auto", display: "flex", alignItems: "center" }}>
        <SidebarOptions src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" />
        Your Groups
      </h2>

      <div className="right__body">
        <div className="right__body__options ">
          <Avatar src="https://i.pinimg.com/originals/1a/80/89/1a8089c372e28b3f53ec6d68f8fcff80.jpg" />
          <h4>School Friends</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://cdn4.vectorstock.com/i/1000x1000/38/53/word-text-blue-fun-image-vector-19183853.jpg" />
          <h4>Fun Unlimited</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/4/45/The_Kapil_Sharma_Show_logo.png" />
          <h4>The kapil Sharma show</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/WWE_Black_HQ_logo.png/640px-WWE_Black_HQ_logo.png" />
          <h4>WWE</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://media.cntraveler.com/photos/5e260c302245530008bbdf60/master/w_4500,h_3000,c_limit/Sri-Lanka-adventure-GettyImages-570714233.jpg" />
          <h4>The Adventure</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png" />
          <h4>India</h4>
        </div>
        <div className="right__body__options ">
          <Avatar src="https://w7.pngwing.com/pngs/942/724/png-transparent-free-funny-jokes-youtube-android-world-s-funniest-joke-between-smiley-emoticon-joke-thumbnail.png" />
          <h4>The Jokes Hub</h4>
        </div>
      </div>
    </div>
  );
};

export default Group;
