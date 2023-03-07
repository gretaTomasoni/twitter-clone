import CreateTweet from "../createTweet";
import homeIcon from "../../assets/img/home.png";
import exploreIcon from "../../assets/img/hash.png";
import notificationIcon from "../../assets/img/notification.png";
import messagesIcon from "../../assets/img/messages.png";
import bookmarkIcon from "../../assets/img/bookmark.png";
import blueIcon from "../../assets/img/blue.png";
import profileIcon from "../../assets/img/profile.png";
import moreIcon from "../../assets/img/more.png";
import "./index.css";

const SideMenuTablet = () => {
  return (
    <div className="SideMenuTablet">
      <div className="SideMenuTablet_container">
        <img
          className="SideMenuTablet_logo"
          src="https://img.icons8.com/color/512/twitter.png"
          alt="logo"
        />
        <ul className="SideMenuTablet_list">
          <li>
            <img src={homeIcon} alt="home" />
          </li>
          <li>
            <img src={exploreIcon} alt="explore" />
          </li>
          <li>
            <img src={notificationIcon} alt="notifications" />
          </li>
          <li>
            <img src={messagesIcon} alt="messages" />
          </li>
          <li>
            <img src={bookmarkIcon} alt="bookmarks" />
          </li>
          <li>
            <img src={blueIcon} alt="twitter blue" />
          </li>
          <li>
            <img src={profileIcon} alt="profile" />
          </li>
          <li>
            <img src={moreIcon} alt="more" />
          </li>
          <li>
            <CreateTweet />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenuTablet;
