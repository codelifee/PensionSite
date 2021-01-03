import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <div className="cardItem">
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
            </div>
        </>
    )
}

export default CardItem;
