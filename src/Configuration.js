import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';


import DataChart from './DataChart.js';
import TravellerForm from './TravellerForm.js';
import TrackForm from './TrackForm.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Intro from './Intro.js';

class Configuration extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        trackData : { trackLength : 1000, iterations: 1000 },
        travellerData : {}
      }

  }


  onTrackFormUpdate = (data) => {
    this.setState({ trackData : data });
    this.props.onUpdate(data, this.state.travellerData);
  }

  onTravellerUpdate = (data) => {
    this.setState({ travellerData : data });
    this.props.onUpdate(this.state.trackData, data);

  }

  render() {
    return (
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>
                  Configuration
                </Card.Title>
                <TrackForm data={this.state.trackData} onUpdate={this.onTrackFormUpdate} />
                <TravellerForm onUpdate={this.onTravellerUpdate} />
              </Card.Body>
            </Card>
          </Container>
        );
  }
}

export default Configuration;
