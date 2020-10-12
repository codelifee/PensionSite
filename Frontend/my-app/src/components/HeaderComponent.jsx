import React, {Component} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <header>
                <Router>
                <Nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <div>
                    <a href='*' className='navbar-brand'>
                    청운암
                    </a>
                </div>
                <ul className='navbar-nav navbar-collapse justify-content-end'> 
                    <li>
                        <Link className='nav-link' to='/home'>
                        Home
                        </Link>
                    </li> 
                    <li>
                        <Link className='nav-link' to='/visit'>
                        방문안내
                        </Link>
                    </li>              
                    <li>
                        <Link className='nav-link' to='/qna'>
                        문의
                        </Link>
                    </li>
                </ul> 
            </Nav>
            </Router>
          </header>
        )
    }
}

export default HeaderComponent;