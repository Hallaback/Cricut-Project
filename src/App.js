import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import MyInfo from './components/my-info.js';
import $ from 'jquery';
import './styles/App.css';
import Fade from 'react-reveal/Fade';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <Navbar name="Ryan Hall" linkOne="Inspiration" linkTwo="Wynbi" linkThree="Proposal Video"></Navbar>

        <section className="hero-section">
          <div className="hero-container"></div>
        </section>

        <MyInfo></MyInfo>

        <Fade bottom>
          <section id="proposal" className="container">
            <header className="video-title">
              <h1> Best Moment Of My Life! </h1>
            </header>
            <iframe className="video-shadow" width="100%" height="400" src="https://www.youtube.com/embed/SUTBDceJsSg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </section>
        </Fade>

        <footer className="footer">
          <div className="container">
            <div className="row">
              <span className="text-muted col">Ryan Hall</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
