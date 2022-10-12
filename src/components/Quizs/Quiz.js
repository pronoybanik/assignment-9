import React, { useState } from 'react';
import './Quiz.css'

const Quiz = ({dt}) => {
    const {question, options
} = dt;
  


    return (
        <div className='quiz'>
            <h1>Quiz</h1>
            <h2>{question}</h2>
           <div className='input-fild'>
           <label><input  type="radio"  /><h2>{options[0]}</h2></label>
            <label><input  type="radio"  /><h2>{options[1]}</h2></label>
            <label><input  type="radio"  /><h2>{options[2]}</h2></label>
            <label><input  type="radio"  /><h2>{options[3]}</h2></label>
           </div>
        </div>
    );
};

export default Quiz;