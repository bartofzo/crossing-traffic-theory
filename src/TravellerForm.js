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

class TravellerForm extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        travellers : []
      }

  }

  onTravellerUpdate = (data, index) => {

    let { travellers } = this.state;
    travellers[index] = data;
    this.setState({ travellers : travellers });

    this.props.onUpdate( travellers );
  }

  addTraveller = () => {
    let { travellers } = this.state;
    travellers.push({ name : '', velocity : 10, direction : 'forward' });
    this.setState({ travellers : travellers });

    this.props.onUpdate( travellers );

  }

  onTravellerRemove = (index) => {
      
      let travellers = [...this.state.travellers];
      travellers.splice(index, 1);

      this.setState({ travellers : travellers });

      this.props.onUpdate( travellers );
  }


  render() {

    const { travellers } = this.state;

    return (
        <Container>

            <CardDeck>

                {travellers.map((data, index) => 
                    <DataTraveller key={index} 

                        data={data}
                        onUpdate={(newData) => this.onTravellerUpdate(newData, index)} 
                        onRemove={() => this.onTravellerRemove(index)}
                        
                        />)}
             
            
            </CardDeck>
            <br />
            
            <Button onClick={this.addTraveller}>Add Traveller</Button>{' '}
            

        </Container>)
  }
}


export default TravellerForm;
