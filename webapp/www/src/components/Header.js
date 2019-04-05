import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Header.css';
import {NavLink} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      // <div>
      //   <nav className="navbar navbar-expand-lg navbar-light Header_canvas">
      //   <a className="navbar-brand" href="#">Avocado</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item active">
      //         <a className="nav-link" href="#">Music <span className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item active">
      //         <a className="nav-link" href="#">Movies <span className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item active">
      //         <a className="nav-link" href="#">Books <span className="sr-only">(current)</span></a>
      //       </li>
      //     </ul>
      //   </div>
      //   </nav>
      // </div>
      <header className="flex items-center justify-between px4">
        <h1 className="h1">Avocado</h1>
        <nav>
          <NavLink
            exact
            to="/"
            className="p1 mx2 black rounded text-decoration-none"
            activeClassName="bg-white"
          >
            Avocado
          </NavLink>
          <NavLink
            exact
            to="/Music"
            className="p1 mx2 black rounded text-decoration-none"
            activeClassName="bg-white"
          >
            Music
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
