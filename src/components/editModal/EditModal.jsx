import { useState } from "react";
import { FiX } from "react-icons/fi";
import "./index.css";

const EditModal = ({ setModal, product, user }) => {
  const [messageInput, setMessageInput] = useState("");

  const closeModal = () => {
    setModal(false);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/posts/${product.userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: messageInput,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setModal(false);
        alert(`${user.firstName}'s tweet has been edited correctly`);
      });
  };

  return (
    <div className="EditModal">
      <div className="overlayModal" onClick={closeModal}></div>
      <div className="contentModal">
        <FiX className="buttonClose" onClick={closeModal} />
        <div className="Tweet">
          <img className="Tweet_image" src={user.image} alt="profile image" />
          <div className="Tweet_container">
            <div className="Tweet_profile">
              <span className="Tweet_userName">{user.firstName}</span>
              <span className="Tweet_userName">{user.lastName}</span>
              <span className="Tweet_email">@{user.username}</span>
            </div>
            <p className="Tweet_body">{product.body}</p>
          </div>
        </div>
        <div className="update_tweet">
          <img
            className="Tweet_image"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
            alt="image profile"
          />
          <form onSubmit={onHandleSubmit}>
            <textarea
              className="update_input"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Update the post"
            ></textarea>
            <input className="update_button" type="submit" value="Edit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
