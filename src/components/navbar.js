import React from 'react';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">{props.name}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/movies">{props.linkOne}<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/soccer">{props.linkTwo}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/gaming">{props.linkThree}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
