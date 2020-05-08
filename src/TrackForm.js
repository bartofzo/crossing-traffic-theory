import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';

import Form from 'react-bootstrap/Form';
import DataTraveller from './DataTraveller.js';

class TrackForm extends React.Component {

  constructor(props) {

      super(props);
      
  }

  onTrackLengthChange = (event) => {

    this.props.onUpdate({  
        ...this.props.data,
        trackLength : event.target.value
    });

  }

  onIterationsChange = (event) => {

    this.props.onUpdate({  
        ...this.props.data,
        iterations : event.target.value
    });

  }


  render() {

    const { data } = this.props;

    return (
        <Container>

        <Form>

            <Form.Group controlId="trackLength">
                <Form.Label>
                    Track length: ({data.trackLength}m)
                </Form.Label>
                <Form.Control  type="range" value={data.trackLength} min={1} max={1000} onChange={this.onTrackLengthChange}/>
            </Form.Group>

            <Form.Group controlId="iterations">
                <Form.Label>
                    Iterations: {data.iterations}
                </Form.Label>
                <Form.Control  type="range" value={data.iterations} min={1} max={10000} onChange={this.onIterationsChange} />
            </Form.Group>

        </Form>

        </Container>)
  }
}


export default TrackForm;
