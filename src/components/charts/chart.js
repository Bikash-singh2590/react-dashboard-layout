import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
 
const options = {
  title: {
    text: 'Due By Age Summary'
  },
  series: [{
    type: 'bar',
    data: [200, 344, 444,690]
  }]
}
 
const MyStockChart = () => <HighchartsReact
  highcharts={Highcharts}
  // constructorType={'stockChart'}
  allowChartUpdate = { true }
  options={options}
/>
 
export default MyStockChart