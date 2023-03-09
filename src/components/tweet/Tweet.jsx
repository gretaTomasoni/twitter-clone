import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import TweetComment from "../../assets/img/comment.png";
import TweetRepost from "../../assets/img/repost.png";
import TweetLike from "../../assets/img/like.svg";
import TweetShare from "../../assets/img/share.png";
import "./index.css";

const Tweet = ({ messageData }) => {
  const [likes, setLikes] = useState(messageData.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const hoverFunction = () => {
    (prev) => setMouseOver(!prev);
  };

  return (
    <div className="Tweet">
      <img
        className="Tweet_image"
        src={messageData.photoProfile}
        alt="profile image"
      />
      <div className="Tweet_container">
        <div className="Tweet_profile">
          <span className="Tweet_userName">{messageData.userName}</span>
          <span className="Tweet_email">{messageData.email}</span>
        </div>
        <p className="Tweet_body">{messageData.body}</p>
        <img
          className={
            messageData.photoPost === "" ? "disabled" : "Tweet_postImage"
          }
          src={messageData.photoPost}
          alt="post image"
        />
        <div className="Tweet_reactions">
          <div className="Tweet_comment">
            <img src={TweetComment} alt="comment" />
            <span>{messageData.comments}</span>
          </div>
          <div className="Tweet_repost">
            <img src={TweetRepost} alt="repost" />
            <span>{messageData.repost}</span>
          </div>
          <div className="Tweet_like" onMouseOver={hoverFunction}>
            <FiHeart className="Tweet_like_img" onClick={handleLike} />
            {/* <img onClick={handleLike} src={TweetLike} alt="like" /> */}
            <span onClick={handleLike}>{likes}</span>
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
