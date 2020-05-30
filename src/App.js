import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.scss';
import Header from './components/Header';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
