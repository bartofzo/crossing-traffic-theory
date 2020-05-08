import React from 'react';
import Chart from "react-google-charts";
import Container from 'react-bootstrap/Container';


function DataChart(props) {

  if (!props.result) return null;


  let data = [];
  
  data.push(['x','dist']);

  props.result.map((dist, index) => {

    data.push([dist, index]);

  });

  console.log(data);

  return (
      <Container fluid>
        <Chart
          width={'100%'}
          height={'720px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            hAxis: {
              title: 'Distance',
            },
            vAxis: {
              title: 'Amount',
            },
            series: {
              1: { curveType: 'function' },
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </Container>
  );
}

export default DataChart;
