import React from 'react'
import './Footer.css'
import {Button} from './Button'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <section className='footer__subscription'>
                <p className='footer__subscription__heading'>
                    Join Our Journey
                </p>
                <p className="footer__subscription__text">
                    You Can Live Happier Life
                </p>
                <div className="footer__input__areas">
                    <form>
                        <input type="email" name="email"
                        placeholder="Your Email" className="footer__input" />
                        <Button buttonStyle='btn--outline'>Register</Button>
                    </form>
                </div>
            </section>
            <div className="footer__links">
                <div className="Footer__link__wrapper">
                    <div className="footer__link__items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer__link__items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="Footer__link__wrapper">
                    <div className="footer__link__items">
                    <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer__link__items">
                    <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="footer__socialMedia">
                <div className="footer__socialMedia__wrap">
                        <div className="footer__logo">
                        <Link to='/' className="footer__social__logo">
                            천지연 <i class="fas fa-vihara"></i>
                        </Link>
                        </div>
                        <small className="footer__rights">천지연 2021</small>
                        <div className="footer__socialIcons">
                            <Link className="footer__socialIcon facebook"
                            to='/'
                            target='_blank'
                            aria-label='facebook'>
                                <i className='fab fa-facebook-f' />
                            </Link>
                            <Link className="footer__socialIcon instagram"
                            to='/'
                            target='_blank'
                            aria-label='facebook'>
                                <i className='fab fa-instagram' />
                            </Link>
                        </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Footer
