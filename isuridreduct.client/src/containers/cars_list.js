import React from "react";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {select} from '../actions/index'

class CarsList extends Component{
showList() {
    console.log("000====",this)
    console.log("001====",this.props)
    console.log("002====",this.props.cars)
    return this.props.cars.map((car)=>{
        return (
            <li onClick ={()=>this.props.select(car)}
             key={car.id}>{car.name}</li>
        );
    });
}

    render(){
        return(
            <>
            <ol>
{this.showList()}
            </ol>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
       cars: state.cars 
    };
}
function matchDispathToProps(dispatch) {
    return bindActionCreators({select:select},dispatch)
}

//export default CarsList mapStateToProps,
export default connect (mapStateToProps,matchDispathToProps)(CarsList)