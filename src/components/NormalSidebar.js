import React from "react";
import { Link } from "react-router-dom";
import SidebarOptions from "./SidebarOptions";
import Dropdown from "./dropdownComponents/Dropdown";

const NormalSidebar = () => {
  return (
    <div className="normalsidebar">
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions
          src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj"
          title="Saurabh Bhatt"
        />
      </Link>
      <Link
        to={"/covidinfo"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <SidebarOptions
          src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
          title="Covid-19 Information"
        />
      </Link>
      <Link to={"/friends"} style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions
          src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
          title="Friends"
        />
      </Link>
      <Link to={"/groups"} style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions
          src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
          title="Groups"
        />
      </Link>
      <Link to={"/video"} style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions
          src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
          title="Watch"
        />
      </Link>
      <Dropdown />
    </div>
  );
};

export default NormalSidebar;
