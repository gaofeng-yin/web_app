import React from 'react';
import './Navbar.css';
import logo from './Navbar_logo/Logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark Navbar_background">
          <a className="navbar-brand" href="/">
      <div className="logo-image">
            <img src={logo} className="img-fluid" />
      </div>
</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <a className="navbar-brand" href="#">Workout Generator</a>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign up</a>
      </li>
    </ul>

  </div>
</nav>
    )
}

export default Navbar
