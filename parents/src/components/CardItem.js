import React from 'react'
import { Link } from 'react-router-dom';

function CardItem() {
    return (
        <>
            <li className="cardItem">
                <Link className="cardItem__link">
                    <figure className="cardItem__pic-wrap">
                        <img src="/" alt="Travle Image" 
                        className="cardItem__img"></img>
                    </figure>
                    <div className="cardItem__info">
                        <h5 className="cardItem__text">

                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;
