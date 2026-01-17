import logo from './logo.svg';
import './App.css';
import {WebPage} from './components/WebPage'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allReducer from './reducers';

function App() {

  const store = createStore(allReducer);

  return (
      <>
          <h2>Redux React</h2>
          <img src='./desk.png' width='100px' />
        <Provider store={store}>
            <WebPage/>
        </Provider>
    </>
  );
}

export default App;
