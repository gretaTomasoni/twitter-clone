import ControllerHeader from "../controllerHeader";
import TweetList from "../tweetList";
import "./index.css";

const Content = ({ setModal, setProduct, setUser }) => {
  return (
    <div className="Content">
      <ControllerHeader />
      <div className="Content_input">
        <input type="text" placeholder="What's happening?"></input>
      </div>
      <TweetList
        setModal={setModal}
        setProduct={setProduct}
        setUser={setUser}
      />
    </div>
  );
};

export default Content;
