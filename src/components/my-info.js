import React from 'react';

class MyInfo extends React.Component {
  handleClick() {
    console.log("FIRES");
    // const words = this.state.words;
    // this.setState({words: words});
  }
  render() {
    return (
      <section className="App-info container">
        <div className="row">
          <div className="col-12 col-sm info-button">
            <button className="btn btn-outline-dark btn-block" onClick={this.handleClick}>
              <i className="fas fa-film fa-4x film" ></i>
              <h2 className="interest-title"> Movies </h2>
              <p> Underworld Series</p>
            </button>
          </div>
          <div className="col-12 col-sm info-button">
            <button className="btn btn-outline-dark btn-block" onClick={this.handleClick}>
              <i className="fas fa-futbol fa-4x soccer-ball"></i>
              <h2 className="interest-title"> Soccer </h2>
              <p> Dortmund </p>
            </button>
          </div>
          <div className="col-12 col-sm info-button">
            <button className="btn btn-outline-dark btn-block" onClick={this.handleClick}>
              <i className="fas fa-gamepad fa-4x game-controller"></i>
              <h2 className="interest-title"> Gaming </h2>
              <p> League of Legends </p>
            </button>
          </div>
        </div>

      </section>
    );
  }
}

export default MyInfo;
