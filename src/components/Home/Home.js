import React from 'react';
import './Home.css'
import photo from '../../photo/quiz-sign-written-wooden-blackboard-chalkboard-white-background-42995016.jpg'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';


const Home = () => {
    const data= useLoaderData();
   const carts= data.data;
//    console.log(carts);

    return (
        <div className='homes'>  
          <img src={photo} alt="" />
          <div className='home'>
            <h1>Quix Details</h1>
            <p>Want to create high-quality, professional-looking quizzes in minutes? SurveyMonkey provides everything you need, including analysis tools that simplify quiz scoring and help you 
                quickly understand your results.</p>
          </div>
       <div className='cart-component'>
       {
            carts.map(cart => <Cart 
                key={cart.id}
                cart={cart}></Cart>)
          }
       </div>
        </div>
    );
};

export default Home;