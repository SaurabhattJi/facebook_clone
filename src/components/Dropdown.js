import React, { useState } from "react";
import "../css/dropdown.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

const Dropdown = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown_btn"
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <ExpandMoreIcon />
        See More
      </div>
      {active && (
        <div className="dropdown_content">
          <div className="dropdown_item">
            <IconButton style={{ color: "black" }}>
              <SettingsIcon />
            </IconButton>
            Settings
          </div>
          <div className="dropdown_item">
            <IconButton style={{ color: "black" }}>
              <BookmarkBorderIcon />
            </IconButton>
            Favourites
          </div>
          <div className="dropdown_item">
            <IconButton style={{ color: "black" }}>
              <HistoryIcon />
            </IconButton>
            Memories
          </div>
          <div className="dropdown_item">
            <IconButton style={{ color: "black" }}>
              <LogoutIcon />
            </IconButton>
            Log Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
