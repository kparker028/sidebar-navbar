import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    <Navbar />
    <Route path='/' />
    </Switch>
    </Router>
  );
}

export default App;
