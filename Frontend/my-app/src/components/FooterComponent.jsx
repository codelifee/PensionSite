import React, { Component } from 'react';
import SocialFollow from '../api/SocialFollow.js'

class FooterComponent extends Component {
  render() {
    return (
      <footer className='footer'>
          <SocialFollow />
      </footer>
    );
  }
}

export default FooterComponent;