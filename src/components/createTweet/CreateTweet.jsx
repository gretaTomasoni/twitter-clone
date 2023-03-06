import "./index.css";
import createTweet from "../../assets/img/createTweet.png";

const CreateTweet = () => {
  return (
    <div className="CreateTweet">
      <img className="Header__logo" src={createTweet} alt="create new tweet" />
    </div>
  );
};

export default CreateTweet;
