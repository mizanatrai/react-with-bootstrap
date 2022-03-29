import React from 'react';
import Card from '../Card/Card';

const CardGroups = () => {

    const products = [
        { id: 1, name: 'Sony camera', price: 112000 },
        { id: 2, name: 'Samsung camera', price: 96200 },
        { id: 3, name: 'Huawei camera', price: 48100 }
    ];

    return (
        <div>
            <h1>Bootstrap added</h1>
            <div className='card-group'>
                {
                    products.map(product => <Card product={product} key={product.id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroups;