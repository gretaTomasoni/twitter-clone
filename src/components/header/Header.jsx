import { useState } from "react";
// import ControllerHeader from "../controllerHeader";
import "./index.css";

const Header = ({ showMenu, setShowMenu }) => {
  const changeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Header">
      <div className="Header_up">
        <img
          className="Header__profile"
          onClick={changeMenu}
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
          alt="profile image"
        />
        <img
          className="Header__logo"
          src="https://img.icons8.com/color/512/twitter.png"
          alt="logo twitter"
        />
      </div>
    </div>
  );
};

export default Header;
