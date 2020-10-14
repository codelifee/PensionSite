import React, { Component } from 'react';
import SocialFollow from '../api/SocialFollow.js'

class FooterComponent extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='text-muted'>All Rights Reserved 2020 청운암</div>
        <SocialFollow />
      </footer>
    );
  }
}

export default FooterComponent;