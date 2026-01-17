import logo from './logo.svg';
import './App.css';
import {WebPage} from './components/WebPage'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allReducer from './reducers';
import WebFormComponent from './components/web-form.component'

function App() {

  const store = createStore(allReducer);

  return (
      <>
          <h2>Redux React</h2>
          <img src='./desk.png' width='100px' />
        <Provider store={store}>
            <WebPage/>
          </Provider>
          <WebFormComponent/>
    </>
  );
}

export default App;
