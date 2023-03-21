import { useState } from "react";
import ControllerHeader from "../controllerHeader";
import TweetList from "../tweetList";
import "./index.css";

const Content = ({ setModal, setProduct, setUser }) => {
  const [buttonPage, setbuttonPage] = useState(false);

  return (
    <div className="Content">
      <ControllerHeader setbuttonPage={setbuttonPage} />
      <div className="Content_input">
        <input type="text" placeholder="What's happening?"></input>
      </div>
      <TweetList
        buttonPage={buttonPage}
        setModal={setModal}
        setProduct={setProduct}
        setUser={setUser}
      />
    </div>
  );
};

export default Content;
