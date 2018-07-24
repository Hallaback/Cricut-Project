import React from 'react';
import $ from 'jquery';
import Modal from '../components/modal.js';

class MyInfo extends React.Component {

  handleClick = (param) => (e) => {
    console.log('This', this);
    console.log('Event', e);
    console.log('Parameter', param);
    $('.modal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }
  render() {
    return (
      <section className="App-info container">
        <div className="row">
          <div className="col-12 col-sm info-container">
            <a className="btn btn-outline-dark btn-block info-button" href="https://www.fandango.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-film fa-4x film" ></i>
              <h2 className="interest-title"> Movies </h2>
            </a>
          </div>

          <div className="col-12 col-sm info-container">
            <button className="btn btn-outline-dark btn-block info-button" data-toggle="collapse" data-target="#collapseSoccer" aria-expanded="false" aria-controls="collapseSoccer">
              <i className="fas fa-futbol fa-4x soccer-ball"></i>
              <h2 className="interest-title"> Soccer </h2>
            </button>
            <div className="card collapse" id="collapseSoccer">
              <img className="card-img-top" src="http://ljshopch.com/wp-content/photos/2014/10/Borussia-Dortmund-Logo.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Dortmund</h4>
                <p className="card-text">German Premier League Team</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm info-container">
            <button type="button" className="btn btn-outline-dark btn-block info-button" data-toggle="modal" data-target="#gameModal">
              <i className="fas fa-gamepad fa-4x game-controller"></i>
              <h2 className="interest-title"> Gaming </h2>
            </button>
            <Modal modalId="gameModal"></Modal>
          </div>
        </div>
      </section>
    );
  }
}

export default MyInfo;
