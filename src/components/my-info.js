import React from 'react';

function MyInfo(props) {
  const { classes } = props;
  return (
    <section className="App-info container">
      <div className="row">
        <div className="col">
          <i class="fas fa-film fa-2x"></i>
        </div>
        <div className="col">
          <i class="fas fa-futbol fa-2x"></i>
        </div>
        <div className="col">
          <i class="fas fa-gamepad fa-2x"></i>
        </div>
      </div>
      <div className="row Interest-title">
        <div className="col">
          <h3> Movies </h3>
        </div>
        <div className="col">
          <h3> Soccer </h3>
        </div>
        <div className="col">
          <h3> Gaming </h3>
        </div>
      </div>
      <div className="row Interest-content">
        <div className="col">
          <p> Underworld Series</p>
        </div>
        <div className="col">
          <p> Dortmund </p>
        </div>
        <div className="col">
          <p> League of Legends </p>
        </div>
      </div>

    </section>
  );
}

export default MyInfo;
