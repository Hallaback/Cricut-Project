import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import MyInfo from './components/my-info.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar name="Ryan Hall" linkOne="Movies" linkTwo="Soccer" linkThree="Gaming"></Navbar>

        <section className="hero-section">
          <div className="hero-container"></div>
        </section>

        <MyInfo></MyInfo>


      </div>
    );
  }
}

export default App;
