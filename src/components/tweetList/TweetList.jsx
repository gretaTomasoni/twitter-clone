import { useState, useEffect } from "react";
import Tweet from "../tweet";
import "./index.css";

const TweetList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tweets")
      .then((res) => res.json())
      .then((data) => setMessageList(data));
  }, []);

  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <Tweet messageData={message} key={message.id} />
      ))}
    </div>
  );
};

export default TweetList;
