import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className="cardItem">
                <Link className="cardItem__link" to={props.path}>
                    <figure className="cardItem__pic-wrap"
                    data-category={props.label}>
                        <img src={props.src} alt="Travle Image" 
                        className="cardItem__img"></img>
                    </figure>
                    <div className="cardItem__info">
                        <h5 className="cardItem__text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;
