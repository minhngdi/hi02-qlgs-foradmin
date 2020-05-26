import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const PieChart = (props) => {
    const data = [
        {
            type: 'Đội 1',
            value: 32,
        },
        {
            type: 'Đội 2',
            value: 35,
        },
        {
            type: 'Đội 3',
            value: 33,
        },
    ];
    const config = {
        forceFit: true,
        title: {
            visible: true,
            text: 'Đợt hoàn thành theo đội',
        },
        description: {
            visible: true,
            text:
                'Biểu đồ thể hiện số % công việc hoàn thành theo đội',
        },
        radius: 0.8,
        data,
        angleField: 'value',
        colorField: 'type',
        label: {
            visible: false,
            type: 'outer',
        },
    };
    return <Pie {...config} />;
};

export default PieChart;
