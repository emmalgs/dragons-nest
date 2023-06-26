import React from "react";

function NavBar(){
  return(
    <React.Fragment>
      <ul className="nav-bar">
        <li>Home</li>
        <li>Profile</li>
        <li>Purchase Eggs</li>
        <li>Goat Finder</li>
      </ul>
    </React.Fragment>
  );
}

export default NavBar;