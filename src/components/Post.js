import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment className="post">
      <h4> <img src={props.profPic} alt="profile" className="profPic"/>{props.username}</h4>
      <p>{props.text}</p>
    </React.Fragment>
  );
}

Post.propTypes = {
  profPic: PropTypes.string,
  username: PropTypes.string,
  text: PropTypes.string
};

export default Post;