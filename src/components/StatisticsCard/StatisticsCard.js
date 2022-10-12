import React from 'react';


const StatisticsCard = ({statistic}) => {
    const {id, logo, name, total} = statistic;
    return (
        <div className='cart'>
            <img src={logo} alt="" />
            <div className='carts'>
                <h2>Name: {name}</h2>
                <h2>ID: {id}</h2>
                <h2>Total: {total}</h2>
            </div>
        </div>
    );
};

export default StatisticsCard;