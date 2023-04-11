import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function Restcard({restarant}) {
    console.log(restarant);
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Link to={`viewrest/${restarant.id}`} style={{textDecoration:'none'}}>
      <Card className='p-3 m-2'>
      <Card.Img className="p-3" variant="top" src={restarant.photograph} width='300'/>
      <Card.Body>
        <Card.Title style={{color:'black'}}>{restarant.name}</Card.Title>
        <Card.Text>
          {restarant.neighborhood}
        </Card.Text>
        <Card.Text>
        {restarant.address}
        </Card.Text>
      </Card.Body>
    </Card>
      </Link>
        
    </Col>
  )
}

export default Restcard