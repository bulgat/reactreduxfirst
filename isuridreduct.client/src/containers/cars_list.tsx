import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { select } from "../actions";
import { RootState } from "../reducers";
import { Car } from "../types";

const mapStateToProps = (state: RootState) => ({
  cars: state.cars,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ select }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CarsList = ({ cars, select }: PropsFromRedux) => {
  return (
    <ol>
      {cars.map((car: Car) => (
        <li key={car.id} onClick={() => select(car)}>
          {car.name}
        </li>
      ))}
    </ol>
  );
};

export default connector(CarsList);
