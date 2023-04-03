import React, { useState } from "react";
import "../css/sharedropdown.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Diversity1Icon from "@mui/icons-material/Diversity1";

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
            <IconButton style={{ color: "green" }}>
              <WhatsAppIcon />
            </IconButton>
            Share on whatsapp
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <ImportContactsIcon />
            </IconButton>
            Add to story
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <BookmarkBorderIcon />
            </IconButton>
            Favourites
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "skyBlue" }}>
              <Diversity1Icon />
            </IconButton>
            Group
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
