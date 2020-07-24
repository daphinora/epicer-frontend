import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';

const collection = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=25`
class RecipeCollection extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            favorites: [],
            menu: {
                monday: {
                    breakfast: {},
                    lunch: {},
                    dinner: {},
                    dessert: {},
                    snack: {}
                },
                tuesday: {
                    breakfast: {},
                    lunch: {},
                    dinner: {},
                    dessert: {},
                    snack: {}
                },
                wednesday: {
                    breakfast: {},
                    lunch: {},
                    dinner: {},
                    dessert: {},
                    snack: {}
                },
                thursday: {
                    breakfast: {},
                    lunch: {},
                    dinner: {},
                    dessert: {},
                    snack: {}
                },
                friday: {
                    breakfast: {},
                    lunch: {},
                    dinner: {},
                    dessert: {},
                    snack: {}
                },
                saturday: {
                    breakfast: {},
                    lunch: {},
                    dinner: {},
                    dessert: {},
                    snack: {}
                },
                sunday: {
                    breakfast: {},
                    lunch: {},
                    dinner: {},
                    dessert: {},
                    snack: {}
                }
            }
        }
    }

    addToMenu = (weekday, meal, recipe) => {
        console.log(weekday, meal, recipe)
        
        // post fetch the recipe, each step of the recipe, each ingredient of the recipe,
        // and make the joiner table for recipe:ingredient

        // just post fetch the recipe id for now ??? :D
    }

    renderRecipes = () => {
        return this.state.recipes.map(r => <RecipeCard key={r.id} recipe={r} handleAdd={this.addToMenu} />)
    }

    render() {
        const { menu } = this.state
        return (
            <div>
                <header>EPICER</header>
                <Link to={{ pathname: '/menu', state: { menu } }} className="btn">Menu</Link>
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
