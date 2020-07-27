import React, { Component } from 'react';
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
class RecipePage extends Component {
    constructor() {
        super();
        this.state = {
            recipe: {}
        }
    }

    showIngredients = () => {
        return this.state.recipe.extendedIngredients && 
        this.state.recipe.extendedIngredients.map(i => <Ingredient key={i.id} ingredient={i.original} />)
    }

    showInstructions = () => {
        return this.state.recipe.analyzedInstructions && 
        this.state.recipe.analyzedInstructions[0].steps.map(i => <Instruction key={i.number} step={i} />)
    }


    render() {
        const { title, image, readyInMinutes } = this.state.recipe

        return (
            <div>
                <h2>{title} | Ready In: {readyInMinutes} Minutes</h2>
                <img src={image} alt={title} />
                <div>
                    Ingredients: <br />
                    <ul>
                        {this.showIngredients()}
                    </ul>
                </div>
                Instructions:
                <ol className="instructions">
                    {this.showInstructions()}
                </ol>
                <Dropdown recipe={this.state.recipe} />
                <Link to={"/recipes"}>Back</Link>
            </div>
        );
    }

    componentDidMount() {
        this.getRecipe();
    }

    getRecipe = () => {
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.props.location.state.recipe}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(r => r.json())
            .then(response => this.setState({ recipe: response }))
            .catch(err => {
                console.log(err);
            });
    }
}

export default RecipePage;
