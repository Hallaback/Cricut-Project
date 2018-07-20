import React from 'react';

function Navbar(props) {
  const { classes } = props;
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">{props.name}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/movies">{props.linkOne}<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/soccer">{props.linkTwo}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/gaming">{props.linkThree}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
