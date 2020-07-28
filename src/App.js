import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css
import './css/App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import RecipeCollection from './containers/RecipeCollection'
import RecipePage from './containers/recipe page/RecipePage';
import MenuPage from './containers/menu/MenuPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 7,
      menus: [],
      status: true,
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
        {/* NavBar! */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">EPICER</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/menu">My Menu</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        
        {/* Routing! */}
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


