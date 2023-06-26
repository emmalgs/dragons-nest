import React from "react";

function NavBar(){
  return(
    <React.Fragment>
      <ul className="nav-bar">
        <li><a href="">Home</a></li>
        <li><a href="">Profile</a></li>
        <li><a href="">Purchase Eggs</a></li>
        <li><a href="">Goat Finder</a></li>
      </ul>
    </React.Fragment>
  );
}

export default NavBar;