import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';


import DataChart from './DataChart.js';
import TravellerForm from './TravellerForm.js';
import TrackForm from './TrackForm.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Intro from './Intro.js';
import Configuration from './Configuration.js';
import ComputeCard from './ComputeCard.js';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

        trackData : {},
        travellerData : [],

        isComputing : false,
        result : null

      }
  }

  onCompute = () => {

    // copy values
    const trackData = {...this.state.trackData};
    const travellerData = [...this.state.travellerData];

    if (travellerData.length === 0)
    {
      console.log('no travellers');
      return;
    }

    this.setState({ isComputing : true });

    // allow time for displaying loader
    setTimeout(() => {
      this.compute(trackData, travellerData, (result) => {
        console.log(result);
        this.setState({ isComputing : false, result : result });
      })
  
    }, 100);

  }

  onConfigUpdate = (trackData, travellerData) => {

    this.setState({ trackData : trackData, travellerData : travellerData });
  }

  compute = (trackData, travellerData, callback) => {


    const { iterations } = trackData;
    const { trackLength } = trackData;
    const moveScale = .1;

    const resultData = [];
   

    let resultArray = [];

    // transform data so that direction is incorporated into velocity
    travellerData = travellerData.map((traveller) => {
        return { 
          name : traveller.name,
          velocity : parseFloat(traveller.direction === 'forward' ? traveller.velocity : -traveller.velocity)
        };
    });


   
    console.log(travellerData);
    console.log("Iterations: " + iterations);
    console.log("len: " + travellerData.length);
    console.log('tracklen:' + trackLength);

    let safe = 0;
  
    for (let i = 0; i < iterations; i++)
    {
      let travellerOutCount = 0;
      let closestDistance = Infinity;

      // reset positions
      let positions = []; 
      travellerData.forEach((traveller) => positions.push(Math.random() * trackLength));

      // as long as all travellers are on track...
      while (travellerOutCount < travellerData.length)
      {
        safe++;
        if (safe > 10000000)
        {
          console.log('unsafe!');
          return;
        }

        // move all travellers a step
        for (let j = 0; j < travellerData.length; j++)
        {
          let newPos = positions[j] + travellerData[j].velocity * moveScale;
  
          if (newPos < 0 || newPos > trackLength)
          {
            travellerOutCount++;
          }
  
          positions[j] = newPos;
        }

        // all travellers have moved a step... measure closest distance
        let distSum = 0;
        for (let a = 0; a < positions.length; a++)
        {
          distSum += Math.abs(positions[0] - positions[a]);
        }

        if (distSum < closestDistance)
        {
          closestDistance = distSum;
        }
      }

      resultArray.push(closestDistance);
      
    }

    resultArray.sort((a,b) => a - b);

    callback(resultArray);
  }

  render() {
    return (
      <div>
          <br />
          <Intro />
          <br />
          <Configuration onUpdate={this.onConfigUpdate} />
          <br />

          <ComputeCard isComputing={this.state.isComputing} onCompute={this.onCompute} />

          <DataChart result={this.state.result} />

      </div>
  );
  }
}

export default App;
