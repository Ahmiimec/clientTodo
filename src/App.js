
import './App.css';
import Display from './components/display';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

const store = createStore(Reducers)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Display></Display>
    </div>
    </Provider>
  );
}

export default App;
