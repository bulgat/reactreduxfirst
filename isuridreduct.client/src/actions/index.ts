import { Car } from "../types";

export const select = (car: Car) => ({
  type: "CAR_SELECTED" as const,
  payload: car,
});

export type CarAction = ReturnType<typeof select>;
