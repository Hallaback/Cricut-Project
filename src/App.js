import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import MyInfo from './components/my-info.js';
import woodenSign from './assets/woodenSign.svg';
import theaterRoom from './assets/theaterRoom.jpg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar name="Ryan Hall" linkOne="Movies" linkTwo="Soccer" linkThree="Gaming"></Navbar>

        <section className="hero-container">
          <img src={theaterRoom} className="App-hero" alt="hero" />
        </section>

        <MyInfo></MyInfo>

        
      </div>
    );
  }
}

export default App;
