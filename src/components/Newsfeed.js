import React from "react";
import Post from './Post';
import slinky from './../img/crazyeyes.gif';
import pinky from './../img/ricky.gif';
import horseMeat from './../img/horse-meat.gif';
import grump from './../img/puff.gif';

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
  },
  {
    profPic: grump,
    username: 'GrumpOnABump',
    text: 'i hate it when imps take bites out of starbursts. that means they are rude'
  }
];

function Newsfeed() {
  return (
    <div className="newsfeed">
      <h3>Newsfeed</h3>
      <hr />
      {mainNewsfeed.map((post, index) => 
        <Post profPic={post.profPic}
        username={post.username}
        text={post.text}
        key={index} />
        )}
    </div>
  );
}

export default Newsfeed;