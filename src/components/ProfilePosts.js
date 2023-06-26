import React from "react";
import ranger from './../img/rangerdanger.gif'
import Post from './Post';

const profilePosts = [
  {
    profPic: ranger,
    username: 'granger_the_ranger',
    text: 'Today I cranked my banjo onto my tail'
  },
  {
    profPic: ranger,
    username: 'ranger_the_ranger',
    text: 'Getting a scale up!!'
  },
  {
    profPic: ranger,
    username: 'ranger_the_ranger',
    text: 'Ready to lose that last 5 pounds?! I did in 5 minutes with HerbaLife!!!! Drink your way to the bottom of the scale!!!!'
  }
]

function ProfilePosts() {
  return (
    <React.Fragment>
      {profilePosts.map((post, index) =>
      <Post profPic={post.profPic}
        username={post.username}
        text={post.text}
        key={index} />
      )}
    </React.Fragment>
  );
}

export default ProfilePosts;