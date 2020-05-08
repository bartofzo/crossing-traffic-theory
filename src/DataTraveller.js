import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DataTraveller extends React.Component {

  constructor(props) {
      super(props);

      /*
      this.state = {
        data : {
            name : 'traveller',
            direction : 'forward',
            velocity : 10
        }
      }
      */

  }

  onSubmit = () => {
      console.log('sub');
  }

  onVelocityChange = (event) => {

    this.props.onUpdate({  
        ...this.props.data,
        velocity : event.target.value
    });

  }

  onDirectionChange = (event) => {

    this.props.onUpdate({  
        ...this.props.data,
        direction : event.target.name
    });

  }

  onNameChange = (event) => {
    this.props.onUpdate({
        ...this.props.data,
        name : event.target.value
    });
  }

  onRandomize = (event) => {

  }


  render() {

    const { data } = this.props;

    return (
        <Card style={{ maxWidth: '300px' }}>

            <Card.Body>
                <Card.Title>Traveller</Card.Title>
                    <Form>

                        <Form.Group controlId="travellerName">
                            <Form.Label >
                            Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Name" value={data.name} onChange={this.onNameChange} />
                        </Form.Group>

                        <Form.Group>

                            <Form.Label>
                                Direction
                            </Form.Label>

                                <Form.Check
                                    type="radio"
                                    label="Forward"
                                    name="forward"
                                    id="directionForward"
                                    checked={data.direction === 'forward'}
                                    onChange={this.onDirectionChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Backward"
                                    name="backward"
                                    id="directionBackward"
                                    checked={data.direction === 'backward'}
                                    onChange={this.onDirectionChange}
                                />
                        </Form.Group>

                        <Form.Group controlId="velocity">

                            <Form.Label>
                                Velocity ({data.velocity}km/h)
                            </Form.Label>

                            <Form.Control  type="range" value={data.velocity} min={1} max={100} onChange={this.onVelocityChange} />

                        </Form.Group>

                        <Button variant="light" className="float-right" onClick={this.props.onRemove}>Remove</Button>

                    </Form>
            </Card.Body>
        </Card>
        )
  }
}

export default DataTraveller;
