import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>상담</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/grandpa.jpg"
                        text="granpa"
                        label="counseling"
                        path="/services"
                        />   
                        <CardItem 
                        src="images/grandma.jpg"
                        text="granma"
                        label="counseling"
                        path="/services"
                        />  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
