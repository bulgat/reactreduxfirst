import { Car } from "../types";

const initialState: Car[] = [
  { id: 1, name: "car0", speed: 200, weight: 1, description: "", img: "" },
  { id: 2, name: "car00", speed: 200, weight: 1, description: "", img: "" },
  { id: 3, name: "car000", speed: 200, weight: 1, description: "", img: "" },
];

export default function carReducer(
  state: Car[] = initialState,
  _action: unknown
): Car[] {
  return state;
}
