import React from 'react';
import Links from './components/layout/Links';
import Social from './components/layout/Social';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Links />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Social />
    </Router>
  );
}

export default App;
