import React, { useState } from "react";
import "../css/sharedropdown.css";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SaveIcon from "@mui/icons-material/Save";

const MoreDropdown = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="share_dropdown">
      <div
        className="share_dropdown_btn"
        onClick={(e) => {
          setActive(!active);
        }}
      >
        <MoreHorizIcon />
      </div>
      {active && (
        <div className="share_dropdown_content">
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <SaveIcon />
            </IconButton>
            Save
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <ImportContactsIcon />
            </IconButton>
            Add to story
          </div>
          <div className="share_dropdown_item">
            <IconButton style={{ color: "black" }}>
              <ContentCopyIcon />
            </IconButton>
            Copy Link
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

export default MoreDropdown;
