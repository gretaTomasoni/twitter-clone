import { useState } from "react";
import "./index.css";

const ControllerHeader = ({ setbuttonPage }) => {
  const [isActive, setIsActive] = useState(false);

  const isActiveFunc = () => {
    setIsActive((prev) => !prev);
    setbuttonPage(isActive);
    console.log(isActive);
  };

  return (
    <div className="ControllerHeader">
      <h3>Home</h3>
      <div className="ControllerHeader_button">
        <div className="forYou" onClick={isActiveFunc}>
          <a className={isActive ? "controller_disabled" : "controller_active"}>
            <p>For you</p>
            <div className={isActive ? "line" : "line blue"}></div>
          </a>
        </div>
        <div className="following" onClick={isActiveFunc}>
          {/* <a className="controller_disabled"> */}
          <a className={isActive ? "controller_active" : "controller_disabled"}>
            <p>Following</p>
            <div className={isActive ? "line blue" : "line"}></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ControllerHeader;
