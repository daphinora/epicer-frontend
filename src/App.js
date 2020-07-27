import './css/App.css';
import React, { Component } from 'react';

import RecipeCollection from './containers/RecipeCollection'
import RecipePage from './containers/recipe page/RecipePage';
import MenuPage from './containers/menu/MenuPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 1,
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
            <Route path="/recipes/" render={(props) => <RecipePage {...props} menus={this.state.menus} />} />
            <Route path="/menu" render={(props) => <MenuPage {...props} menus={this.state.menus} />} />
          </Switch>
        </Router>
        {/* Footer? */}
      </div>
    );
  }
}

export default App;


