import React, { useState, useEffect } from "react";
import "../css/sidebar.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SidebarOptions from "./SidebarOptions";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./dropdownComponents/Dropdown";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { BsSearch } from "react-icons/bs";
// import NormalSidebar from "./NormalSidebar";

export const SideBarData = [
  {
    name: "Saurabh Bhatt",
    path: "/",
    icon: <Avatar />,
    src: "https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Covid-19 Information",
    path: "/covidinfo",
    icon: <Avatar />,
    src: "https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png",
  },
  {
    name: "Friends ",
    path: "/friends",
    icon: <Avatar />,
    src: "https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png",
  },
  {
    name: "Groups ",
    path: "/groups",
    icon: <Avatar />,
    src: "https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png",
  },
  {
    name: "Watch",
    path: "/video",
    icon: <Avatar />,
    src: "https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png",
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  useEffect(() => {
    let handler = () => {
      setSidebar(false);
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <>
      <div className="sidebar">
        <span onClick={showSidebar}>
          <MenuIcon />
        </span>

        <div className={sidebar ? " side_menu active" : "side_menu"}>
          {/* <div className="header__left">
            <Link to="/">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt="Logo"
              />
            </Link>

            <div className="header__search">
              <BsSearch />
              <input type="text" placeholder="Search here" />
            </div>
          </div> */}
          {SideBarData.map((item, i) => {
            return (
              <div key={i}>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <SidebarOptions src={item.src} title={item.name} />
                </Link>
              </div>
            );
          })}

          {/* <Link
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
      </Link> */}
          {/* <SidebarOptions
        src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png"
        title="Event"
      /> */}

          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
