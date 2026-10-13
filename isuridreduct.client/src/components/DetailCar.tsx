import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => ({
  car: state.active,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const DetailCar = ({ car }: PropsFromRedux) => {
  if (!car) {
    return <p>select car</p>;
  }

  return (
    <>
      <h2>{car.name}</h2>
      <img src={car.img} alt={car.name} />
      <br />
      <p>{car.name}</p>
      <p>Speed: {car.speed}</p>
      <p>weight: {car.weight}</p>
    </>
  );
};

export default connector(DetailCar);
