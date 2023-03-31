import React from "react";
import "../css/header.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineSportsEsports } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Avatar } from "@mui/material";
import { BsShop } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="Logo"
        />
        <div className="header__search">
          <BsSearch />
          <input type="text" placeholder="Search here" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <AiOutlineHome />
        </div>
        <div className="header__option">
          <MdOndemandVideo />
        </div>
        <div className="header__option">
          <BsShop />
        </div>
        <div className="header__option">
          <HiUserGroup />
        </div>
        <div className="header__option">
          <MdOutlineSportsEsports />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
          <h5>Saurabh Bhatt</h5>
        </div>
        <div className="icon">
          <AiFillAppstore />
        </div>
        <div className="icon">
          <BiMessageDots />
        </div>
        <div className="icon">
          <IoIosNotifications />
        </div>
        <div className="icon">
          <IoMdArrowDropdownCircle />
        </div>
      </div>
    </div>
  );
};

export default Header;
