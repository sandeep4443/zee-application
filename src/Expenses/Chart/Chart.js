import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const total = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {dataPoints.map(data => (
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={total}
                    label={data.label}
                />
            ))}
        </div>
    )
}

export default Chart
