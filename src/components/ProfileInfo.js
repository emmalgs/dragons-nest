import React from "react";
import PropTypes from 'prop-types';


function ProfileInfo(props) {
  return (
    <React.Fragment>
      <img src={props.userPic} alt="profile" className="mainProfPic"/>
      <h4>{props.user}</h4>
      <p>{props.bio}</p>      
    </React.Fragment>
  );
}

ProfileInfo.propTypes = {
  userPic: PropTypes.string,
  user: PropTypes.string,
  bio: PropTypes.string
};

export default ProfileInfo;