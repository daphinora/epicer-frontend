import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

// components
import RecipeCard from './RecipeCard';

// css
import '../css/RecipeCollection.css'
import CardDeck from 'react-bootstrap/CardDeck';

class RecipeCollection extends Component {
    state = {
        recipes: [],
        collection: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=25`,
        searchTerm: ""
    }

    renderRecipes = () => {
        return this.state.recipes?.map(r => <RecipeCard key={r.id} recipe={r} menus={this.props.menus} image={`https://spoonacular.com/recipeImages/${r.id}-556x370.jpg`} />)
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=25&offset=0&query=${this.state.searchTerm}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(r => r.json())
            .then(r => this.setState({ recipes: r.results }))
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="big-r">
                <Helmet>
                    <title>Epicer | Recipes</title>
                </Helmet>
                <h2 className="col-header">Find your next recipe!</h2>
                <form className="search-form" onSubmit={this.handleSearch} >
                    <label>
                        Search:
                        <input type="text" onChange={(e) => this.handleChange(e)} />
                    </label>
                    <input type="submit" className="search-submit" />
                </form>
                <div >
                    <div className="rcollection" >
                        <CardDeck>
                            {this.renderRecipes()}
                        </CardDeck>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchRecipeCollection()
    }

    fetchRecipeCollection = () => {
        fetch(this.state.collection, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(r => r.json())
            .then(r => this.setState({ recipes: r.recipes }))
            .catch(err => {
                console.log(err);
            })
    }

}

export default RecipeCollection;
