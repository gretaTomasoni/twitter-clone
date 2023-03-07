import homeIcon from "../../assets/img/home.png";
import exploreIcon from "../../assets/img/hash.png";
import notificationIcon from "../../assets/img/notification.png";
import messagesIcon from "../../assets/img/messages.png";
import bookmarkIcon from "../../assets/img/bookmark.png";
import blueIcon from "../../assets/img/blue.png";
import profileIcon from "../../assets/img/profile.png";
import moreIcon from "../../assets/img/more.png";
import "./index.css";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <div className="SideMenu_container">
        <img
          className="SideMenu_logo"
          src="https://img.icons8.com/color/512/twitter.png"
          alt="logo"
        />
        <ul className="SideMenu_list">
          <li>
            <img src={homeIcon} alt="home" />
            <p className="active">Home</p>
          </li>
          <li>
            <img src={exploreIcon} alt="explore" />
            <p>Explore</p>
          </li>
          <li>
            <img src={notificationIcon} alt="notifications" />
            <p>Notifications</p>
          </li>
          <li>
            <img src={messagesIcon} alt="messages" />
            <p>Messages</p>
          </li>
          <li>
            <img src={bookmarkIcon} alt="bookmarks" />
            <p>Bookmarks</p>
          </li>
          <li>
            <img src={blueIcon} alt="twitter blue" />
            <p>Twitter Blue</p>
          </li>
          <li>
            <img src={profileIcon} alt="profile" />
            <p>Profile</p>
          </li>
          <li>
            <img src={moreIcon} alt="more" />
            <p>More</p>
          </li>
        </ul>
        <button className="Tweet_button">Tweet</button>
      </div>
    </div>
  );
};

export default SideMenu;
