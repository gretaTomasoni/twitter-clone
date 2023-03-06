import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <img
        className="Header__profile"
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
        alt="profile image"
      />
      <img
        className="Header__logo"
        src="https://img.icons8.com/color/512/twitter.png"
        alt="logo twitter"
      />
    </div>
  );
};

export default Header;
