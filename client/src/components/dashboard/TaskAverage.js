import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const TaskAverage = () => {

    const data = [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ];

    return (
        <div>
            <p>Task Average</p>
            <PieChart
                data={data}
                radius={20}
                center={[50, 25]}
                viewBoxSize={[100, 50]}
            />
        </div>
    )
};

export default TaskAverage;
