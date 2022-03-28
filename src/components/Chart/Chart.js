import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  return (
    <div className='chart'>
        {props.datapoints.map(datapoint => 
        <ChartBar 
            value={datapoint.value} 
            label={datapoint.label} 
            maxValue={null}
            key={datapoint.label}
        />)}
    </div>
  )
}

export default Chart