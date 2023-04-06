import React from "react";
import "../../css/login.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="login_wrapper">
      <div className="login">
        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
        <h2>Sign in With Facebook</h2>
        <span>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Login With Facebook
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LogIn;
