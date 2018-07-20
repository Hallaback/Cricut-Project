import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import MyInfo from './components/my-info.js';
import logo from './logo.svg';
import hero from './poppy.jpg';
import woodenSign from './woodenSign.svg';
import theaterRoom from './theaterRoom.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar name="Ryan Hall" linkOne="Movies" linkTwo="Soccer" linkThree="Gaming"></Navbar>

        <section>
          <img src={theaterRoom} className="App-hero" alt="hero" />
        </section>

        <MyInfo></MyInfo>
      </div>
    );
  }
}

export default App;
