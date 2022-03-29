import React from 'react';
import CardGroups from '../CardGroup/cardGroup';

const Card = ({product}) => {
    const {name, id, price} = product;
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name {name}</h5>
                <p className="card-text">Price: ${price}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
};

export default Card;