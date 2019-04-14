import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer class="white bg-black fixed-bottom">
        <div class="px2 py3 container">
          <p class="h6 mb0">&copy; 2019 Avocado, LLC</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
