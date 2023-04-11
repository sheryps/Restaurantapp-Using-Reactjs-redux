import React from 'react'
import { useState,useEffect } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restlistAction';
import { useDispatch, useSelector } from 'react-redux';
function Restlist() {

    const [AllRestaurants,setAllRestaurents]=useState([])

    //function to call api to get data from restarents.json
    const getRestaurents=async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
                setAllRestaurents(result.restaurants)
            })
        })
    }
    const dispatch=useDispatch()//1st
    const result=useSelector((state)=>state.restaurantReducer.restaurantList)//2nd after reducers
    console.log(result);
    const restaurants=result
    console.log(restaurants);
    useEffect(()=>{
        //getRestaurents()
        dispatch(RestListAction())
    },[])
  return (
    <Row>
        {
            restaurants.map((item)=>(
                <Restcard restarant={item}/>
                // <h1>{item.name}</h1>
            ))
        }
    </Row>
  )
}

export default Restlist