import React from "react";
import PropTypes from 'prop-types';


function ProfileInfo(props) {
  return (
    <React.Fragment>
      <div className="profileGuys">
        <img src={props.userPic} alt="profile" className="mainProfPic"/>
        <div className="userBio">
          <h4 className="username">{props.user}</h4>  
          <p>{props.bio}</p>
        </div>
      </div>
      <div className="profileNav">
        <button>Posts</button>
        <button>Followers</button>
        <button>Following</button>
    </div>        
    </React.Fragment>
  );
}

ProfileInfo.propTypes = {
  userPic: PropTypes.string,
  user: PropTypes.string,
  bio: PropTypes.string
};

export default ProfileInfo;