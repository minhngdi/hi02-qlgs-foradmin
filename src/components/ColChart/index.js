import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const ColChart = (props) => {
    const data = [
        {
          type: '19/5',
          sales: 38,
        },
        {
          type: '20/5',
          sales: 52,
        },
        {
          type: '21/5',
          sales: 61,
        },
        {
          type: '22/5',
          sales: 145,
        },
        {
          type: '23/5',
          sales: 48,
        },
        {
          type: '24/5',
          sales: 38,
        },
        {
          type: '26/5',
          sales: 38,
        },
        {
          type: '27/5',
          sales: 38,
        },
      ];
      const config = {
        title: {
          visible: true,
          text: 'Lượng mưa theo tuần',
        },
        description: {
          visible: true,
          text:
            'Biểu đồ thể hiện lượng mưa 7 ngày gần nhất (tính theo mm)',
        },
        forceFit: true,
        data,
        padding: 'auto',
        xField: 'type',
        yField: 'sales',
        meta: {
          type: { alias: 'Mùa mưa' },
          sales: { alias: 'Lượng mưa(mm)' },
        },
        label: {
          visible: true,
          position: 'middle',
        },
      };
      return <Column {...config} />;
};

export default ColChart;
