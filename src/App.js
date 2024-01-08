import { Provider } from 'react-redux';
import './App.css';
import './App.scss';
import Store from './Store';
import Router from './Router';

function App() {
  return (
    <Provider store={Store}>
      <Router/>
    </Provider>
  );
}

export default App;
