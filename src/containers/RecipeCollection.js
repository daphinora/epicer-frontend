import React, { Component } from 'react';

// components
import RecipeCard from './RecipeCard';

// css
import './css/RecipeCollection.css'

// for initial fetch
const collection = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=25`
class RecipeCollection extends Component {
    state = {
        recipes: [],
        favorites: [],
    }

    renderRecipes = () => {
        return this.state.recipes.map(r => <RecipeCard key={r.id} recipe={r} menus={this.props.menus} />)
    }

    render() {
        return (
            <div className="rcollection" >
                {this.renderRecipes()}
            </div>
        );
    }

    componentDidMount() {
        this.fetchRecipeCollection()
    }

    fetchRecipeCollection = () => {
        fetch(collection, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(r => r.json())
            .then(json => this.setState({ recipes: json.recipes }))
            .catch(err => {
                console.log(err);
            })
    }

}

export default RecipeCollection;
