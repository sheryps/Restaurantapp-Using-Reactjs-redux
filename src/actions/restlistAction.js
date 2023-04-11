import axios from "axios";
import {R_SUCCESS,R_FAILURE} from '../constants/restconstants'
//logic fetch data from an api


export const RestListAction=()=>async(dispatch)=>{
    try{
        const result = await axios.get('./restaurants.json')
        console.log(result.data.restaurants);//array of 10
        dispatch({
            type:R_SUCCESS,
            payload:result.data.restaurants
        })
    }
    catch(error){
        dispatch({
            type:R_FAILURE,
            error:error
        })
    }
    }
