import React from "react";
import "../css/sidebar.css";
import SidebarOptions from "./SidebarOptions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOptions
        src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj"
        title="Saurabh Bhatt"
      />
      <SidebarOptions
        src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
        title="Covid-19 Information"
      />
      <SidebarOptions
        src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
        title="Friends"
      />
      <SidebarOptions
        src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
        title="Grpups"
      />
      <SidebarOptions
        src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
        title="Watch"
      />
      <SidebarOptions
        src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png"
        title="Event"
      />
      <SidebarOptions Icon={ExpandMoreIcon} title="See more" />
    </div>
  );
};

export default Sidebar;
