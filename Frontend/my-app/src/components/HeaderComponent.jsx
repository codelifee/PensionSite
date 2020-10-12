import react, {Component} from 'react';
import 

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='' className='navbar-brand'>
                    청운암
                    </a>
                </div>
                <ul className='navbar-nav'> 
                    <li>
                        <Link className='nav-link' to='/welcome'>
                        Home
                        </Link>
                    </li> 
                    <li>
                        <Link className='nav-link' to='/todos'>
                        방문안내
                        </Link>
                    </li>
                </ul>
                <ul className='navbar-nav navbar-collapse justify-content-end'>
                    <li>
                        <Link className='nav-link' to='/login'>
                        Login
                        </Link>
                    </li>
                    <li>
                        <Link
                        className='nav-link'
                        to='/logout'
                        to
                        >
                        Logout
                        </Link>
                    </li>
              </ul>
            </nav>
          </header>
        )
    }
}