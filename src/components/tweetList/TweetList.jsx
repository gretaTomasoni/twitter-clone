import messageList from "../../mocks/messageList";
import Tweet from "../tweet";
import "./index.css";

const TweetList = () => {
  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <Tweet messageData={message} />
      ))}
    </div>
  );
};

export default TweetList;
