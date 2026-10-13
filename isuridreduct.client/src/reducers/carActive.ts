import { Car } from "../types";
import { CarAction } from "../actions";

export default function carActiveReducer(
  state: Car | null = null,
  action: CarAction
): Car | null {
  switch (action.type) {
    case "CAR_SELECTED":
      return action.payload;
    default:
      return state;
  }
}
