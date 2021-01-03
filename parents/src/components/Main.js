import React from 'react'
import './Main.css'
import {Button} from './Button'

function MainSection() {
    return (
        <div className="main">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>COUNTSELLING SAVE SPIRITIES</h1>
            <p>What are your concerns?</p>
            <div className="main__btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    RESERVATION
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
            
        </div>
    )
}

export default MainSection
