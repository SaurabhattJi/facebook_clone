import React from "react";
import "../css/header.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineSportsEsports } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { BsMessenger } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Avatar } from "@mui/material";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        {/* <div className="header__option header__option--active">
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
        </div> */}
        <Link to="/" className="header__option header__option--active">
          <AiOutlineHome />
        </Link>
        <Link to="/video" className="header__option">
          <MdOndemandVideo />
        </Link>
        <Link to="/shop" className="header__option">
          <BsShop />
        </Link>
        <Link to="/Groups" className="header__option">
          <HiUserGroup />
        </Link>
        <Link to="/sports" className="header__option">
          <MdOutlineSportsEsports />
        </Link>
      </div>
      <div className="header__right">
        <div className="icon">
          <TbGridDots />
        </div>
        <div className="icon">
          <BsMessenger />
        </div>
        <div className="icon">
          <IoIosNotifications />
        </div>
        <div className="icon">
          <IoMdArrowDropdownCircle />
        </div>
        <div className="header__info">
          <Avatar src="https://yt3.ggpht.com/mScHxoIcIqbmM7tw3AxCtWRFfMexLTqlux7KBrMh6igywT9kd_thm7cHXvxQyZHfvgjcO3l6Ew=s108-c-k-c0x00ffffff-no-rj" />
          <h5>Saurabh Bhatt</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
