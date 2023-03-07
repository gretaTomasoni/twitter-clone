import { FiX } from "react-icons/fi";
import "./index.css";

const MenuHamburger = ({ showMenu, setShowMenu }) => {
  const changeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={showMenu ? "MenuHamburger" : ""}>
      <div className={`contentMenu ${showMenu ? "contentMenu_show" : ""}`}>
        <div className="contentMenu__header">
          <h3>Informazioni account</h3>
          <FiX className="closeButton" onClick={changeMenu} />
        </div>
        <div className="account">
          <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" />
          <p>
            <b>greta</b>
          </p>
          <span>@greta_tomasoni</span>
          <div className="account_follower">
            <span>
              <span className="bold">96</span> following{" "}
            </span>
            <span>
              <span className="bold">0</span> follower
            </span>
          </div>
        </div>
        {/* <a id="home" className="menu-item">
          Profilo
        </a>
        <a id="about" className="menu-item">
          Argomenti
        </a>
        <a id="contact" className="menu-item">
          Segnalibri
        </a>
        <a id="settings" className="menu-item">
          Liste
        </a>
        <a id="settings" className="menu-item">
          Twitter circle
        </a> */}
      </div>
      <div className={showMenu ? "overlay" : ""} onClick={changeMenu}></div>
    </div>
  );
};

export default MenuHamburger;
