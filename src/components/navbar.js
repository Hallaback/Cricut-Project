import React from 'react';
import $ from 'jquery';

class Navbar extends React.Component {

  handleClick = (param) => (e) => {
    $("html, body").animate({ scrollTop: $(param).offset().top }, 1000);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">{this.props.name}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.pinterest.com/ryanhall3914207/website-designs/" target="_blank" rel="noopener noreferrer">{this.props.linkOne}<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.wynbi.com" target="_blank" rel="noopener noreferrer">{this.props.linkTwo}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pointer" onClick={this.handleClick('#proposal')}>{this.props.linkThree}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
