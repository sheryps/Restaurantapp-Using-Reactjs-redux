
import {R_SUCCESS,R_FAILURE} from '../constants/restconstants'
export const restaurantListReducer=(state={restaurantList:[]},action)=>{
    switch (action.type) {
        case R_SUCCESS:
            return {...state,
                restaurantList:action.payload
            }
            break;
            case R_FAILURE:
                    return {
                        restaurantList:action.error
                    }    
                    break;
    
        default:
            return{
                state: action.state
            }
            break;
    }
}