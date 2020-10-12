import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

class PensionApp extends Component {
    render() {
        return (
                <div>
                    <HeaderComponent />
                    <FooterComponent />
                </div>
        )
    }
}

export default PensionApp;