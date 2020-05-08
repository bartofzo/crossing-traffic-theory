import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


function ComputeCard(props) {

  return (
        <Container>
            <Row className="text-center">
                <Col>
                {props.isComputing ? 
                <Spinner animation="border" role="status" /> :
                <Button onClick={props.onCompute}>Compute</Button>}
                </Col>

            </Row>
        </Container>

  );
}

export default ComputeCard;
