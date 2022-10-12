import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1> Quiz </h1>
            
            <div>
                <h2>1- What is a perpase react router</h2>
                <p>
                React Router is the standard routing
                 library for React. React Router keeps your UI in 
                  sync with the URL
                </p>
            </div>
            <div>
                <h2>2- How dose context api work</h2>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling 
                    from all levels of your application Context API is a  new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

</p>
            </div>
            <div>
                <div>
                    <h2>3- What is useref hook</h2>
                    <p>The useRef Hook allows you to
                         persist values between renders.
                          It can be used to store a mutable 
                          value that doesnot cause a re-render when updated.
                          
                          </p>
                </div>
            </div>

            <div>
                <p>
                    1- ei project e data load korchi api theke 
                    2- i try my lavel best 
                    3- cart part ta halka kosto hoichilo
                </p>
            </div>
            
        </div>
    );
};

export default Blog;