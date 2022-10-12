import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsCard from '../StatisticsCard/StatisticsCard';

const Statistics = () => {
    const data = useLoaderData();
    const statistics = data.data;
    console.log(statistics);
    return (
        <div>
            <h2>Statistics Chart </h2>
            {
                statistics.map(statistic => <StatisticsCard
                key = {statistic.id}
                statistic={statistic}
                ></StatisticsCard>)
            }
        
        </div>
    );
};

export default Statistics;