import React from "react";
import CarsList from "../containers/cars_list";
import DetailCar from "./DetailCar";

const WebPage = () => {
  return (
    <div>
      <h3>Cars:</h3>
      <CarsList />
      <h4>details</h4>
      <DetailCar />
    </div>
  );
};

export { WebPage };
