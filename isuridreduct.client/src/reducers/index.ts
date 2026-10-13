import { combineReducers } from "redux";
import carReducer from "./car";
import carActiveReducer from "./carActive";
import { Car } from "../types";

export interface RootState {
  cars: Car[];
  active: Car | null;
}

const allReducer = combineReducers<RootState>({
  cars: carReducer,
  active: carActiveReducer,
});

export default allReducer;
