import React from "react";
import "./App.css";
import { WebPage } from "./components/WebPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducer from "./reducers";
import WebFormComponent from "./components/web-form.component";

const store = createStore(allReducer);

function App() {
  return (
    <>
      <h2>Redux React</h2>
      <img src="./desk.png" width="100px" alt="desk" />
      <Provider store={store}>
        <WebPage />
      </Provider>
      <WebFormComponent />
    </>
  );
}

export default App;
