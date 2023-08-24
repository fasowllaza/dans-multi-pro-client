import React from 'react'; 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/index";
import Login from './pages/Login';
import Recruitment from './pages/Recruitment';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/recruitment" component={Recruitment} />
        <Route exact path="/recruitment/:id" component={Recruitment} />
        <Route exact path="/register" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
