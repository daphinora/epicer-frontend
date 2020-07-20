import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

const collection = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5`
class RecipeCollection extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
        }
    }

    waitForIt = () => {
        if (this.state.recipes.length > 0) {
            this.renderRecipes()
            console.log(this.state.recipes)
        } else { setTimeout(this.waitForIt, 600) }
    }

    renderRecipes = () => {
        return this.state.recipes.map(r => <RecipeCard key={r.id} recipe={r} />)
    }

    render() {
        return (
            <div>
                <header>EPICER</header>
                {this.renderRecipes()}
            </div>
        );
    }

    componentDidMount() {
        this.fetchRecipeCollection()
        console.log(this.state.recipes)
    }

    fetchRecipeCollection = () => {
        console.log(process.env.REACT_APP_API_KEY)
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
