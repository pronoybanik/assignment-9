import React from 'react';
import './CartDetails .css'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quizs/Quiz';

const CartDetails = () => {
    const datas= useLoaderData()
    const data = datas.data.questions;

    console.log(data);
  
   
    return (
        <div className='CartDetails '>
          {
            data.map(dt => <Quiz 
            dt={dt}
            ></Quiz>)
          }
        </div>
    );
};

export default CartDetails;