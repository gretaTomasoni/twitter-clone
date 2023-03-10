import { useState, useEffect } from "react";
import Tweet from "../tweet";
import "./index.css";

const TweetList = ({ setModal, setProduct, setUser }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setMessageList(data.posts));
  }, []);

  return (
    <div className="MessageList">
      {messageList.map((message) => {
        return (
          <Tweet
            messageData={message}
            key={message.id}
            setModal={setModal}
            setProduct={setProduct}
            setUser={setUser}
          />
        );
      })}
    </div>
  );
};

export default TweetList;
