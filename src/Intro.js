import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function Intro(props) {

  return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title as="h1">
                    Crossing Traffic Theory
                    </Card.Title>

                    <Card.Text>
                        This is a tool to test a theory about traffic crossing each other all at the same time.
                    </Card.Text>
                    <Card.Text>
                        Often during running, I have the experience that when somebody is travelling towards you
                        and somebody is travelling behind you, you will more often than not cross each other all at the same time
                        This app tests that theory.
                    </Card.Text>
                    <Card.Text>
                        
                        The simulation does X amount of iterations and puts the travellers at a random position on the track.
                        It will then let them travel and measure the closest distance all travellers were from each other.

                        The results are plotted in a chart.

                    </Card.Text>
                    <Card.Text>
                        Written by Bart van de Sande
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

  );
}

export default Intro;
