import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const CircleChart = ({ data }) => {
    return (
        <div>
            <Pie data={ data } />
        </div>
    );
};

export default CircleChart;