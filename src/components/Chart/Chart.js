import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

  const datapointsValue = props.datapoints.map( datapoint => datapoint.value);
  const totalMaximum = Math.max(...datapointsValue);

  return (
    <div className='chart'>
        {props.datapoints.map(datapoint => 
        <ChartBar 
            value={datapoint.value} 
            label={datapoint.label} 
            maxValue={totalMaximum}
            key={datapoint.label}
        />)}
    </div>
  )
}

export default Chart