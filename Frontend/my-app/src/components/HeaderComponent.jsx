import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <Router>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/home">청운암</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/intro">소개</Nav.Link>
                            <Nav.Link href="/visit">방문안내</Nav.Link>
                            <Nav.Link href="/reservation">상담문의</Nav.Link>
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