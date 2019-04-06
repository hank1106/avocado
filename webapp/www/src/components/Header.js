import React, { Component } from 'react';
import '../css/Header.css';
import {NavLink} from 'react-router-dom'
import UserAvatar from 'react-user-avatar/user-avatar.js';

type State = {
  loggedIn: boolean,
}

class Header extends Component {
  state = {
    loggedIn : true,
  }
  render() {
    return (
      <header className="flex items-center justify-between px4 border">
        <nav className="justify-start">
          <NavLink
            exact
            to="/"
            className="p1 mx2 black rounded text-decoration-none"
          >
            Avocado
          </NavLink>
          <NavLink
            exact
            to="/Music"
            className="p1 mx2 black rounded text-decoration-none"
            activeClassName=""
          >
            Music
          </NavLink>
          <NavLink
            exact
            to="/Movies"
            className="p1 mx2 black rounded text-decoration-none"
            activeClassName=""
          >
            Movies
          </NavLink>
          <NavLink
            exact
            to="/Books"
            className="p1 mx2 black rounded text-decoration-none"
            activeClassName=""
          >
            Books
          </NavLink>
        </nav>
        {this.state.loggedIn &&(
          <UserAvatar
            size="30"
            name="Will Binns-Smith"
            src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg" />
        )}
        {!this.state.loggedIn &&(
          <NavLink
            exact
            to="/Login"
            className="p1 mx2 black rounded text-decoration-none"
            activeClassName=""
          >
          login
          </NavLink>
        )}
      </header>
    );
  }
}

export default Header;
