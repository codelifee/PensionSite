import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import IntroComponent from './IntroComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class PensionApp extends Component {
    render() {
        return (
                
                    <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route path='/' exact>
                                <HomeComponent />
                            </Route>
                            <Route path='/home'>
                                <HomeComponent />
                            </Route>
                            <Route path='/intro'>
                                <IntroComponent />
                            </Route>
                        </Switch>
                        <FooterComponent />
                    </Router>
        )
    }
}

export default PensionApp;