import homeIcon from "../../assets/img/home.png";
import searchIcon from "../../assets/img/search.png";
import notificationIcon from "../../assets/img/notification.png";
import messagesIcon from "../../assets/img/messages.png";
import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={homeIcon} alt="home" />
      <img src={searchIcon} alt="search" />
      <img src={notificationIcon} alt="notification" />
      <img src={messagesIcon} alt="messages" />
    </div>
  );
};

export default Navbar;
