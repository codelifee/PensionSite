import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

class PensionApp extends Component {
    render() {
        return (
                <div>
                    <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route path='/home'>
                                <HomeComponent />
                            </Route>
                            <Route>
                            </Route>
                            <Route>
                            </Route>
                        </Switch>
                        <FooterComponent />
                    </Router>
                </div>
        )
    }
}

export default PensionApp;