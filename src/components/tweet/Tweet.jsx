import { useState, useEffect } from "react";
import { FiHeart, FiEdit3 } from "react-icons/fi";
import TweetComment from "../../assets/img/comment.png";
import TweetShare from "../../assets/img/share.png";
import "./index.css";

const Tweet = ({ messageData, setModal, setProduct, setUser }) => {
  const { userId } = messageData;
  const [likes, setLikes] = useState(messageData.reactions);
  const [isLiked, setIsLiked] = useState(false);
  const [userData, setUserData] = useState({});

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const modalVisibility = () => {
    setModal(true);
    setProduct(messageData);
    setUser(userData);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="Tweet">
      <img className="Tweet_image" src={userData.image} alt="profile image" />
      <div className="Tweet_container">
        <div className="Tweet_profile">
          <span className="Tweet_userName">{userData.firstName}</span>
          <span className="Tweet_userName">{userData.lastName}</span>
          <span className="Tweet_email">@{userData.username}</span>
        </div>
        <p className="Tweet_body">{messageData.body}</p>
        <div className="Tweet_reactions">
          <div className="Tweet_comment">
            <img src={TweetComment} alt="comment" />
            <span>45</span>
          </div>
          <div className="Tweet_edit" onClick={modalVisibility}>
            <FiEdit3 />
            <span>Edit</span>
          </div>
          <div className="Tweet_like" onClick={handleLike}>
            <FiHeart className={isLiked ? "fill" : "Tweet_like_img"} />
            <span className={isLiked ? "fill" : ""}>{likes}</span>
          </div>
          <div className="Tweet_share">
            <img src={TweetShare} alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
