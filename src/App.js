import React from 'react';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Certificates from './components/pages/Certificates';
import './skeleton.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/certificates' component={Certificates} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
