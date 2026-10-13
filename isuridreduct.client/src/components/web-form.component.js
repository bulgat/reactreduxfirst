import React from "react";
import CarsList from "../containers/cars_list";
import DetailCar from "./DetailCar";

const WebFormComponent = () => {

    console.log('000---', localStorage['submit']);

    const handleSubmit = () => {

        console.log('001---');
        //localStorage['submit'] = formData.get('login');
    }

    return (
    <>
    <div>
            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                    <div>
                        login: <input type='text' name='login'/>
                    </div>
                    <button>send</button>
            </form>
    </div>
    </>)
};

export default WebFormComponent