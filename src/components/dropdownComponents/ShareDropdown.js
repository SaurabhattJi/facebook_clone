import React, { useState } from "react";
import "../../css/sharedropdown.css";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { BsMessenger } from "react-icons/bs";
import LoupeIcon from "@mui/icons-material/Loupe";
import FlagIcon from "@mui/icons-material/Flag";
import GroupsIcon from "@mui/icons-material/Groups";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

const Dropdown = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="share_dropdown">
      <div
        className="share_dropdown_btn"
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <ShareIcon />
        Share
      </div>
      {active && (
        <div className="share_dropdown_content">
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <NoteAltIcon />
            </IconButton>
            Share to Feed
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <ImportContactsIcon />
            </IconButton>
            Add to story
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <FlagIcon />
            </IconButton>
            Share to page
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <LoupeIcon />
            </IconButton>
            Share to your story(friends)
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <BsMessenger />
            </IconButton>
            Send in Messanger
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <GroupsIcon />
            </IconButton>
            Share to a group
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
