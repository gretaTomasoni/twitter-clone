import "./index.css";

const ControllerHeader = () => {
  return (
    <div className="ControllerHeader">
      <h3>Home</h3>
      <div className="ControllerHeader_button">
        <div className="forYou">
          <a className="controller_active">
            <p>For you</p>
            <div className="line blue"></div>
          </a>
        </div>
        <div className="following">
          <a className="controller_disabled">
            <p>Following</p>
            <div className="line"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ControllerHeader;
