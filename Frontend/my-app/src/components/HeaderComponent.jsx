import React, {Component} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <Router>
                {/* <Nav className='navbar navbar-expand-sm navbar-dark bg-dark '>
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
            </Nav> */}
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">청운암</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#visit">방문안내</Nav.Link>
                        <Nav.Link href="#qna">문의</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </Router>
          </header>
        )
    }
}

export default HeaderComponent;