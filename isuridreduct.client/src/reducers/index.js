import { combineReducers } from "redux";
import CarReducers from './car.js'
import { Provider } from "react-redux";
import {WebPage} from '../components/WebPage'
import carActiv from './carActive'

const allReducer = combineReducers({
    cars:CarReducers,
    active: carActiv
});

export default allReducer;