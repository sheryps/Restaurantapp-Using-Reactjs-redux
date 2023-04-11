import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Oprest from './Oprest';
import Reviews from './Reviews';
function Viewrest() {
  const urlparams=useParams()
  console.log(urlparams.id);
  const [AllRestaurants,setAllRestaurents]=useState([])

  //function to call api to get data from restarents.json
  const getRestaurents=async()=>{
      await fetch('/restaurants.json')
      .then((data)=>{
          data.json()
          .then((result)=>{
              setAllRestaurents(result.restaurants)
          })
      })
  }
  useEffect(()=>{
      getRestaurents()
  },[])
  const viewrest = AllRestaurants.find(item=>item.id==urlparams.id)
  console.log(viewrest);
  return (
    <>{
      viewrest?(
        <Row className='m-3'>
          <Col md={4} className='ms-5'>
            <Image src={viewrest.photograph} fluid/>
          </Col>
          <Col md={7}>
            <ListGroup>
              <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
              <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
              <ListGroup.Item><h4>{viewrest.neighborhood}</h4></ListGroup.Item>
              <ListGroup.Item><h5>{viewrest.address}</h5></ListGroup.Item>
              <ListGroup.Item><Oprest operate={viewrest.operating_hours}/></ListGroup.Item>
              <Reviews reviews={viewrest.reviews}/>
            </ListGroup>
            
          </Col>
        </Row>
      ):'null'
    }
    </>
  )
}

export default Viewrest