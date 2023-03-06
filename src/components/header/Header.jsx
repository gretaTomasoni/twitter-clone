// import "./index.css";

// const Header = () => {
//   return (
//     <div className="Header">
//       <img
//         className="Header__profile"
//         src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
//         alt="profile image"
//       />
//       <img
//         className="Header__logo"
//         src="https://img.icons8.com/color/512/twitter.png"
//         alt="logo twitter"
//       />
//     </div>
//   );
// };

// export default Header;

import { slide as Menu } from "react-burger-menu";
import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <Menu
        id={"sidebar"}
        className={"my-menu"}
        customBurgerIcon={
          <img
            className="bm-burger-button"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
          />
        }
      >
        <a id="home" className="menu-item">
          Home
        </a>
        <a id="about" className="menu-item">
          About
        </a>
        <a id="contact" className="menu-item">
          Contact
        </a>
        <a id="settings" className="menu-item">
          Settings
        </a>
      </Menu>
      <img
        className="Header__logo"
        src="https://img.icons8.com/color/512/twitter.png"
        alt="logo twitter"
      />
    </div>
  );
};

export default Header;
