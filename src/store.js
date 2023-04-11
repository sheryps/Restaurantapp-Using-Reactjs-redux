import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restReducers";
//to create reducer
const reducers=combineReducers({
    restaurantReducer:restaurantListReducer
})

//middleware
const middleware=[thunk]

//to create store
const store=createStore(reducers,applyMiddleware(...middleware));

export default store;
