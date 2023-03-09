import ControllerHeader from "../controllerHeader";
import TweetList from "../tweetList";
import "./index.css";

const Content = () => {
  return (
    <div className="Content">
      <div className="Content_input">
        <input type="text" placeholder="What's happening?"></input>
      </div>
      <ControllerHeader />
      <TweetList />
    </div>
  );
};

export default Content;
