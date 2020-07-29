import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css
import './css/App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import RecipeCollection from './recipe collection/RecipeCollection'
import RecipePage from './recipe page/RecipePage';
import MenuPage from './menu/MenuPage';
import WelcomeBanner from './WelcomeBanner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 1,
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
    const {menus, user_id} = this.state
    return (
      <div>
        {/* NavBar! */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">EPICER</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/menu">My Menu</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Navbar>

        {/* Routing! */}
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomeBanner} />
            <Route exact path="/recipes" render={() => <RecipeCollection menus={menus} />} />
            <Route path="/recipes/" render={(props) => <RecipePage {...props} menus={menus} />} />
            <Route path="/menu" render={(props) => <MenuPage {...props} user={user_id} menus={menus} />} />
          </Switch>
        </Router>
        {/* Footer? */}
      </div>
    );
  }
}

export default App;


