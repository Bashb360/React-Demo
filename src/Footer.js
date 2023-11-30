import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      <p>&copy; {new Date().getFullYear()} My Website</p>
      </footer>
    );
  }
}

export default Footer;