import '../css/App.css';
import React, { Component } from 'react';

import RecipeCollection from './RecipeCollection'
import RecipePage from './RecipePage';
import Menu from './Menu';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        {/* NavBar */}
        <Router>
          <Switch>
            <Route exact path="/recipes" component={RecipeCollection} />
            <Route path="/recipes/" component={RecipePage} />
            <Route path="/menu" component={Menu} />
          </Switch>
        </Router>
        {/* Footer? */}
      </div>
    );
  }
}

export default App;


