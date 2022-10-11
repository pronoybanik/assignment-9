import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CartDetails = () => {
    const data = useLoaderData()
    const carts = data.data.questions[0];
    console.log(carts);
    return (
        <div>
            <h2>info:{carts.question}</h2>
        </div>
    );
};

export default CartDetails;