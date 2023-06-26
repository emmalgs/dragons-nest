import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileNav from "./ProfileNav";
import ProfilePosts from "./ProfilePosts";
import ranger from './../img/rangerdanger.gif';

const userProfile = {
  userPic: ranger,
  user: 'granger_the_ranger',
  bio: 'Just a girl who farts fire'
};


function Profile(){
  return(
    <div className="profile">
        <ProfileInfo userPic={userProfile.userPic}
        user={userProfile.user}
        bio={userProfile.bio}/>
        <ProfileNav />
        <ProfilePosts />
    </div>
  );
}

export default Profile;