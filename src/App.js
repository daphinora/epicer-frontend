import '../css/App.css';
import React, { Component } from 'react';

import RecipeCollection from './RecipeCollection'
import RecipePage from './RecipePage';
import Menu from './Menu';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 5,
      menus: [],
    }
  }

  getMenus = () => {
    fetch(`http://localhost:3000/menus?user=${this.state.user_id}`)
      .then(r => r.json())
      .then(menus => this.setState({ menus }))
  }

  componentDidMount() {
    this.getMenus()
  }

  render() {
    return (
      <div>
        {/* NavBar */}
        <Router>
          <Switch>
            <Route exact path="/recipes" render={() => <RecipeCollection menus={this.state.menus} />} />
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


