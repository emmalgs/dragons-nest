import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Profile from './Profile';
import './App.css';
import Newsfeed from './Newsfeed';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <div className="main">
        <Profile />
        <Newsfeed />
      </div>
    </React.Fragment>
  );
}

export default App;
