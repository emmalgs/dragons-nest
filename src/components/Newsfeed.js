import React from "react";
import Post from './Post';
import slinky from './../img/crazyeyes.gif';
import pinky from './../img/ricky.gif';
import horseMeat from './../img/horse-meat.gif';

const mainNewsfeed = [
  {
    profPic: slinky,
    username: 'slinky_cork',
    text: 'Ate pork for the first time and it is hurting my greggle!'
  },
  {
    profPic: pinky,
    username: 'PinkOrb',
    text: 'Anyone try out the new goat den on 31st?'
  },
  {
    profPic: horseMeat,
    username: 'staleHoofFlesh98',
    text: 'I just want to frolic in the woods'
  }
]

function Newsfeed() {
  return (
    <React.Fragment>
      {mainNewsfeed.map((post, index) => 
        <Post profPic={post.profPic}
        username={post.username}
        text={post.text}
        key={index} />
        )}
    </React.Fragment>
  );
}

export default Newsfeed;