import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Categories from './pages/Categories/Categories.jsx';
import Vote from './pages/Vote/Vote.jsx';

const App = () => {
  console.log('Created with love by Flo');
  return (
      <Router>
        <Header />

      
        <Switch>
          <Route path="/" component={Categories} exact />
          <Route path="/vote/:name/:id" component={Vote} exact />
        </Switch>
      </Router>
  );
}

export default App;
